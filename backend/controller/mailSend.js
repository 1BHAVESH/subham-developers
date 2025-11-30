import nodemailer from "nodemailer"

export const mailSend = async (req, res) => {
  const { name, email, phone, message, project } = req.body;

  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  // 📌 Project conditionally add karo
  const projectText = project ? `Selected Project: ${project}\n` : "";   // 👈 if project exists

  try {
    await transporter.sendMail({
      from: email,
      to: "1bhaveshjaswani1@gmail.com", // Receiver
      subject: project ? `New Enquiry - ${project}` : "New Enquiry",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        ${projectText}   // 👈 Only if project exists
        Message: ${message}
      `,
    });

    res.status(200).json({ success: true, message: "Email Sent Successfully!" });
  } catch (error) {
    console.log(error, "SMTP Error");
    res.status(500).json({ success: false, message: "Error sending email", error });
  }
};
