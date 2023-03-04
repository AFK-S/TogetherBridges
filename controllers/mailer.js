import nodemailer from "nodemailer";

const Mailer = (email_address, subject, template) => {
  nodemailer
    .createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })
    .sendMail(
      {
        from: process.env.EMAIL_ID,
        to: email_address,
        subject: subject,
        html: template,
      },
      function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      }
    );
};

const Register_NGO = (name, email_address, password) => {
  const template = `
     <h2>Dear ${name},</h2>
     <div>We are pleased to inform you that your registration application has been approved and you are now officially registered with us as an NGO. We appreciate your interest and dedication towards making a positive impact in our society.</div>
     <br/>
     <div>Here are your login credentials:</div>
     <div>User Name: <strong>${email_address}<strong/></div>
     <div>Password: <strong>${password} <strong/></div>
     <br/>
     <br/>
     <div>Best regards,</div>
     <div>TogetherBridge</div>
    `;
  Mailer(email_address, "NGO Registration Confirmed", template);
};

const Register_Volunteer = (name, email_address, ngo_name) => {
  const template = `
       <h2>Dear ${name},</h2>
       <div>We are delighted to inform you that your registration application for ${ngo_name} has been approved. We appreciate your interest in joining us and your commitment to making a positive impact on our society.</div>
       <br/>
       <div>You can refer the website for any further details</div>
       <br/>
       <br/>
       <div>Best regards,</div>
       <div>TogetherBridge</div>
      `;
  Mailer(email_address, "Volunteer Registration Confirmed", template);
};
const Announcement = (email_addresses, ngo_name, announcement) => {
  const template = `
       <h2>Dear Volunteer,</h2>
       <div>We are excited to inform you about our latest update at ${ngo_name}.</div>
       <br/>
       <div>${announcement}</div>
       <br/>
       <br/>
       <div>Best regards,</div>
       <div>TogetherBridge</div>
      `;
  Mailer(email_addresses, "Latest Announcement", template);
};

const Event = (email_addresses, ngo_name, event_name, event_detail) => {
  const template = `
         <h2>Dear Volunteer,</h2>
         <div>We are excited to inform you about our latest Event at ${ngo_name}.</div>
         <div>The Event is as follows:</div>
         <br/>
         <h4>${event_name}</h4>
         <div>${event_detail}</div>
         <br/>
         <br/>
         <div>Best regards,</div>
         <div>TogetherBridge</div>
        `;
  Mailer(email_addresses, "New Event", template);
};

export { Register_NGO, Register_Volunteer, Announcement, Event };
