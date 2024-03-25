import Card from './Card'
import {useAppContext} from '../context/appContext'
import { FaTasks } from "react-icons/fa";


export default function Viewer() {
    const {tasks} = useAppContext();
  return (
    <section className='flex flex-col items-center  gap-4 w-96 h-96 overflow-auto scrollNew'>
        {tasks.length ?   tasks.map(el=> <Card key={el.id} data={el}/>) : <FaTasks className='text-blue-400 text-9xl' />}
    </section>
  )
}
