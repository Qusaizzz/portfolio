import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "GROHE X",
    category: "UX DESIGN . GROHE",
    preview: "/grohe/hero1.jpg",
    link: "/project1",
  },

  {
    title: "GROHE Virtual Showrooms",
    category: "WebAR Experience . GROHE",
    preview: "/preview/project2.jpg",
    link: "/project2",
  },

  {
    title: "Lufthansa FlayingLab",
    category: "UX DESIGN . LUFTHANSA",
    preview: "/preview/project3.jpg",
    link: "/project3",
  },



  {
    title: "Interactive Portfolio",
    category: "A collection of experiments in XR & Interactive Design",
    preview: "/preview/qussaikh.jpg",
      link: "https://www.qussaikh.com/",
  },

];

function Projects({ setPreview }) {
  return (
    <section className="projects">

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          category={project.category}
          preview={project.preview}
          link={project.link}
          setPreview={setPreview}
        />
      ))}

    </section>
  );
}

export default Projects;