import { useState } from "react";

const AddProjectModal = () => {
  const [project, setProject] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-md shadow py-2 px-3 md:py-4 md:px-7 flex flex-col gap-y-2 w-full max-w-screen-md">
      <h1 className="text-3xl font-bold">Add New Project</h1>
      <hr className="my-4" />
      <form className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-2 md:gap-y-3">
          <label htmlFor="title" className="text-base md:text-lg">
            Project
          </label>
          <input
            id="title"
            type="text"
            className="border border-neutral-300 rounded text-lg py-2 px-3"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-2 md:gap-y-3">
          <label htmlFor="desc" className="text-base md:text-lg">
            Description
          </label>
          <input
            id="desc"
            type="text"
            className="border border-neutral-300 rounded text-lg py-2 px-3"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="px-5 ml-auto py-2 bg-green-500 text-white rounded-lg text-lg  font-semibold"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProjectModal;
