import { useState } from "react";

const EditableHeader = () => {
  const [title, setTitle] = useState("Project 1");
  const [editMode, setEditMode] = useState(false);
  return (
    <div className="flex flex-col justify-start items-start gap-y-2 md:flex-row md:justify-between md:items-center">
      <form action="">
        <input
          type="text"
          className={`text-2xl font-bold md:text-3xl lg:text-4xl outline-none ${
            editMode ? "bg-gray-300 py-3" : "bg-transparent"
          }`}
          value={title}
          disabled={!editMode}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
      {!editMode && (
        <div
          className="w-10 h-10 bg-red-500 rounded-full cursor-pointer"
          onClick={() => setEditMode(true)}
        ></div>
      )}
      {editMode && (
        <button
          className="block px-3 py-1 bg-green-500 text-sm text-white rounded-md ml-auto md:text-base lg:text-lg font-semibold"
          onClick={() => setEditMode(false)}
        >
          Save
        </button>
      )}
    </div>
  );
};

export default EditableHeader;
