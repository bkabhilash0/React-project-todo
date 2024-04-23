import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Todo from "../models/Todo";
import { useAuth } from "../store/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const AddTodoModal = ({ edit, data }) => {
  const [todo, setTodo] = useState("");
  const [desc, setDesc] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (edit) {
      setTodo(data.title);
      setDesc(data.description);
    }
  }, [edit, data]);

  const user = useAuth((state) => state.user);
  const client = useQueryClient();


  const { mutate, isPending } = useMutation({
    mutationKey: ["addTodo"],
    mutationFn: async () => {
      const res = axios({
        method: edit ? "PUT" : "POST",
        url: `${import.meta.env.VITE_API_URL}/todo/`,
        data: {
          id: edit ? data.id : 0,
          description: todo,
          status: false,
          projectId: id,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${user}`,
        },
      });
      return res;
    },
    onSuccess: () => {
      alert("Todo Added Successfully");
      client.invalidateQueries(["todos", id]);
    },
    onError: (error) => {
      console.log(error);
      alert("Failed to Add Todo");
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-md shadow py-2 px-3 md:py-4 md:px-7 flex flex-col gap-y-2 w-full max-w-screen-md z-10">
      {!edit && <h1 className="text-3xl font-bold">Add Todo</h1>}
      {edit && <h1 className="text-3xl font-bold">Edit Todo</h1>}
      <hr className="my-4" />
      <form className="flex flex-col gap-y-5" onSubmit={submitHandler}>
        <div className="flex flex-col gap-y-2 md:gap-y-3">
          <label htmlFor="title" className="text-base md:text-lg">
            Todo
          </label>
          <input
            id="title"
            type="text"
            className="border border-neutral-300 rounded text-lg py-2 px-3"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
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
        {!edit && (
          <button
            disabled={isPending}
            type="submit"
            className="px-5 ml-auto py-2 bg-green-500 text-white rounded-lg text-lg  font-semibold"
          >
            Add Todo
          </button>
        )}
        {edit && (
          <button
            disabled={isPending}
            type="submit"
            className="px-5 ml-auto py-2 bg-green-500 text-white rounded-lg text-lg  font-semibold"
          >
            Update Todo
          </button>
        )}
      </form>
    </div>
  );
};

AddTodoModal.propTypes = {
  edit: PropTypes.bool,
  data: PropTypes.instanceOf(Todo),
};

export default AddTodoModal;
