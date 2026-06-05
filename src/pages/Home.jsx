import { useState } from "react";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";

function Home() {
  const [preview, setPreview] = useState(null);

  return (
    <main className="page">
      <LeftSection preview={preview} setPreview={setPreview} />
      <RightSection setPreview={setPreview} />
    </main>
  );
}

export default Home;