export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerGrid">
        <div>
          <h3>LuxeBookingStudio</h3>
          <p>
            Luxury lash extensions designed to enhance your natural beauty with
            premium products and exceptional service.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="#booking">Book Now</a>
        </div>

        <div>
          <h4>Opening Hours</h4>
          <p>Mon – Fri: 9am – 7pm</p>
          <p>Saturday: 9am – 6pm</p>
          <p>Sunday: Closed</p>
        </div>

        <div>
          <h4>Follow Us</h4>
          <a
            href="https://instagram.com/luxbookingstudio"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <p>DM us to book your appointment.</p>
        </div>
      </div>

      <div className="footerBottom">
        © 2026 LuxeBookingStudio. All rights reserved.
      </div>
    </footer>
  );
}
