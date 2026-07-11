export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        Luxe<span>Booking</span>Studio
      </div>

      <nav className="navLinks">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#reviews">Reviews</a>
        <a href="#booking">Book Now</a>
      </nav>
    </header>
  );
}
