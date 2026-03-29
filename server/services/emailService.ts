import nodemailer from "nodemailer";

export const sendLeadEmails = async (formData: any) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or your preferred service
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
    text: `
      Guten Tag ${formData.name},

      Vielen Dank für Ihre Buchungsanfrage bei UNA Reinigungen.
      Wir haben Ihre Anfrage erhalten und bestätigen hiermit den Eingang. 
      Unser Team wird Ihre Angaben prüfen und sich in Kürze persönlich bei Ihnen melden, um die Details zu besprechen und Ihnen eine verbindliche Offerte zuzusenden.

      Ihre Buchungsdetails:
      Datum: ${formData.date}
      Zimmer: ${formData.rooms}
      PLZ: ${formData.zip}
      Kategorie: ${formData.category}

      Wir freuen uns darauf, Sie bei Ihrem Umzug zu unterstützen.

      Freundliche Grüsse,
      Ihr UNA Reinigungen Team
    `,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #c9302c;">Vielen Dank für Ihre Buchungsanfrage</h2>
        <p>Guten Tag ${formData.name},</p>
        <p>Vielen Dank für Ihre Buchungsanfrage bei UNA Reinigungen. Wir haben Ihre Anfrage erhalten und bestätigen hiermit den Eingang.</p>
        <p>Unser Team wird Ihre Angaben prüfen und sich <strong>in Kürze persönlich bei Ihnen melden</strong>, um die Details zu besprechen und Ihnen eine verbindliche Offerte zuzusenden.</p>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Ihre Buchungsdetails:</h3>
          <ul style="list-style: none; padding: 0;">
            <li><strong>Datum:</strong> ${formData.date}</li>
            <li><strong>Zimmer:</strong> ${formData.rooms}</li>
            <li><strong>PLZ:</strong> ${formData.zip}</li>
            <li><strong>Kategorie:</strong> ${formData.category}</li>
          </ul>
        </div>
        
        <p>Wir freuen uns darauf, Sie bei Ihrem Umzug zu unterstützen.</p>
        <p>Freundliche Grüsse,<br><strong>Ihr UNA Reinigungen Team</strong></p>
      </div>
    `,
  };

  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(userMailOptions);
    return true;
  } else {
    console.log("Email credentials missing, skipping email send. Form data:", formData);
    return false;
  }
};
