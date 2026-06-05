function LeftSection({ preview, setPreview }) {
  return (
    <section className="left">
      <div className="leftText">
        <p
          style={{
            fontSize: "26px",
            lineHeight: "1.2",
            fontWeight: "500",
            margin: 0,
          }}
        >
          Hi, I am{" "}
          <span
            className="nameHover"
            onMouseEnter={() => setPreview("/preview/mypic.png")}
            onMouseLeave={() => setPreview(null)}
          >
            Qussai
          </span>{" "}
          <br />
          Visual and brand experience designer at <strong>GROHE.</strong>
        </p>

        <p
          style={{
            marginTop: "40px",
            fontSize: "24px",
            lineHeight: "1.35",
            color: "#666",
            marginBottom: 0,
          }}
        >
          I turn ideas into engaging immersive
          experiences.
        </p>
      </div>

      <div className="box">
        {preview ? (
          <div className="previewWrapper">
            <img src={preview} alt="Preview" />

            {preview === "/preview/mypic.png" && (
              <div className="imageCursor"></div>
            )}
          </div>
        ) : (
          <div className="smile">:)..</div>
        )}
      </div>
    </section>
  );
}

export default LeftSection;