import ProjectCard from "../components/ProjectCard";
import AddProjectBtn from "../components/AddProjectBtn";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";
import Project from "../models/Project";
import { useAuth } from "../store/store";
import { Link } from "react-router-dom";
import axios from "axios";

const ProjectPage = () => {
  const user = useAuth((state) => state.user);

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["projects"],
    enabled: !!user,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/project/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${user}`,
        },
      });
      const data = res.data;
      return data;
    },
  });

  if (!user) {
    return (
      <div className="">
        <p>You are not Logged In! Please Login in to Continue</p>
        <Link to="/auth/login" className="text-blue-500">
          Login
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-start items-start gap-y-2 md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          All Projects
        </h1>
        <AddProjectBtn />
      </div>
      <hr className="my-3" />
      {isSuccess && !isLoading && !isError && (
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3">
          {data.length == 0 ? (
            <p>No Projects Available</p>
          ) : (
            data.map((project) => (
              <ProjectCard
                key={project.title}
                project={
                  new Project(project.id, project.title, project.description)
                }
              />
            ))
          )}
        </div>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default ProjectPage;
