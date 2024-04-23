import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import Todo from "../models/Todo";
import PropTypes from "prop-types";

const UpdateTodoBtn = ({data}) => {
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
          <AddTodoModal edit data={data}/>
        </>
      )}
    </>
  );
};

UpdateTodoBtn.propTypes = {
  data: PropTypes.instanceOf(Todo),
};


export default UpdateTodoBtn;
