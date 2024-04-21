import  { useState } from 'react'
import AddTodoModal from './AddTodoModal';

const AddTodoBtn = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalToggle = () => {
      setShowModal((prev) => !prev);
    };
  
    return (
      <>
        <div
          className="px-2 flex items-center gap-2 md:px-3 py-1 bg-neutral-300 rounded-lg hover:bg-neutral-300/70 transition-all cursor-pointer"
          onClick={handleModalToggle}
        >
          <p className="text-sm md:text-lg font-bold">+</p>
          <p className="text-sm md:text-base lg:text-lg">Add Todos</p>
        </div>
        {showModal && (
          <>
            <div
              className="bg-black/50 fixed w-full h-full top-0 left-0"
              onClick={handleModalToggle}
            ></div>
            <AddTodoModal/>
          </>
        )}
      </>
    );
}

export default AddTodoBtn