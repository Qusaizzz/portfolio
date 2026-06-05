import { Link } from "react-router-dom";

function Project2() {
  return (


    
    <main
      style={{
        background: "white",
        color: "black",
        fontFamily: "'Inter', sans-serif",
        paddingBottom: "60px",
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
          <video
            src="/grohe/vs.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        <p
          style={{
            width: "400px",
            fontSize: "14px",
            lineHeight: "1.35",
            margin: 0,
          }}
        >
          GROHE 360° Showrooms are interactive browser-based experiences designed to showcase 
          GROHE products within realistic and inspiring living spaces. The virtual showrooms offer users an innovative way to 
          explore products and experience the brand beyond traditional product catalogs. 
        </p>
      </section>

      {/* PROJECT OVERVIEW */}
      <section
        style={{
          maxWidth: "780px",
          margin: "120px auto 0 auto",
          display: "grid",
          gridTemplateColumns: "300px 600px",
          columnGap: "0px",
          alignItems: "start",
        }}
      >
        <div
          style={{
            paddingLeft: "50px",

          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "46px",
              fontWeight: 500,
              color: "#cfcfcf",
            }}
          >
            Overview
          </h3>
        </div>

        <div>
          <p
            style={{
              maxWidth: "460px",
              fontSize: "14px",
              lineHeight: "1.35",
              margin: 0,
                          paddingTop: "26px",
            }}
          >
          This project is an interactive augmented reality (AR) experience developed during
           my role as a Working Student Digital Content & Experience at GROHE. The objective was to introduce a Scan & Place
            feature within GROHE’s 360° Showrooms, allowing users to visualize products directly
             within their own environment through augmented reality. In addition to the AR functionality,
              I redesigned parts of the user interface to better align with GROHE’s visual identity
               and create a more cohesive user experience across the platform.
          </p>
        </div>
      </section>

      {/* LARGE IMAGE */}
      <section
        style={{
          width: "780px",
          margin: "100px auto 0 auto",
        }}
      >
        <img
          src="/preview/project2.jpg"
          alt="GROHE AR showroom experience"
          style={{
            width: "100%",
            height: "410px",
            objectFit: "cover",
            display: "block",
            background: "#8d8d8d",
          }}
        />
      </section>

{/* PROCESS */}
<section
  style={{
    width: "780px",
    margin: "120px auto 0 auto",
    display: "grid",
    gridTemplateColumns: "190px 216px 336px",
    columnGap: "20px",
    alignItems: "start",
  }}
>

  {/* TITLE */}
  <div>
    <h3
      style={{
        margin: 0,
        fontSize: "46px",
        fontWeight: 500,
        color: "#cfcfcf",
        lineHeight: "0.9",
      }}
    >
      Process
    </h3>
  </div>

  {/* VIDEO */}
  <div
    style={{
      width: "216px",
      height: "360px",
      overflow: "hidden",
      background: "#d9d9d9",
    }}
  >
    <video
      src="/grohe/AR.mp4"
      autoPlay
      muted
      loop
      playsInline
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
  </div>



  {/* TEXT */}
  <div>
    <p
      style={{
        fontSize: "14px",
        lineHeight: "1.35",
        margin: 0,
      }}
    >
      Using WebXR and Three.js, I developed a browser-based AR solution
      that works across multiple platforms without requiring users to
      download additional applications. The experience is instantly
      accessible through a web browser, providing a frictionless entry
      point into augmented reality.
      <br />
      <br />
      To integrate the feature into the existing showroom experience, I
      implemented two access methods: <strong>Click & Place</strong>, a
      one-tap AR launch for mobile users, and{" "}
      <strong>Scan & Place</strong>, a QR-code-based workflow for desktop
      users that seamlessly transfers the experience to a mobile device.
      <br />
      <br />
      This project demonstrates the potential of web-based AR to bridge
      the gap between digital product exploration and real-world
      visualization, enhancing user engagement while maintaining
      accessibility, convenience, and ease of use.
    </p>
  </div>
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

export default Project2;