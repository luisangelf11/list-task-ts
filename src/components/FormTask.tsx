import { useState } from "react";
import { useAppContext } from "../context/appContext";

interface IForm {
  title: string;
  description: string;
}

interface ITaskData {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export default function FormTask() {
  //Intial form
  const formEmpty: IForm = {
    title: "",
    description: "",
  };
  //State
  const [form, setForm] = useState<IForm>(formEmpty);
  //Hooks
  const { addTask } = useAppContext();

  //Event Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //Save a Task
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(form.title !== "" && form.description != ""){
      const newTask: ITaskData = {
        id: new Date().getTime(),
        title: form.title,
        description: form.description,
        completed: false,
      };
      addTask(newTask);
      setForm(formEmpty);
    }else alert('Title or description is empty');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-2 bg-white w-80 md:w-96 p-4 rounded-md"
    >
      <div className="flex flex-col justify-start w-full">
        <label htmlFor="title" className="font-bold text-left text-neutral-800">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={form.title}
          className="outline-blue-500 border border-gray-500 rounded-md  focus:border-blue-600 transition-all
           p-1"
          placeholder="Example"
        />
      </div>
      <div className="flex flex-col justify-start w-full">
        <label htmlFor="description" className="font-bold text-left text-neutral-800">
          Description:
        </label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleChange}
          value={form.description}
          className="outline-blue-500 border border-gray-500 rounded-md  focus:border-blue-600 transition-all
        p-1"
          placeholder="Add a description"
        />
      </div>
      <button className="w-full mt-4 bg-blue-900 hover:bg-blue-800 text-white uppercase p-1 font-bold rounded">Save</button>
    </form>
  );
}
