"use client";

export function WeddingGallery() {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
    // Add more images as needed
  ];

  return (
    <div className="bg-light py-5 px-3">
      <div className="container text-center">
        <h2 className="mb-5 title" style={{ color: "#5a3e36" }}>
          Moments to Cherish
        </h2>

        <div className="row g-3 justify-content-center">
          {images.map((src, idx) => (
            <div className="col-6 col-md-4 col-lg-3" key={idx}>
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                <img
                  src={src}
                  alt={`Wedding memory ${idx + 1}`}
                  className="img-fluid w-100 h-100 object-fit-cover"
                  style={{
                    transition: "transform 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
