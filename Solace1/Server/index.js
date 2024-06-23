// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const nodemailer = require('nodemailer');

// // const app = express();
// // const port = 3000;

// // app.use(bodyParser.json());

// // // Endpoint to handle prediction (mocked for example purposes)
// // app.post('/predict', (req, res) => {
// //     // Mocked prediction result
// //     res.json({ predicted_stress_level: Math.random() * 100 });
// // });

// // // Endpoint to handle sending email
// // app.post('/send-email', async (req, res) => {
// //     const {
// //         extraverted,
// //         anxious,
// //         institution,
// //         program,
// //         class_level,
// //         gender,
// //         living_with_family,
// //         academic_condition,
// //         addicted,
// //         relationship,
// //         age,
// //         email,
// //         predicted_stress_level
// //     } = req.body;

// //     const emailBody = `
// //         Extraverted, enthusiastic: ${extraverted}\n
// //         Anxious, easily upset: ${anxious}\n
// //         Institution: ${institution}\n
// //         Program of Study: ${program}\n
// //         Class Level: ${class_level}\n
// //         Gender: ${gender}\n
// //         Living with Family: ${living_with_family}\n
// //         Happy with Academic Condition: ${academic_condition}\n
// //         Addicted to Drugs: ${addicted}\n
// //         In a Relationship: ${relationship}\n
// //         Age: ${age}\n
// //         Predicted Stress Level: ${predicted_stress_level}%
// //     `;

// //     // Set up Nodemailer transporter
// //     let transporter = nodemailer.createTransport({
// //         service: 'gmail', // Use your email service
// //         auth: {
// //             user: 'barathparthi2005kumar@gmail.com', // Your email
// //             pass: 'tibx yvwt athb swiz' // Your email password
// //         }
// //     });

// //     let mailOptions = {
// //         from: 'happyjoy0507@gmail.com', // Sender email
// //         to: email, // Recipient email
// //         subject: 'Your Stress Level Prediction',
// //         text: emailBody
// //     };

// //     try {
// //         await transporter.sendMail(mailOptions);
// //         res.status(200).json({ message: 'Email sent successfully' });
// //     } catch (error) {
// //         console.error('Error sending email:', error);
// //         res.status(500).json({ message: 'Error sending email', error });
// //     }
// // });

// // app.listen(port, () => {
// //     console.log(`Server is running on port ${port}`);
// // });




// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Endpoint to handle prediction (mocked for example purposes)
// app.post('/predict', (req, res) => {
//     // Mocked prediction result
//     res.json({ predicted_stress_level: Math.random() * 100 });
// });

// // Endpoint to handle sending email
// app.post('/send-email', async (req, res) => {
//     const {
//         extraverted,
//         anxious,
//         institution,
//         program,
//         class_level,
//         gender,
//         living_with_family,
//         academic_condition,
//         addicted,
//         relationship,
//         age,
//         email,
//         predicted_stress_level
//     } = req.body;

//     const emailBody = `
//         Extraverted, enthusiastic: ${extraverted}\n
//         Anxious, easily upset: ${anxious}\n
//         Institution: ${institution}\n
//         Program of Study: ${program}\n
//         Class Level: ${class_level}\n
//         Gender: ${gender}\n
//         Living with Family: ${living_with_family}\n
//         Happy with Academic Condition: ${academic_condition}\n
//         Addicted to Drugs: ${addicted}\n
//         In a Relationship: ${relationship}\n
//         Age: ${age}\n
//         Predicted Stress Level: ${predicted_stress_level}%
//     `;

//     // Set up Nodemailer transporter
//     let transporter = nodemailer.createTransport({
//         service: 'gmail', // Use your email service
//         auth: {
//             user: 'barathparthi2005kumar@gmail.com', // Your email
//             pass: 'tibx yvwt athb swiz' // Your email password
//         }
//     });

//     let mailOptions = {
//         from: 'happyjoy0507@gmail.com', // Sender email
//         to: email, // Recipient email
//         subject: 'Your Stress Level Prediction',
//         text: emailBody
//     };

//     try {
//         let info = await transporter.sendMail(mailOptions);
//         console.log('Email sent: ' + info.response);
//         res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ message: 'Error sending email', error });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });



// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const cors = require('cors'); // Import cors

// const app = express();
// const port = 3000;

// app.use(cors()); // Use cors
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Endpoint to handle prediction (mocked for example purposes)
// app.post('/predict', (req, res) => {
//     // Mocked prediction result
//     res.json({ predicted_stress_level: Math.random() * 100 });
// });

// // Endpoint to handle sending email
// app.post('/send-email', async (req, res) => {
//     const {
//         extraverted,
//         anxious,
//         institution,
//         program,
//         class_level,
//         gender,
//         living_with_family,
//         academic_condition,
//         addicted,
//         relationship,
//         age,
//         email,
//         predicted_stress_level
//     } = req.body;

//     const emailBody = `
//         Extraverted, enthusiastic: ${extraverted}\n
//         Anxious, easily upset: ${anxious}\n
//         Institution: ${institution}\n
//         Program of Study: ${program}\n
//         Class Level: ${class_level}\n
//         Gender: ${gender}\n
//         Living with Family: ${living_with_family}\n
//         Happy with Academic Condition: ${academic_condition}\n
//         Addicted to Drugs: ${addicted}\n
//         In a Relationship: ${relationship}\n
//         Age: ${age}\n
//         Predicted Stress Level: ${predicted_stress_level}%
//     `;

//     // Set up Nodemailer transporter
//     let transporter = nodemailer.createTransport({
//         service: 'gmail', // Use your email service
//         auth: {
//             user: 'Solace2306@gmail.com', // Your email
//             pass: 'myxo ulaw zrka plpf' // Your email password
//             // myxo ulaw zrka plpf
//         }
//     });

//     let mailOptions = {
//         from: 'happyjoy0507@gmail.com', // Sender email
//         to: email, // Recipient email
//         subject: 'Your Stress Level Prediction',
//         text: emailBody
//     };

//     try {
//         let info = await transporter.sendMail(mailOptions);
//         console.log('Email sent: ' + info.response);
//         res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ message: 'Error sending email', error });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });



const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import cors

const app = express();
const port = 3000;

app.use(cors()); // Use cors
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle prediction (mocked for example purposes)
app.post('/predict', (req, res) => {
    // Mocked prediction result
    res.json({ predicted_stress_level: Math.random() * 100 });
});

// Endpoint to handle sending email
app.post('/send-email', async (req, res) => {
    const {
        extraverted,
        anxious,
        institution,
        program,
        class_level,
        gender,
        living_with_family,
        academic_condition,
        addicted,
        relationship,
        age,
        // email,
        predicted_stress_level
    } = req.body;

    const emailBody = `
        Extraverted, enthusiastic: ${extraverted}\n
        Anxious, easily upset: ${anxious}\n
        Institution: ${institution}\n
        Program of Study: ${program}\n
        Class Level: ${class_level}\n
        Gender: ${gender}\n
        Living with Family: ${living_with_family}\n
        Happy with Academic Condition: ${academic_condition}\n
        Addicted to Drugs: ${addicted}\n
        In a Relationship: ${relationship}\n
        Age: ${age}\n
        Predicted Stress Level: ${predicted_stress_level}%
    `;

    try {
        // Create Nodemailer transporter
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'Solace2306@gmail.com', // Replace with your email
                pass: 'myxo ulaw zrka plpf' // Replace with your email password
            }
        });

        // Define email options
        let mailOptions = {
            // from: 'Solace2306@gmail.com',
            to:'kvsankar02@gmail.com' ,
            subject: 'Your Stress Level Prediction',
            text: emailBody
        };

        // Send email
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email', error });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
