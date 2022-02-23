const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config({path:'../.env'})
const serverless = require('serverless-http');
app.use(cors())

const PORT = process.env.PORT || 8080;

const app = express();
app.listen(PORT, console.log(`Server started on port ${PORT}`));
app.use(cors());
app.use(express.json());
app.use("/", router);


const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.REACT_APP_MAIL_USER,
      pass:process.env.REACT_APP_MAIL_PASSWORD,
    },
  });

contactEmail.verify(function(error, success) {
if (error) {
    console.log(error);
} else {
    console.log("Server is ready to take our messages");
}
});
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.get('/', cors(), (req, res) => {
    res.json(
        [
            {
                'id': '001',
                'name': 'Smith',
                'email': 'smith@gmail.com'
            },
            {
                'id': '002',
                'name': 'Sam',
                'email': 'sam@gmail.com'
            },
            {
                'id': '003',
                'name': 'lily',
                'email': 'lily@gmail.com'
            }
        ]
    )
})


  router.post("/contacto", cors(), (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.text; 
    const mail = {
      from: name,
      to: "mpena@udesa.edu.ar",
      subject: subject,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };
    
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "failed" });
      } else {
        res.json({ status: "sent" });
      }
    });
  });

  module.exports.handler = serverless(app);