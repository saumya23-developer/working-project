import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: "ksaumya437@gmail.com",
    pass: "jlgvfoupjlbddqbx",
  },
});

export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendOTP = async (email, otp) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "OTP for verification",
      text: `Your OTP is: ${otp}`,
    };

    console.log("Sending OTP to", email);
    await transporter.sendMail(mailOptions);
    console.log("OTP sent successfully");
  } catch (error) {
    console.error("Error sending OTP:", error);
  }
};
