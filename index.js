const express = require('express')
const nodemailer = require("nodemailer");
const cors = require('cors')
const bodyParser = require('body-parser')

const router = express.Router();



const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

let smtp_login = process.env.SMTP_LOGIN ||  "----"
let smtp_pass = process.env.SMTP_PASS || '----'

let transporter = nodemailer.createTransport({
    // service: "gmail"
    host: "smtp.gmail.com",
    port: 587,
    // port: 25,
    secure: false, // true for 465, false for other ports
    // requireTLS:true,
    // tls: {
    //     rejectUnauthorized: false
    // },
    auth: {
        user: smtp_login, // generated ethereal user
        pass: smtp_pass// generated ethereal password
    }
});


app.get('/', function (req, res) {
    res.send('Hello World')
})

app.post('/sendMessage', async function (req, res) {

    let {textName, email, textSubject, message} = req.body
    console.log('textName c index.js',textName)
    let info = await transporter.sendMail({
        from: 'HR WANTS ME', // sender address
        to: "romanmoisidi@gmail.com", // list of receivers
        // to: "r.rybkin94@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        //text: "Hello world?", // plain text body
        html: `<b>Hello world?</b>
                <div>${textName}</div>
                <div>${email}</div>
                <div>${textSubject}</div>
                <div>${message}</div>
`
    });

    // transporter.sendMail(info, (error, info) => {
    //     if (error) {
    //         console.log(error);
    //         res.status(500).send('Error sending email');
    //     } else {
    //         console.log(`Email sent: ${info.response}`);
    //         res.send('Email sent successfully');
    //     }
    // });
    // res.send(req.body)
    res.send(req.body)
})

let port = process.env.PORT || 3009

app.listen(port, function () {
    console.log('Example app listening on port 3009')
})