export default function Gallery() {
  const gallery = [
    { title: "Classic Wispy Set", category: "Natural Beauty" },
    { title: "Hybrid Glam", category: "Most Popular" },
    { title: "Angel / Wet Set", category: "Soft Glam" },
    { title: "Volume Lashes", category: "Full & Fluffy" },
    { title: "Mega Volume", category: "Ultimate Glam" },
    { title: "Fresh Infill", category: "Maintenance" },
  ];

  return (
    <section id="gallery" className="gallery">
      <p className="sectionTag">OUR WORK</p>
      <h2>Beautiful Results You'll Love</h2>

      <p className="galleryIntro">
        Every set is individually customised to complement your natural eye
        shape and desired style.
      </p>

      <div className="galleryGrid">
        {gallery.map((item) => (
          <div className="galleryCard" key={item.title}>
            <div className="galleryImage">Photo</div>

            <div className="galleryContent">
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="instagramSection">
        <p>Want to see even more lash transformations?</p>
        <a
          className="instagramButton"
          href="https://instagram.com/luxbookingstudio"
          target="_blank"
          rel="noreferrer"
        >
          Follow us on Instagram →
        </a>
      </div>
    </section>
  );
}
