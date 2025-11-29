import nodemailer from "nodemailer"


export const mailSend  = async(req, res) =>{
  const { name, email, phone, message, project } = req.body;

  var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});
  
  console.log(process.env.SMTP_USER, process.env.SMTP_PASS)
  try {
      await transporter.sendMail({
          from: email,
          to: "1bhaveshjaswani1@gmail.com",     // Receiver
          subject: `New Enquiry - ${project}`,
          text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Selected Project: ${project}
          Message: ${message}
          `,
        });

    res.status(200).json({ success: true, message: "Email Sent Successfully!" });
  } catch (error) {
    console.log(error,"SMTTP Error")
    res.status(500).json({ success: false, message: "Error sending email", error });
  }
}