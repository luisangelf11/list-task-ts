import CheckBox from "./CheckBox";
import { FaTrash, FaCheck } from "react-icons/fa";
import { MdError } from "react-icons/md";
import {useAppContext} from '../context/appContext'

type ObjectTask = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

type Props = {
  data: ObjectTask;
};

export default function Card({ data }: Props) {
  const {deleteTask} = useAppContext();
  const deleteData =()=>{
    let response = confirm(`Do you want delete this task (${data.description})?`);
    if(response) deleteTask(data.id);
  }
  return (
    <div className="bg-neutral-800  rounded-md w-10/12">
      <h3 className="font-semibold text-white uppercase text-center text-xl p-2">
        {data.title}
      </h3>
      <div className="flex justify-around items-center">
        <div>
          <p className="flex justify-center p-1 gap-2">
             <span className="text-3xl p-1">{data.completed ? <FaCheck className="text-green-600" /> : <MdError className="text-red-600"/>}</span>
             <span className="text-white text-md">{data.description}</span>
          </p>
        </div>
        <div className="flex gap-2 items-center justify-center p-2">
          <button onClick={deleteData}>
            <FaTrash className="text-2xl text-red-400" />
          </button>
          <CheckBox status={data.completed} id={data.id}/>
        </div>
      </div>
    </div>
  );
}
