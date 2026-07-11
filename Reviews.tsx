export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <p className="sectionTag">CLIENT LOVE</p>

      <h2>What Our Clients Say</h2>

      <div className="reviewGrid">
        <div className="reviewCard">
          <div className="stars">★★★★★</div>

          <p>
            "Absolutely obsessed with my lashes. The retention is amazing and
            the whole appointment felt so relaxing. I'll definitely be coming
            back!"
          </p>

          <h4>Sarah M.</h4>
        </div>

        <div className="reviewCard">
          <div className="stars">★★★★★</div>

          <p>
            "The most beautiful lash set I've ever had. They look full but still
            soft and natural. Exactly what I asked for."
          </p>

          <h4>Chloe R.</h4>
        </div>

        <div className="reviewCard">
          <div className="stars">★★★★★</div>

          <p>
            "Such a luxury experience from start to finish. My lashes lasted so
            well and I received so many compliments!"
          </p>

          <h4>Amira K.</h4>
        </div>
      </div>
    </section>
  );
}
