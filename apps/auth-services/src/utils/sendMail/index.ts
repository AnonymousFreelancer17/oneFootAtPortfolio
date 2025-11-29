import nodemailer from "nodemailer";
import dotenv from "dotenv";
import ejs from "ejs";
import path from "path";
import fs from "fs";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  service: process.env.SMTP_SERVICE,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const renderEmailTemplate = async (
  templateName: string,
  data: Record<string, any>
): Promise<string> => {
  const templatePath = path.join(
    process.cwd(),
    "apps",
    "auth-services",
    "src",
    "utils",
    "email-templates",
    `${templateName}.ejs`
  );

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Email template not found: ${templatePath}`);
  }

  return ejs.renderFile(templatePath, data, { async: true });
};

export const sendEmail = async (
  to: string,
  subject: string,
  templateName: string,
  data: Record<string, any>
) => {
  try {
    // console.log(to);
    
    if (!to || !to.includes("@")) {
      throw new Error("Invalid recipient email address");
    }

    const html = await renderEmailTemplate(templateName, data);

    const info = await transporter.sendMail({
      from: `"Retail CRM" <${process.env.SMTP_USER}>`,
      to: to.trim(),
      subject,
      html,
      text: html.replace(/<[^>]*>/g, ""), // plain text fallback
    });

     
    return true;
  } catch (error) {
    console.error("Email Sending Error:", error);
    return false;
  }
};
