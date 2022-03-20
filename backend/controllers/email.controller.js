import nodemailer from 'nodemailer';   //GMAIL has limit of 500 recipients per day


// Method to send email requires(reciever email, subject and message)
function sendEmailGeneric(receiverEmail, subject, message) {

  // Setup sending service
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '',
      pass: ''
    }
  });
  
  // Add content to email
  const mailOptions = {
      from: '',
      to: String(receiverEmail),
      subject: String(subject),
      text: String(message)
    };

  // Send Email
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};


// Method to send email confirmation to users after they have registered (requires their email and name)
function sendEmailConfirmation(receiverEmail, name, code) {



  // Build message
  // TODO : GENERATE LINK CORRESPONDING TO USER ACCOUNT ACTIVATION
  const activationLink = `http://localhost:5000/api/auth/activate/${code}`;
  const message = 
  `Hello ${name},

  Welcome to Concordia Course Web Sites - Moodle!
      
  Please visit the following link to confirm your email and activate your account:
  
  ${activationLink}
  

  Thank you,
  Customer Service Team`;

  sendEmailGeneric(receiverEmail, "Thankyou for registering", message);
};


// Method to send email reminder to users that have not filled out their daily requirements
function sendReminderEmail(receiverEmail, name) {

  // Build message
  // TODO : GENERATE LINK CORRESPONDING TO USER REQUIREMENTS
  const requirementsLink = "EMPTY";
  const message = 
  `Hello ${name},

  It has come to our attention that you have not yet filled out your daily requirements.
  Please do so in the next 4 hours. A failure to do so could result in fines of upto $2000.
      
  Please visit the following link to complete your daily requirements:
  ${requirementsLink}

  Thank you,
  Customer Service Team`;

  sendEmailGeneric(receiverEmail, "URGENT: Daily requirements yet to be filled.", message);
};


export { sendEmailConfirmation, sendReminderEmail };

