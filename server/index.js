require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Fixed Admin Email
const ADMIN_EMAIL = 'inspiresports17@gmail.com';

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Endpoint for Contact Form Submissions
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: ADMIN_EMAIL,
    replyTo: email,
    subject: 'New Submission - Sportify (Contact Form)',
    text: `
      New Contact Form Submission:
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Message: ${message}
      
      ---
      Sportify Administration
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Endpoint for Registration Form Submissions
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: ADMIN_EMAIL,
    replyTo: email,
    subject: 'New Submission - Sportify (New Registration)',
    text: `
      New User Registration Alert:
      
      Name: ${name}
      Email: ${email}
      Password (Hidden): ${password.replace(/./g, '*')}
      
      ---
      Note: A new user has signed up for Sportify.
      Sportify Administration
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Registration alert sent' });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send alert' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
