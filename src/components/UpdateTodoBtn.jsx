import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import Todo from "../models/Todo";

const UpdateTodoBtn = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <button
        className="block px-3 py-1 bg-indigo-500 text-sm text-white rounded-md md:text-base lg:text-lg font-semibold"
        onClick={handleModalToggle}
      >
        Update
      </button>
      {showModal && (
        <>
          <div
            className="bg-black/50 fixed w-full h-full top-0 left-0"
            onClick={handleModalToggle}
          ></div>
          <AddTodoModal edit data={new Todo("sample","Sample Description")}/>
        </>
      )}
    </>
  );
};

export default UpdateTodoBtn;
