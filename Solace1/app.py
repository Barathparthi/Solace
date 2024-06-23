# from flask import Flask, render_template, request, jsonify
# import joblib
# import pandas as pd
# import smtplib
# from email.mime.text import MIMEText
# from email.mime.multipart import MIMEMultipart

# app = Flask(__name__)

# # Load the model, scaler, and column names
# model = joblib.load('stress_prediction_model_xgboost.pkl')
# scaler = joblib.load('scaler_xgboost.pkl')
# X_columns = joblib.load('X_columns.pkl')


# @app.route('/')
# def home():
#     return render_template('index.html')

# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         # Extract form data
#         form_data = request.form.to_dict()
#         input_data = {key: [value] for key, value in form_data.items()}

#         # Convert to DataFrame and ensure all columns are present
#         input_df = pd.DataFrame.from_dict(input_data)
#         input_df = pd.get_dummies(input_df).reindex(columns=X_columns, fill_value=0)

#         # Standardize the input data
#         scaled_data = scaler.transform(input_df)

#         # Make prediction
#         prediction = model.predict(scaled_data)
#         predicted_stress_level = prediction[0]

#         return jsonify({'predicted_stress_level': predicted_stress_level})

#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

# # @app.route('/send-email', methods=['POST'])
# # def send_email():
# #     email_data = request.json
# #     recipient_email = email_data['email']
# #     predicted_stress_level = email_data['predicted_stress_level']

# #     # Create the email content
# #     subject = "Your Stress Level Prediction"
# #     body = f"""
# #     Your Stress Level Prediction Result:
# #     Extraverted, enthusiastic: {email_data['extraverted']}
# #     Anxious, easily upset: {email_data['anxious']}
# #     The name of your institution: {email_data['institution']}
# #     The name of your program of study: {email_data['program']}
# #     Your current class level is: {email_data['class_level']}
# #     Your gender: {email_data['gender']}
# #     Living with family?: {email_data['living_with_family']}
# #     Are you happy with your academic Condition?: {email_data['academic_condition']}
# #     Are you addicted to any drugs?: {email_data['addicted']}
# #     Are you in a relationship?: {email_data['relationship']}
# #     Age: {email_data['age']}
# #     Predicted Stress Level: {predicted_stress_level}%
# #     """

# #     msg = MIMEMultipart()
# #     msg['From'] = 'your_email@example.com'
# #     msg['To'] = recipient_email
# #     msg['Subject'] = subject
# #     msg.attach(MIMEText(body, 'plain'))

# #     # Send the email
# #     try:
# #         server = smtplib.SMTP('smtp.example.com', 587)
# #         server.starttls()
# #         server.login('your_email@example.com', 'your_password')
# #         server.sendmail('your_email@example.com', recipient_email, msg.as_string())
# #         server.quit()
# #         return jsonify({'message': 'Email sent successfully!'}), 200
# #     except Exception as e:
# #         return jsonify({'message': 'Error sending email', 'error': str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True)




from flask import Flask, request, jsonify, render_template
import pandas as pd
import joblib

# Load the model, scaler, and column names
model = joblib.load('stress_prediction_model_xgboost.pkl')
scaler = joblib.load('scaler_xgboost.pkl')
X_columns = joblib.load('X_columns.pkl')

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get data from form
    data = request.form.to_dict()
    df = pd.DataFrame([data])

    # Ensure numerical values are interpreted correctly
    df = df.apply(pd.to_numeric, errors='ignore')

    # Process 'Age' column if it exists
    if 'Age' in df.columns:
        age_mapping = {
            '18-20': 19,
            '21-23': 22,
            '24-26': 25,
            '> 25': 26
        }
        df['Age'] = df['Age'].map(age_mapping)
    
    # Handle other necessary preprocessing steps here
    categorical_columns = ["The name of your institution", "The name of your program of study", "Your current class level is", 
                           "Your gender", 'Living with family?', 'Are you happy with your academic Condition?', 
                           'Are you addicted to any drugs?', 'Are you in a relationship?']
    # Strip any spaces in column names
    categorical_columns = [col.strip() for col in categorical_columns]
    
    # Check for missing columns and add them with default values
    for col in categorical_columns:
        if col not in df.columns:
            df[col] = None  # or some default value

    # Ensure all columns are properly encoded
    df = pd.get_dummies(df, columns=categorical_columns)
    
    # Ensure all columns match training columns
    df = df.reindex(columns=X_columns, fill_value=0)
    
    # Scale the data
    df_scaled = scaler.transform(df)
    
    # Predict stress level
    prediction = model.predict(df_scaled)
    predicted_stress_level = prediction[0] * 100  # Assuming output is between 0 and 1
    
    return jsonify({'predicted_stress_level': predicted_stress_level})

if __name__ == '__main__':
    app.run(debug=True)

