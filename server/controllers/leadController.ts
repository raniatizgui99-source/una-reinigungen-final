import { Request, Response } from "express";
import { sendLeadEmails } from "../services/emailService";

export const submitLead = async (req: Request, res: Response): Promise<void> => {
  const { formData } = req.body;

  if (!formData) {
    res.status(400).json({ error: "Missing form data" });
    return;
  }

  try {
    const sent = await sendLeadEmails(formData);
    if (sent) {
      res.json({ success: true, message: "Emails sent successfully" });
    } else {
      res.json({ success: true, message: "Form submitted (email skipped due to missing credentials)" });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};
