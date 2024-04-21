import Project from "../models/Project";

export const projects = new Array(50)
  .fill(0)
  .map(
    (_, index) =>
      new Project(
        index + 1,
        `Project ${index + 1}`,
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia adipisci hic enim sapiente, nihil corporis quas sunt..."
      )
  );
