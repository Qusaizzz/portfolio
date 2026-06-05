import { Link } from "react-router-dom";

function ProjectCard({
  title,
  category,
  preview,
  link,
  setPreview,
}) {
  const external = link === "https://www.qussaikh.com/";

  if (external) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project"
        onMouseEnter={() => setPreview(preview)}
        onMouseLeave={() => setPreview(null)}
      >
        <h2>{title}</h2>
        <p>{category}</p>
      </a>
    );
  }

  return (
    <Link
      to={link}
      className="project"
      onMouseEnter={() => setPreview(preview)}
      onMouseLeave={() => setPreview(null)}
    >
      <h2>{title}</h2>
      <p>{category}</p>
    </Link>
  );
}

export default ProjectCard;