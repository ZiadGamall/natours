const pug = require("pug");
const { htmlToText } = require("html-to-text");
const path = require("path");
const sgMail = require("@sendgrid/mail");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(" ")[0];
    this.url = url;
    this.from = `Ziad Gamal <${process.env.EMAIL_FROM}>`;

    sgMail.setApiKey(process.env.SENDGRID_PASSWORD);
  }

  async send(template, subject) {
    // 1) Render the HTML based on a pug template
    const html = pug.renderFile(
      path.join(__dirname, "../views/emails", `${template}.pug`),
      {
        firstName: this.firstName,
        url: this.url,
        subject,
      },
    );
    // 2) Define email options
    const msg = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText(html),
    };

    // 3) Create a transport and send email
    return sgMail.send(msg);
  }

  sendWelcome() {
    return this.send("welcome", "Welcome to the Natours Family!");
  }

  sendPasswordReset() {
    return this.send(
      "passwordReset",
      "Your password reset token (valid for only 10 minutes!)",
    );
  }
};
