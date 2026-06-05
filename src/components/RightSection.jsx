import Projects from "./Projects";

function RightSection({ setPreview }) {
  return (
    <section className="right">
      <header className="rightHeader">My works</header>
      <Projects setPreview={setPreview} />
    </section>
  );
}

export default RightSection;