import { useState } from "react";
import { Link } from "react-router-dom";

function Project1() {
  const [activeImage, setActiveImage] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const heroImages = [
    "/grohe/hero1.jpg",
    "/grohe/hero2.jpg",
    "/grohe/hero3.jpg",
    "/grohe/hero4.jpg",
    "/grohe/hero5.jpg",
  ];

  const carouselImages = [
    "/grohe/carousel1.jpg",
    "/grohe/carousel2.jpg",
    "/grohe/carousel3.jpg",
    "/grohe/carousel4.jpg",
    "/grohe/carousel5.jpg",
  ];

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevCarousel = () => {
    setCarouselIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <main
      style={{
        background: "white",
        color: "black",
        fontFamily: "'Inter', sans-serif",
        paddingBottom: "100px",
        overflowX: "hidden",
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "10vh",
          maxWidth: "1060px",
          margin: "0 auto",
          padding: "70px 70px",
          display: "grid",
          gridTemplateColumns: "460px 400px",
          columnGap: "100px",
          alignItems: "end",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "480px",
            height: "600px",
            overflow: "hidden",
            background: "#8d8d8d",
          }}
        >
          <img
            src={heroImages[activeImage]}
            alt="GROHE X project preview"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "8px",
            }}
          >
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                aria-label={`Show image ${index + 1}`}
                style={{
                  width: activeImage === index ? "9px" : "7px",
                  height: activeImage === index ? "9px" : "7px",
                  borderRadius: "50%",
                  border: "none",
                  padding: 0,
                  background:
                    activeImage === index
                      ? "white"
                      : "rgba(255, 255, 255, 0.45)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        <p
          style={{
            width: "400px",
            fontSize: "14px",
            lineHeight: "1.35",
            margin: 0,
          }}
        >
          GROHE X was GROHE’s global digital experience platform, combining
          storytelling, product communication, immersive content, and hybrid
          event experiences into one ecosystem. With its innovative approach to
          digital brand experience, GROHE X received several awards, including
          the Red Dot Design Award, Digital Communication Awards, and Galaxy
          Awards.
        </p>
      </section>

      {/* ROLE + TEXT */}
      <section
        style={{
          maxWidth: "780px",
          margin: "110px auto 0 auto",
          display: "grid",
          gridTemplateColumns: "300px 460px",
          columnGap: "70px",
          alignItems: "start",
        }}
      >
        <div
          style={{
            paddingLeft: "10px",
            borderLeft: "1.5px solid #e2e2e2",
          }}
        >
          <h3
            style={{
              margin: "-20px 0 66px 0",
              fontSize: "46px",
              fontWeight: 500,
              color: "#cfcfcf",
            }}
          >
            My Role
          </h3>

          <div style={{ marginBottom: "52px" }}>
            <p style={{ margin: 0, fontSize: "20px", lineHeight: "1.1", fontWeight: 500 }}>
              Brand Experience
            </p>
            <p style={{ marginTop: "7px", fontSize: "12px", lineHeight: "1.1", color: "#444" }}>
              03.2024 - 05.2026
            </p>
          </div>

          <div>
            <p style={{ margin: 0, fontSize: "20px", lineHeight: "1.1", fontWeight: 500 }}>
              Digital Content & Experience
            </p>
            <p style={{ marginTop: "7px", fontSize: "12px", lineHeight: "1.1", color: "#444" }}>
              09.2022 - 03.2024
            </p>
          </div>
        </div>

        <div>
          <p style={{ maxWidth: "460px", fontSize: "14px", lineHeight: "1.35", margin: "0 0 22px 0" }}>
            For the first 1.5 years, I worked within the Digital Content &
            Experience team, contributing to GROHE X through UX/UI, content
            moderation, creation interactive and inspirational experiences
            across both digital and onsite formats, including VR and 360°
            showrooms, AR applications, WebGL experiences, filming, and
            immersive storytelling content.
          </p>

          <p style={{ maxWidth: "460px", fontSize: "14px", lineHeight: "1.35", margin: 0 }}>
            Over the following 2 years, I transitioned into the Brand Experience
            team, where my responsibilities expanded with a stronger focus on
            brand identity, digital storytelling, and user experience design. In addition,
            collaborated closely with the website team during the early
            development phase of the new GROHE website. This new platform later evolved 
            into the successor of GROHE X and several other GROHE digital platforms.
          </p>
        </div>
      </section>

      {/* MIDDLE IMAGE */}
      <section style={{ width: "780px", margin: "120px auto 0 auto" }}>
        <img
          src="/grohe/middle.jpg"
          alt="GROHE X immersive experience"
          style={{
            width: "100%",
            height: "410px",
            objectFit: "cover",
            display: "block",
            background: "#8d8d8d",
          }}
        />
      </section>


      {/* BOTTOM TEXT */}
      <p
        style={{
          maxWidth: "860px",
          margin: "180px auto 0 auto",
          fontSize: "14px",
          lineHeight: "1.35",
          textAlign: "justify",
        }}
      >
During my time at GROHE, I had the opportunity to collaborate with internationally recognized design
 studios, PR and social media teams. I supported the digital communication and brand experiences 
 for international campaigns and events, including Milan Design Week, GROHE X Summit, World Architecture
  Festival, and ISH. My work focused on ensuring a consistent visual identity and brand experience by
   design website pages, digital storytelling, and brand communication assets across the GROHE X digital platform.
      </p>


      {/* TEXT + IMAGE */}
<section
  style={{
    maxWidth: "860px",
    margin: "105px auto 0 auto",
        fontWeight: 500,
 
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "80px",

    }}
  >
<p style={{ fontSize: "14px", lineHeight: "1.25", margin: 0 }}>
    Milan Design Week
  <br />
  2023
</p>

    <p style={{ fontSize: "14px", lineHeight: "1.25", margin: 0 }}>
      GROHE X Summit
      <br />
      2023
    </p>

    <p style={{ fontSize: "14px", lineHeight: "1.25", margin: 0 }}>
World Architecture Festival
      <br />
      2023
    </p>

    <p style={{ fontSize: "14px", lineHeight: "1.25", margin: 0 }}>
      Milan Design Week
      <br />
      2024
    </p>

    <p style={{ fontSize: "14px", lineHeight: "1.25", margin: 0 }}>
      ISH Frankfurt
      <br />
      2025
    </p>
  </div>
</section>



{/* BOTTOM CAROUSEL */}
<section
  style={{
    width: "860px",
    margin: "70px auto 0 auto",
    position: "relative",
  }}
>
  <button
    onClick={prevCarousel}
    aria-label="Previous image"
    style={{
      position: "absolute",
      left: "-48px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "34px",
      height: "34px",
      borderRadius: "50%",
      border: "1px solid #d8d8d8",
      background: "rgba(255,255,255,0.75)",
      backdropFilter: "blur(8px)",
      fontSize: "18px",
      cursor: "pointer",
      zIndex: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#111",
    }}
  >
    ‹
  </button>

  <div style={{ overflow: "hidden", width: "100%" }}>
    <div
      style={{
        display: "flex",
        gap: "20px",
        transform: `translateX(-${carouselIndex * 220}px)`,
        transition: "transform 0.45s ease",
      }}
    >
      {[...carouselImages, ...carouselImages, ...carouselImages].map(
        (src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            style={{
              width: "200px",
              height: "260px",
              objectFit: "cover",
              flexShrink: 0,
              background: "#8d8d8d",
              display: "block",
            }}
          />
        )
      )}
    </div>
  </div>

  <button
    onClick={nextCarousel}
    aria-label="Next image"
    style={{
      position: "absolute",
      right: "-48px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "34px",
      height: "34px",
      borderRadius: "50%",
      border: "1px solid #d8d8d8",
      background: "rgba(255,255,255,0.75)",
      backdropFilter: "blur(8px)",
      fontSize: "18px",
      cursor: "pointer",
      zIndex: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#111",
    }}
  >
    ›
  </button>
</section>

{/* HOME LINK */}
<section
  style={{
    width: "780px",
    margin: "110px auto 0 auto",
    paddingBottom: "40px",
  }}
>
  <Link
    to="/"
    style={{
      textDecoration: "none",
      color: "#2f2f2f",
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "14px",
      letterSpacing: "3px",
      textTransform: "lowercase",
    }}
  >
    <span style={{ fontSize: "16px" }}>⟵</span>
    <span>home</span>
  </Link>
</section>

    </main>
  );
}

export default Project1;