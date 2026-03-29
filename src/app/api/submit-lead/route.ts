import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { formData } = await req.json();

    if (!formData) {
      return NextResponse.json({ error: "Missing form data" }, { status: 400 });
    }

    await prisma.lead.create({
      data: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        zip: formData.zip,
        date: formData.date,
        rooms: formData.rooms,
        category: formData.category,
        addons: formData.addons,
        message: formData.message || '',
      }
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL || 'info@una-reinigungen.ch',
      subject: `Neue Buchungsanfrage: ${formData.name}`,
      text: `
        Neue Buchungsanfrage von der Website:
        Name: ${formData.name}
        Email: ${formData.email}
        Telefon: ${formData.phone}
        PLZ: ${formData.zip}
        Datum: ${formData.date}
        Zimmer: ${formData.rooms}
        Kategorie: ${formData.category}
        Zusatzleistungen: ${formData.addons.join(", ")}
        Nachricht: ${formData.message}
      `,
      html: `
        <h2>Neue Buchungsanfrage</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Telefon:</strong> ${formData.phone}</p>
        <p><strong>PLZ:</strong> ${formData.zip}</p>
        <p><strong>Datum:</strong> ${formData.date}</p>
        <p><strong>Zimmer:</strong> ${formData.rooms}</p>
        <p><strong>Kategorie:</strong> ${formData.category}</p>
        <p><strong>Zusatzleistungen:</strong> ${formData.addons.join(", ")}</p>
        <p><strong>Nachricht:</strong> ${formData.message}</p>
      `,
    };

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: 'Bestätigung Ihrer Buchungsanfrage - UNA Reinigungen',
      text: `Guten Tag ${formData.name}, Vielen Dank für Ihre Buchungsanfrage. Unser Team wird Ihre Angaben prüfen...`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #c9302c;">Vielen Dank für Ihre Buchungsanfrage</h2>
          <p>Guten Tag ${formData.name},</p>
          <p>Vielen Dank für Ihre Buchungsanfrage bei UNA Reinigungen. Wir haben Ihre Anfrage erhalten und bestätigen hiermit den Eingang.</p>
          <p>Unser Team wird Ihre Angaben prüfen und sich <strong>in Kürze persönlich bei Ihnen melden</strong>, um die Details zu besprechen und Ihnen eine verbindliche Offerte zuzusenden.</p>
        </div>
      `,
    };

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(userMailOptions);
      return NextResponse.json({ success: true, message: "Emails sent successfully" });
    } else {
      console.log("Email credentials missing, skipping email send. Form data:", formData);
      return NextResponse.json({ success: true, message: "Form submitted (email skipped due to missing credentials)" });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
