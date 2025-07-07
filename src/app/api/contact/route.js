import validator from 'validator';
import nodemailer from 'nodemailer';

const rateLimit = new Map();  // Rate limiting için basit bir harita

async function sendEmail(formData) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: 'goktug_za@hotmail.com',
    subject: `SZARTSERVICES İletişim İsteği: ${formData.name} ${formData.lastname}`,
    html: `
      <h2 style="text-align: center; color: #333;">Yeni İletişim Mesajı</h2>
      <table style="width: 100%; border-collapse: collapse;" border="1">
        <tr>
          <th style="padding: 10px; background-color: #f4f4f4;">Alan</th>
          <th style="padding: 10px; background-color: #f4f4f4;">Bilgi</th>
        </tr>
        <tr>
          <td style="padding: 10px;">İsim</td>
          <td style="padding: 10px;">${formData.name}</td>
        </tr>
        <tr>
          <td style="padding: 10px;">Soyisim</td>
          <td style="padding: 10px;">${formData.lastname}</td>
        </tr>
        <tr>
          <td style="padding: 10px;">E-posta</td>
          <td style="padding: 10px;">${formData.email}</td>
        </tr>
        <tr>
          <td style="padding: 10px;">Telefon</td>
          <td style="padding: 10px;">${formData.phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px;">Mesaj</td>
          <td style="padding: 10px;">${formData.message}</td>
        </tr>
      </table>
      <p style="text-align: center;">Bu mesaj <b>SZ Art Services</b> iletişim formu aracılığıyla gönderildi.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Mail başarıyla gönderildi!');
  } catch (error) {
    console.error('Mail gönderme hatası: ', error);
  }
}

export async function POST(req) {
  const { email, name, lastname, phone, message, website } = await req.json();
  const ip = req.headers.get("x-forwarded-for") || req.connection.remoteAddress;
  const now = Date.now();

  // Rate Limiting
  if (rateLimit.has(ip) && now - rateLimit.get(ip) < 60000) {
    return new Response(
      JSON.stringify({ message: "Çok fazla istek gönderildi. Lütfen daha sonra tekrar deneyin." }),
      { status: 429 }
    );
  }
  rateLimit.set(ip, now);

  // Honeypot kontrolü
  if (website) {
    return new Response(
      JSON.stringify({ message: "Spam tespit edildi." }),
      { status: 400 }
    );
  }

  // Gerekli alanların kontrolü
  if (!email || !name || !lastname || !message) {
    return new Response(
      JSON.stringify({ message: "Lütfen gerekli alanları doldurun." }),
      { status: 400 }
    );
  }

  if (!validator.isEmail(email)) {
    return new Response(
      JSON.stringify({ message: "Geçerli bir email adresi girin." }),
      { status: 400 }
    );
  }

  
  await sendEmail({ email, name, lastname, phone, message });

  
  await new Promise((resolve) => setTimeout(resolve, 10000));

  return new Response(
    JSON.stringify({ message: "Mesaj başarıyla gönderildi." }),
    { status: 200 }
  );
}
