import React, {useContext, createContext, useState, useEffect} from 'react'

//Interface for the state context
interface ITask{
    id: number
    title: string
    description: string
    completed: boolean
}

//Interface of context
interface ITaskContext{
    tasks: ITask[]
    addTask: (obj: ITask) => void
    deleteTask: (id: number) => void
    updateTask: (id: number, completed: boolean) => void
}

//Type for children
type Props = React.PropsWithChildren<{}>

//Create a context
const AppContext= createContext<ITaskContext | undefined>(undefined);

//Hook for use the context
export const useAppContext =(): ITaskContext =>{
    const context = useContext(AppContext);
    if(!context) throw new Error(`There is not exist an App Context`);
    return context;
}

//Component Provider
export const AppContextProvider =({children}: Props)=>{
    const storedTasksJson = localStorage.getItem('tasks'); //Get the localSTorage array
    let storedTasks: ITask[] = [];

    if(storedTasksJson) storedTasks = JSON.parse(storedTasksJson); //Add the value
    const [tasks, setTasks] = useState<ITask[]>(storedTasks || []);

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask =(obj: ITask)=>
        setTasks([...tasks, obj]);

    const updateTask =(id: number, completed: boolean)=>{
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed } : task // Actualizamos solo la tarea con el ID correspondiente
          );
          setTasks(updatedTasks); 
    }

    const deleteTask = (id: number)=>{
        const newTasks = tasks.filter(el => el.id !== id);
        setTasks(newTasks);
    }

    return(
        <AppContext.Provider value={{
            tasks,
            addTask,
            updateTask,
            deleteTask
        }}>
            {children}
        </AppContext.Provider>
    )
}