import { useParams } from "react-router-dom";
import AddTodoBtn from "../components/AddTodoBtn";
import EditableHeader from "../components/EditableHeader";
import TodoCard from "../components/TodoCard";
import { useQuery } from "@tanstack/react-query";

const TodoPage = () => {
  const params = useParams()
  console.log(params.id)

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/project/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic YmthYmhpbGFzaDBAZ21haWwuY29tOnBhc3N3b3Jk",
        },
      });
      const data = res.json();
      return data;
    },
  });

  return (
    <>
      <div>
        <EditableHeader />
      </div>
      <hr className="my-3" />
      <div className="flex justify-end mb-3">
        <AddTodoBtn />
      </div>
      <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl my-3">
        Pending Todos
      </h1>
      <hr className="my-5" />
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
      <hr className="my-5" />
      <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl my-3">
        Completed Todos
      </h1>
      <hr className="my-5" />
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </>
  );
};

export default TodoPage;
