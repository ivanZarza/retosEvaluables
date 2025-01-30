
const axios = require("axios");


let emails = [{
  from: "ivanzarzaestevez@gmail.com",
  to: "ivanzarzaestevez@izarza.dev",
  subject: "Hola",
  message: "Hola Ivan"
},
{
  from:"ivanzarzaestevez@izarza.dev",
  to: "ivanzarzaestevez@gmail.com",
  subject: "Adios",
  message: "Adios Ivan"
}
];

function getEmails(req, res) {
  let { from, to } = req.query;
  if (!from && !to) {
    res.status(400).json({ ok: false, message: "Se necesita un email", data: emails });
  }
  if (from) {
    let emailsFrom = emails.filter((email) => email.from == from);
    if (emailsFrom.length === 0) {
      res.status(404).json({ ok: false, message: "No se encontro ningun email" });
    }
    try {
      res.status(200).json({ ok: true, message: "Exito!!", data: emailsFrom });
    } catch (error) {
      res.status(500).json({ ok: false, message: error.message });
    }
  }

  if (to) {
    let emailsTo = emails.filter((email) => email.to == to);
    if (emailsTo.length === 0) {
      res.status(404).json({ ok: false, message: "No se encontro ningun email" });
    }
    try {
      res.status(200).json({ ok: true, message: "Exito!!", data: emailsTo });
    } catch (error) {
      res.status(500).json({ ok: false, message: error.message });
    }
  }
}

async function postEmail(req, res) {
  let { from, to, subject, message } = req.body;
  let email = { from, to, subject, message };

  let urlPostMark = "https://api.postmarkapp.com/email";
  let params = {
    headers: {
      "Content-Type": "application/json",
      "X-Postmark-Server-Token": "f0d09ff2-a40e-48fe-b372-cd361518afc3"
    }
  };

  let body = {
      From: email.from,
      To: email.to,
      Subject: email.subject,
      TextBody: email.message
    }
console.log(body);
console.log(params);
  try {
    let response = await axios.post(urlPostMark,body, params);
    emails.push(email);
    console.log(response);
    console.log(emails);
    res.status(200).json({ ok: true, message: "Exito!!", data: email });
  } catch (error) {

    res.status(500).json({ ok: false, message: error.message });
  }
}


module.exports = { getEmails, postEmail };