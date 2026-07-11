export default function Hero() {
  return (
    <section className="hero">
      <div className="heroText">
        <p className="eyebrow">Premium Lash Extensions</p>

        <h1>Luxury Lash Extensions</h1>

        <p className="heroCopy">
          Enhancing your natural beauty with handcrafted lash extensions
          designed for elegance, confidence and long-lasting retention.
        </p>

        <div className="heroButtons">
          <a href="#booking" className="primaryBtn">
            Book Appointment
          </a>

          <a href="#services" className="secondaryBtn">
            View Services
          </a>
        </div>
      </div>

      <div className="heroCard">
        <div className="lashGraphic">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <p>Soft glam • Clean finish • Premium retention</p>
      </div>
    </section>
  );
}
