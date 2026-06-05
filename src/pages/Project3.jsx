import { useState } from "react";
import { Link } from "react-router-dom";

function Project3() {
  const uiImages = [
    "/lufthansa/flyinglab-01.jpg",
    "/lufthansa/flyinglab-02.jpg",
    "/lufthansa/flyinglab-03.jpg",
    "/lufthansa/flyinglab-04.jpg",
    "/lufthansa/flyinglab-05.jpg",
  ];

  const [bookingIndex, setBookingIndex] = useState(0);

const bookingImages = [
  "/lufthansa/booking1.jpg", 
  "/lufthansa/booking2.jpg", 
  "/lufthansa/booking3.jpg", 
  "/lufthansa/booking4.jpg", 
  "/lufthansa/booking5.jpg", 
];

const nextBooking = () => {
  setBookingIndex((prev) => (prev + 1) % bookingImages.length);
};

const prevBooking = () => {
  setBookingIndex(
    (prev) => (prev - 1 + bookingImages.length) % bookingImages.length
  );
};

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#111",
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
        paddingBottom: "120px",
      }}
    >
      {/* HERO */}
      <section
        style={{
          maxWidth: "1060px",
          margin: "0 auto",
          padding: "90px 70px 40px 70px",
          display: "grid",
          gridTemplateColumns: "460px 400px",
          columnGap: "100px",
          alignItems: "end",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "13px",
              margin: "0 0 18px 0",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#f6b21a",
              fontWeight: 600,
            }}
          >
            Lufthansa Systems
          </p>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: "0.9",
              fontWeight: 400,
              letterSpacing: "-0.06em",
              margin: 0,
              color: "#061b4e",
            }}
          >
            FlyingLab
            <br />
            Factory
          </h1>
        </div>

        <p
          style={{
            width: "400px",
            fontSize: "14px",
            lineHeight: "1.45",
            margin: 0,
            color: "#444",
          }}
        >
          FlyingLab Factory is a digital booking and community platform designed
          for Lufthansa Systems’ innovation spaces. The project focused on
          simplifying room booking, service package selection, event management,
          and the overall arrival experience for internal and external users.
        </p>
      </section>

      {/* HERO IMAGE */}
      <section
        style={{
          maxWidth: "1060px",
          margin: "55px auto 0 auto",
          padding: "0 70px",
        }}
      >
        <img
          src="/lufthansa/hero.png"
          alt="FlyingLab Factory project hero"
          style={{
            width: "100%",
            height: "520px",
            objectFit: "cover",
            display: "block",

          }}
        />
      </section>

      {/* PROJECT INFO */}
      <section
        style={{
          maxWidth: "860px",
          margin: "110px auto 0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "40px",
          borderTop: "1px solid #e5e5e5",
          paddingTop: "28px",
        }}
      >
        {[
          ["Role", "User Research / UX/UI Design"],
          ["Focus", "Booking Platform"],
          ["Output", "Wireframes / Prototype"],
          ["Scope", "Digital + Physical Touchpoints"],
        ].map(([label, value]) => (
          <div key={label}>
            <p
              style={{
                fontSize: "12px",
                margin: "0 0 10px 0",
                color: "#888",
              }}
            >
              {label}
            </p>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.3",
                margin: 0,
                color: "#111",
                fontWeight: 500,
              }}
            >
              {value}
            </p>
          </div>
        ))}
      </section>

      {/* CHALLENGE */}
      <section
        style={{
          maxWidth: "860px",
          margin: "120px auto 0 auto",
          display: "grid",
          gridTemplateColumns: "280px 460px",
          columnGap: "120px",
          alignItems: "start",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            lineHeight: "0.95",
            fontWeight: 400,
            letterSpacing: "-0.05em",
            margin: 0,
            color: "#061b4e",
          }}
        >
          The
          <br />
          Challenge
        </h2>

        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.45",
            margin: 0,
            color: "#444",
          }}
        >
          Users needed a clear and flexible way to book innovation rooms,
          workshops, coaching sessions, and event spaces. The existing
          experience lacked transparency around available rooms, packages,
          equipment, and arrival logistics. The design challenge was to create a
          more intuitive booking flow while connecting the digital platform with
          the physical experience of visiting the FlyingLab Factory.
        </p>
      </section>

      {/* INSIGHTS */}
      <section
        style={{
          maxWidth: "860px",
          margin: "105px auto 0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {[
            ["01", "Users expect a familiar online booking experience."],
            ["02", "Room availability and packages need to be visible."],
            ["03", "Equipment and services must be clearly communicated."],
            ["04", "Arrival and orientation are part of the full experience."],
          ].map(([number, text]) => (
            <div
              key={number}
              style={{
                borderTop: "1px solid #dcdcdc",
                paddingTop: "18px",
              }}
            >
              <p
                style={{
                  fontSize: "32px",
                  margin: "0 0 28px 0",
                  color: "#f6b21a",
                  fontWeight: 600,
                }}
              >
                {number}
              </p>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.35",
                  margin: 0,
                  color: "#333",
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

     {/* PROCESS */}
<section
  style={{
    maxWidth: "860px",
    margin: "120px auto 0 auto",
    background: "#061b4e",
    color: "white",
    padding: "48px 56px",
    borderRadius: "20px",
  }}
>
  <p
    style={{
      fontSize: "36px",
      margin: "0 0 42px 0",
      color: "#f6b21a",
      fontWeight: 400,
      letterSpacing: "-0.04em",
    }}
  >
    Process
  </p>

  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    {[
      ["/icons/research.png", "Research"],
      ["/icons/flow.png", "User Flow"],
      ["/icons/wireframe.png", "Wireframes"],
      ["/icons/interface.png", "Prototype"],
      ["/icons/testing.png", "Testing"],
    ].map(([icon, title], index, arr) => (
      <>
        <div
          key={title}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            minWidth: "90px",
          }}
        >
          <img
            src={icon}
            alt=""
            style={{
              width: "50px",
              height: "50px",
              objectFit: "contain",
              marginBottom: "14px",
              filter: "brightness(0) invert(1)",
            }}
          />

          <p
            style={{
              fontSize: "13px",
              margin: 0,
              color: "white",
              fontWeight: 500,
            }}
          >
            {title}
          </p>
        </div>

        {index < arr.length - 1 && (
          <span
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "20px",
                  position: "relative",
    top: "-12px",
            }}
          >
            →
          </span>
        )}
      </>
    ))}
  </div>
</section>

      {/* BOOKING FLOW */}
      <section
        style={{
          maxWidth: "1060px",
          margin: "120px auto 0 auto",
          padding: "0 70px",
          display: "grid",
          gridTemplateColumns: "320px 560px",
          columnGap: "80px",
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "46px",
              lineHeight: "0.95",
              fontWeight: 400,
              letterSpacing: "-0.05em",
              margin: "0 0 28px 0",
              color: "#061b4e",
            }}
          >
            Integrated
            <br />
            Booking Flow
          </h2>

          <p
            style={{
              fontSize: "14px",
              lineHeight: "1.45",
              margin: "0 0 28px 0",
              color: "#444",
            }}
          >
            The booking system allows users to select the type of event, choose
            a date, define the number of participants, compare packages, and
            request additional services such as equipment or shuttle support.
          </p>

          <div
            style={{
              display: "grid",
              gap: "10px",
              fontSize: "13px",
              color: "#111",
            }}
          >
            <span>Booking spaces</span>
            <span>Package selection</span>
            <span>Date and participant input</span>
            <span>Equipment requests</span>
            <span>Shuttle and arrival support</span>
          </div>
        </div>

        <div
  style={{
    position: "relative",
    width: "100%",
  }}
>
  
  
  <div
  style={{
    width: "100%",
    height: "550px",
    overflow: "hidden",
    background: "#ffffff",
  }}
>
  <div
    style={{
      display: "flex",
      height: "100%",
      transform: `translateX(-${bookingIndex * 100}%)`,
      transition: "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
    }}
  >
    {bookingImages.map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`Booking screen ${index + 1}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          flexShrink: 0,
          display: "block",
        }}
      />
    ))}
  </div>
</div>

  <button
    onClick={prevBooking}
    style={{
      position: "absolute",
      left: "-10px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "38px",
      height: "38px",
      borderRadius: "70%",
      border: "1px solid #e2e2e2",
      background: "rgba(237, 237, 237, 0.95)",
      backdropFilter: "blur(10px)",
      cursor: "pointer",
      fontSize: "20px",
      color: "#191919",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    ‹
  </button>

  <button
    onClick={nextBooking}
    style={{
      position: "absolute",
      right: "-10px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      border: "1px solid #e2e2e2",
      background: "rgba(237, 237, 237, 0.95)",
      backdropFilter: "blur(10px)",
      cursor: "pointer",
      fontSize: "20px",
      color: "#191919",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    ›
  </button>

  <div
    style={{
      position: "absolute",
      bottom: "58px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: "8px",
    }}
  >
    {bookingImages.map((_, index) => (
      <button
        key={index}
        onClick={() => setBookingIndex(index)}
        style={{
          width: bookingIndex === index ? "9px" : "7px",
          height: bookingIndex === index ? "9px" : "7px",
          borderRadius: "50%",
          border: "none",
          padding: 0,
          background:
            bookingIndex === index
    ? "#8c8c8c"
    : "#dddddd",
          cursor: "pointer",
        }}
      />
    ))}
  </div>
</div>
      </section>



      {/* COMMUNITY */}
      <section
        style={{
          maxWidth: "860px",
          margin: "120px auto 0 auto",
          display: "grid",
          gridTemplateColumns: "460px 380px",
          columnGap: "100px",
          alignItems: "center",
        }}
      >
        <img
          src="/lufthansa/community.jpg"
          alt="FlyingLab Factory community dashboard"
          style={{
            width: "100%",
            height: "360px",
            objectFit: "cover",
            display: "block",
            background: "#e8e8e8",
          }}
        />

        <div>
          <h2
            style={{
              fontSize: "42px",
              lineHeight: "0.95",
              fontWeight: 400,
              letterSpacing: "-0.05em",
              margin: "0 0 26px 0",
              color: "#061b4e",
            }}
          >
            Community
            <br />
            Layer
          </h2>

          <p
            style={{
              fontSize: "14px",
              lineHeight: "1.45",
              margin: 0,
              color: "#444",
            }}
          >
            Beyond booking, the platform introduced a community-driven layer
            where users could access previous bookings, track upcoming events,
            and stay connected to the innovation activities taking place inside
            the FlyingLab Factory.
          </p>
        </div>
      </section>

      {/* SERVICE DESIGN */}
      <section
        style={{
          maxWidth: "1060px",
          margin: "120px auto 0 auto",
          padding: "0 70px",
          display: "grid",
          gridTemplateColumns: "320px 560px",
          columnGap: "80px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "13px",
              margin: "0 0 18px 0",
              color: "#f6b21a",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Beyond Digital
          </p>

          <h2
            style={{
              fontSize: "46px",
              lineHeight: "0.95",
              fontWeight: 400,
              letterSpacing: "-0.05em",
              margin: "0 0 28px 0",
              color: "#061b4e",
            }}
          >
            Arrival &
            <br />
            Wayfinding
          </h2>

          <p
            style={{
              fontSize: "14px",
              lineHeight: "1.45",
              margin: 0,
              color: "#444",
            }}
          >
            The experience extended beyond the screen through signage concepts,
            arrival guidance, and notification ideas. This connected the booking
            platform with the physical visit and helped users move through the
            space more confidently.
          </p>
        </div>

        <img
          src="/lufthansa/wayfinding.jpg"
          alt="FlyingLab Factory wayfinding concept"
          style={{
            width: "100%",
            height: "430px",
            objectFit: "cover",
            display: "block",
            background: "#e8e8e8",
          }}
        />
      </section>

      {/* OUTCOME */}
      <section
        style={{
          maxWidth: "860px",
          margin: "130px auto 0 auto",
          padding: "55px 60px",
          background: "#f6b21a",
          color: "#061b4e",
              borderRadius: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            lineHeight: "0.95",
            fontWeight: 400,
            letterSpacing: "-0.05em",
            margin: "0 0 42px 0",
          }}
        >
          Outcome
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "28px 60px",
          }}
        >
          {[
            "Simplified the booking workflow",
            "Improved visibility of rooms, packages, and services",
            "Connected digital and physical touchpoints",
            "Created a clearer arrival and orientation experience",
          ].map((item) => (
            <p
              key={item}
              style={{
                fontSize: "15px",
                lineHeight: "1.35",
                margin: 0,
                fontWeight: 500,
              }}
            >
              {item}
            </p>
          ))}
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

export default Project3;