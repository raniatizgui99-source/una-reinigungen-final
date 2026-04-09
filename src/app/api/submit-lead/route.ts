import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';


export async function POST(req: Request) {
  try {
    const { formData } = await req.json();

    if (!formData) {
      return NextResponse.json({ error: "Missing form data" }, { status: 400 });
    }

    // Save to Database
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

    const renderAdminEmailHtml = () => `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Lead - UNA Reinigungen</title>
      </head>
      <body style="font-family: 'Inter', Helvetica, Arial, sans-serif; background-color: #f9f6f0; margin: 0; padding: 40px 0; color: #111;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-w-7xl mx-auto max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); overflow: hidden;">
          <tr>
            <td style="background-color: #111; padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 2px; text-transform: uppercase;">UNA <span style="color: #c9302c;">Reinigungen</span></h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="font-size: 20px; font-weight: 600; margin-top: 0; margin-bottom: 24px; border-bottom: 2px solid #f0f0f0; padding-bottom: 15px;">New Booking Request</h2>
              
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="font-size: 15px; line-height: 1.6;">
                <tr><td width="35%" style="padding: 8px 0; color: #666;"><strong>Name:</strong></td><td style="padding: 8px 0; font-weight: 500;">${formData.name}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td><td style="padding: 8px 0; font-weight: 500;"><a href="mailto:${formData.email}" style="color: #c9302c; text-decoration: none;">${formData.email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td><td style="padding: 8px 0; font-weight: 500;">${formData.phone}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;"><strong>ZIP Code:</strong></td><td style="padding: 8px 0; font-weight: 500;">${formData.zip}</td></tr>
                <tr><td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; border-top: 1px solid #f0f0f0;"><br></td><td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; border-top: 1px solid #f0f0f0;"><br></td></tr>
                <tr><td style="padding: 8px 0; color: #666; padding-top: 16px;"><strong>Date:</strong></td><td style="padding: 8px 0; font-weight: 500; padding-top: 16px;">${formData.date}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;"><strong>Category:</strong></td><td style="padding: 8px 0; font-weight: 500;">${formData.category}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;"><strong>Rooms:</strong></td><td style="padding: 8px 0; font-weight: 500;">${formData.rooms}</td></tr>
                <tr><td style="padding: 8px 0; color: #666;"><strong>Extras:</strong></td><td style="padding: 8px 0; font-weight: 500;">${formData.addons.length > 0 ? formData.addons.join(", ") : "None"}</td></tr>
              </table>

              ${formData.message ? `
              <div style="margin-top: 30px; background-color: #f9f6f0; padding: 20px; border-radius: 6px; border-left: 4px solid #c9302c;">
                <p style="margin: 0; font-size: 14px; color: #666; margin-bottom: 8px;"><strong>Message / Notes:</strong></p>
                <p style="margin: 0; font-size: 15px; font-style: italic;">"${formData.message}"</p>
              </div>
              ` : ''}
              
              <div style="margin-top: 40px; text-align: center;">
                <a href="mailto:${formData.email}" style="display: inline-block; background-color: #c9302c; color: white; text-decoration: none; padding: 12px 24px; font-weight: 600; border-radius: 4px; letter-spacing: 0.5px;">REPLY TO CUSTOMER</a>
              </div>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const renderCustomerEmailHtml = () => `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Request Received - UNA Reinigungen</title>
      </head>
      <body style="font-family: 'Inter', Helvetica, Arial, sans-serif; background-color: #f9f6f0; margin: 0; padding: 40px 0; color: #111;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); overflow: hidden;">
          <tr>
            <td style="background-color: #111; padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 26px; letter-spacing: 2px; text-transform: uppercase;">UNA <span style="color: #c9302c;">Reinigungen</span></h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="font-size: 22px; font-weight: 600; margin-top: 0; margin-bottom: 20px; color: #111;">Vielen Dank für Ihre Anfrage!</h2>
              <p style="font-size: 16px; line-height: 1.6; color: #444; margin-bottom: 20px;">
                Guten Tag ${formData.name},
              </p>
              <p style="font-size: 16px; line-height: 1.6; color: #444; margin-bottom: 24px;">
                Wir haben Ihre Buchungsanfrage erfolgreich erhalten. Unser Team wird Ihre Angaben sorgfältig prüfen und sich <strong>in Kürze persönlich bei Ihnen melden</strong>, um die Details zu besprechen und Ihnen eine verbindliche Offerte zuzusenden.
              </p>
              
              <div style="background-color: #f9f6f0; border-left: 3px solid #c9302c; padding: 20px; border-radius: 4px; margin-bottom: 30px;">
                <h3 style="margin-top: 0; font-size: 15px; color: #333; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px;">Ihre Anfrage in der Übersicht</h3>
                <p style="margin: 0 0 8px 0; font-size: 14px; color: #555;"><strong>Datum:</strong> ${formData.date}</p>
                <p style="margin: 0 0 8px 0; font-size: 14px; color: #555;"><strong>Kategorie:</strong> ${formData.category}</p>
                <p style="margin: 0; font-size: 14px; color: #555;"><strong>Zimmer:</strong> ${formData.rooms}</p>
              </div>
              
              <p style="font-size: 15px; line-height: 1.6; color: #666; margin-bottom: 30px;">
                Für dringende Anliegen erreichen Sie uns auch direkt via <a href="mailto:info@una-reinigungen.ch" style="color: #c9302c; text-decoration: underline;">info@una-reinigungen.ch</a>.
              </p>
              
              <div style="border-top: 1px solid #eee; padding-top: 24px;">
                <p style="font-size: 14px; color: #888; margin: 0; text-align: center;">
                  Freundliche Grüsse<br><br>
                  <strong style="color: #333;">Ihr Team von UNA Reinigungen</strong>
                </p>
              </div>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const adminEmail = process.env.RECEIVER_EMAIL || 'info@una-reinigungen.ch';

    if (RESEND_API_KEY) {
      // 1. Send Admin Email via Resend
      const adminResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'UNA Reinigungen <noreply@una-reinigungen.ch>',
          to: adminEmail,
          subject: `Neue Buchungsanfrage: ${formData.name}`,
          html: renderAdminEmailHtml(),
        })
      });
      
      console.log(`Admin email status: ${adminResponse.status}`);

      // 2. Send Customer Confirmation Email via Resend
      const customerResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'UNA Reinigungen <noreply@una-reinigungen.ch>',
          to: formData.email,
          subject: 'Ihre Anfrage bei UNA Reinigungen',
          html: renderCustomerEmailHtml(),
        })
      });

      if (!adminResponse.ok || !customerResponse.ok) {
        const adminErr = await adminResponse.text();
        const customerErr = await customerResponse.text();
        console.error("Failed Resend APIs", adminErr, customerErr);
      } else {
         console.log("Emails sent successfully via Resend API.");
      }

      return NextResponse.json({ success: true, message: "Emails scheduled via Resend" });
    } else {
      console.log("Resend API key missing. Data saved locally.", formData);
      return NextResponse.json({ success: true, message: "Form submitted without email relay." });
    }
  } catch (error) {
    console.error("Error submitting lead:", error);
    return NextResponse.json({ error: "Failed to process form" }, { status: 500 });
  }
}

