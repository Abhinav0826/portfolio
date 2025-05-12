import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',
      'your_template_id',
      form.current,
      'your_public_key'
    )
    .then((result) => {
      alert('Message sent successfully!');
    }, (error) => {
      alert('Failed to send message, please try again.');
      console.error(error.text);
    });

    e.target.reset(); // clear form
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Your Name" required />
      <input type="email" name="user_email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
