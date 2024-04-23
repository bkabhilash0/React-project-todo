import { Link, useParams } from "react-router-dom";
import AddTodoBtn from "../components/AddTodoBtn";
import EditableHeader from "../components/EditableHeader";
import TodoCard from "../components/TodoCard";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../store/store";

const TodoPage = () => {
  const params = useParams();

  const user = useAuth((state) => state.user);

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["projects"],
    enabled: !!user,
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/todo/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${user}`,
        },
      });
      const data = res.json();
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
