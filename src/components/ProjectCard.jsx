import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Project from "../models/Project";

const ProjectCard = ({project}) => {
  return (
    <Link
      className="w-full bg-white rounded-lg shadow py-2 px-3 flex flex-col gap-y-4 md:py-3 hover:-translate-y-2 transition-all cursor-pointer lg:py-5 lg:px-6"
      to={`/projects/${project.id}`}
    >
      <div className="flex gap-x-4 md:gap-x-6 lg:gap-x-8 items-start">
        <div className="min-w-14 md:min-w-20 lg:min-w-24 aspect-square bg-neutral-200 rounded-full"></div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold md:text-xl lg:text-2xl">
            {project.title}
          </h2>
          <p className="text-[12px] md:text-sm lg:text-base text-justify text-neutral-400">
            {project.description}
          </p>
        </div>
      </div>
      <Link
        className="block px-3 py-1 bg-green-500 text-sm text-white rounded-md ml-auto md:text-base lg:text-lg font-semibold"
        to={`/projects/${project.id}`}
      >
        View
      </Link>
    </Link>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.instanceOf(Project),
};

export default ProjectCard;
