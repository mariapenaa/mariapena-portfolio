const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config()
const serverless = require('serverless-http');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors())
app.listen(PORT, console.log(`Server started on port ${PORT}`));

app.use(express.json());
app.use("/", router);


/* 
contactEmail.verify(function(error, success) {
if (error) {
    console.log(error);
} else {
    console.log("Server is ready to take our messages");
}
}); */
  




  router.post("/contacto", (req, res) => {

    const contactEmail = nodemailer.createTransport({
      service:'Zoho',
      host: "smtp.zoho.com",
      port: 465,
      secure:true,
      auth: {
        user: process.env.MAIL_USER,
        pass:process.env.MAIL_PASSWORD,
      },
    });
    contactEmail.verify((error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Ready to Send");
      }
    });
    const {firstName, lastName, email, phone, service, message} = req.body

    const mail = {
      from:  '"Maria Peña" <maria@mariapenadev.com>',
      to: "mariapenadev@gmail.com",
      subject: service,
      html: `<p>Name: ${firstName + ' '+lastName}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
    };
    
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        console.log(error)
        res.json({ status: "failed" });
        
      } else {
        res.json({ status: "sent" });
      }
    });
  });

  module.exports = app;
  module.exports.handler = serverless(app);
