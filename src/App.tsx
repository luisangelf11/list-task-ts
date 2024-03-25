import FormTask from "./components/FormTask";
import Viewer from "./components/Viewer";
import { AppContextProvider } from "./context/appContext";

function App() {
  return (
    <section className="w-full h-screen bg-neutral-950 flex justify-center items-center">
      <AppContextProvider>
       <section className="flex justify-center items-center bg-neutral-900 p-8 rounded-lg">
       <div className="flex gap-5 items-center justify-center flex-col md:flex-row">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-white uppercase text-3xl font-extrabold">Task App</h1>
            <FormTask />
          </div>
          <Viewer />
        </div>
       </section>
      </AppContextProvider>
    </section>
  );
}

export default App;
