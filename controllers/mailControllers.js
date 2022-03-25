// import dependencies
// const nodemailer = require("nodemailer");
const sendgrid = require("@sendgrid/mail");

const config = require("config");

sendgrid.setApiKey(config.get("SENDGRID_API_KEY"));

exports.sendMail = async (req, res) => {
  const { email, name, linkedin, phone, title, text, twitter } = req.body;

  try {
    await sendgrid.send({
      to: "doughawes42@gmail.com",
      from: "dougiehawes@hotmail.com",
      subject: `VIA-WEBSITE *${title}* from - ${name} - ${email}`,
      html: `<p><span style='font-weight: bold'>FROM:</span> ${name}</p>
              <p><span style='font-weight: bold'>EMAIL:</span> ${email}</p>
              <p><span style='font-weight: bold'>PHONE:</span> ${phone}</p>
              <p style='font-weight: bold'>TEXT:</p>
              <p>${text}</p>
              ${
                linkedin
                  ? `<p><span style='font-weight: bold'>LINKEDIN:</span> ${linkedin}</p>`
                  : null
              }${
        twitter
          ? `<p><span style='font-weight: bold'>TWITTER:</span> ${twitter}</p>`
          : null
      }`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
};
