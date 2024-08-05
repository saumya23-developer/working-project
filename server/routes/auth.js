import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { generateOTP, sendOTP } from "../utils/otpUtils.js"; // Ensure this path is correct

const router = express.Router();
let otpStore = {}; // Temporary in-memory store; use a database in production

// Register Route
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // Generate and send OTP
    const otp = generateOTP();
    otpStore[email] = otp; // Save OTP in-memory for now
    await sendOTP(email, otp);

    res.status(201).send("User registered. Check your email for OTP.");
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({ message: "Error registering user" });
  }
});

// Verify OTP Route
router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;
  if (otpStore[email] === otp) {
    delete otpStore[email]; // OTP is used, remove from store
    res.status(200).send("OTP verified successfully.");
  } else {
    res.status(400).send("Invalid OTP.");
  }
});

// Resend OTP Route
router.post("/resend-otp", async (req, res) => {
  const { email } = req.body;
  try {
    const otp = generateOTP(); // Generate new OTP
    otpStore[email] = otp;

    await sendOTP(email, otp);
    res.status(200).send({ message: "OTP resent successfully" });
  } catch (error) {
    console.error("Error resending OTP:", error);
    res.status(500).send({ message: "Error resending OTP" });
  }
});

// Login Route (for completeness)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("User not found");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid credentials");
    const token = jwt.sign({ id: user._id }, "secretKey", { expiresIn: "1h" });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).send("Error logging in user");
  }
});

router.get("/test-email", async (req, res) => {
  try {
    const email = "dipudbg44@gmail.com";
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Test Email",
      text: "This is a test email",
    };
    await transporter.sendMail(mailOptions);
    res.send("Test email sent successfully");
  } catch (error) {
    console.error("Error sending test email:", error);
    res.status(500).send("Error sending test email");
  }
});

export default router;
