import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD, 
    // This should be a 16-char Gmail App Password, NOT the account password.
    // The Gmail account needs 2-Step Verification turned on to generate an App Password.
  },
});

/* 
Alternative setup for Resend (if you decide to upgrade for better deliverability):
import { Resend } from 'resend';
export const resend = new Resend(process.env.RESEND_API_KEY);
*/
