import {useState} from 'react'
import {useAppContext} from '../context/appContext'

type Props = {
    status: boolean
    id: number
}

export default function CheckBox({id, status}: Props) {
    const [checkbox, setCheckbox] = useState<boolean>(status);
    const {updateTask} = useAppContext();

  return (
    <input type="checkbox" name="checkStatus" checked={checkbox} onChange={()=>{
        setCheckbox(!status);
        updateTask(id, !checkbox);
    }}  className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"/>
  )
}
