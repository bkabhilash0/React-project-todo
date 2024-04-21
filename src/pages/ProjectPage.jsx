import ProjectCard from "../components/ProjectCard";
import AddProjectBtn from "../components/AddProjectBtn";
import { projects } from "../data/projects";

const ProjectPage = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-y-2 md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          All Projects
        </h1>
        <AddProjectBtn />
      </div>
      <hr className="my-3" />
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project}/>
        ))}
      </div>
    </>
  );
};

export default ProjectPage;
