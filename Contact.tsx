export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contactIntro">
        <p className="sectionTag">CONTACT</p>

        <h2>Ready For Your Dream Lash Set?</h2>

        <p>
          Have a question before booking? Get in touch through Instagram, email
          or phone and we’ll be happy to help.
        </p>

        <a href="#booking" className="primaryBtn">
          Book Appointment
        </a>
      </div>

      <div className="contactGrid">
        <div className="contactCard">
          <h3>Instagram</h3>
          <p>@luxbookingstudio</p>
        </div>

        <div className="contactCard">
          <h3>Email</h3>
          <p>hello@luxbookingstudio.com</p>
        </div>

        <div className="contactCard">
          <h3>Phone</h3>
          <p>07XXX XXX XXX</p>
        </div>

        <div className="contactCard">
          <h3>Location</h3>
          <p>London, United Kingdom</p>
        </div>
      </div>

      <div className="hoursCard">
        <h3>Opening Hours</h3>

        <div className="hoursRow">
          <span>Monday – Friday</span>
          <span>9:00am – 7:00pm</span>
        </div>

        <div className="hoursRow">
          <span>Saturday</span>
          <span>9:00am – 5:00pm</span>
        </div>

        <div className="hoursRow">
          <span>Sunday</span>
          <span>Closed</span>
        </div>
      </div>
    </section>
  );
}
