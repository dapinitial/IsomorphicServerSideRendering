import path from 'path';
import express from 'express';
import cors from 'cors';
import router from './router';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import encryptMail from 'nodemailer-openpgp';

const app = express();
const favicon = require('serve-favicon');

require('dotenv').config()

app.use(favicon(path.join(__dirname, '../', 'images', 'favicon.ico')));

const assets = express.static(path.join(__dirname, '../'));

app.use(cors());
app.use(assets);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('*', router);
app.post('/sendmail', (req, res) => {
  console.log(req.body);

  const mailLogin = process.env.MAILGUN_LOGIN;
  const mailPassword = process.env.MAILGUN_PASSWORD;
  const emailRoute = process.env.EMAIL;
  const smsRoute = process.env.SMS;
  const output = `
    <p>You have a new message from davidpuerto.com</p>
    <h3>Contact Details:</h3>
    <ul>
      <li>Name: ${req.body.sendmail_name}</li>
      <li>E-mail: ${req.body.sendmail_email}</li>
      <li>Phone: ${req.body.sendmail_phone}</li>
      <li>Instagram: ${req.body.sendmail_instagram}</li>
    </ul>
    <h3>Message:</h3>
    <p>${req.body.sendmail_message}</p>
  `; // end output

  // create reusable transporter object using the default SMTP transport
  nodemailer.createTransport('smtps://' + mailLogin + ':' + mailPassword + '@smtp.mailgun.org');

  let smtpConfig = {
    host: 'smtp.mailgun.org',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: mailLogin,
      pass: mailPassword

    }
  };
  let transporter = nodemailer.createTransport(smtpConfig);

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"DavidPuerto.com 👻" <' + mailLogin + '>', // sender address
    to: '"' + emailRoute + '"', // list of receivers
    subject: 'Love from your visitor ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);

    }
    console.log('Message sent: %s', info.messageId);

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com> Preview
    // URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
});

export default app;