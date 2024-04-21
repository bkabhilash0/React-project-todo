import Toggle from "react-toggle";
import UpdateTodoBtn from "./UpdateTodoBtn";

const TodoCard = () => {
  const handleDelete = () => {};

  return (
    <div className="w-full bg-white rounded-lg shadow py-2 px-3 flex flex-col gap-y-4 md:py-3 hover:shadow-lg transition-all cursor-pointer lg:py-5 lg:px-6">
      <div className="flex gap-x-4 md:gap-x-6 lg:gap-x-8 items-start">
        <div className="min-w-14 md:min-w-20 lg:min-w-24 aspect-square bg-neutral-200 rounded-full"></div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold md:text-xl lg:text-2xl">Todo 1</h2>
          <p className="text-[12px] md:text-sm lg:text-base text-justify text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia
            adipisci hic enim sapiente, nihil corporis quas sunt...
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-2 justify-between">
        <div>
          <Toggle
            defaultChecked={false}
            aria-label="No label tag"
            onChange={() => {}}
          />
        </div>
        <div className="flex items-center gap-x-2 justify-end">
          <button className="block px-3 py-1 bg-green-500 text-sm text-white rounded-md md:text-base lg:text-lg font-semibold">
            View
          </button>
          <UpdateTodoBtn />
          <button
            className="block px-3 py-1 bg-red-500 text-sm text-white rounded-md md:text-base lg:text-lg font-semibold"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
