import AddTodoBtn from "../components/AddTodoBtn";
import EditableHeader from "../components/EditableHeader";
import TodoCard from "../components/TodoCard";

const TodoPage = () => {
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
