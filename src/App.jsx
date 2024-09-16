import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Todoform from './components/Todoform';
import Todoitem from './components/Todoitem';
import TTT from './components/TTT';
import { Todoprovider } from './context/Todocontext';
function App() {
 
  const[todos,settodos]=useState([]);

  const addtodo = (todo) =>{
     settodos((prev)=> [...prev,{id:Date.now(),...todo}])
  }
  const updatetodo = (id,todo) =>{
     settodos((prev)=> prev.map((el)=>(el.id === id ? todo : el)))
  }
  const deletetodo = (id) =>{
     settodos((prev)=> prev.filter((el)=>el.id !== id))
  }
  const togelcomplete = (id) =>{
     settodos((prev)=>prev.map((el)=> el.id === id? {...el,completed:!el.completed} : el))
  }

  useEffect(() => {
     const todos=JSON.parse(localStorage.getItem("todos"));
     if(todos && todos.length >0){
        settodos(todos);
     }
  }, []);

  useEffect(()=>{
     localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
  
  return (
    <>
      <Todoprovider value={{todos,addtodo,updatetodo,deletetodo,togelcomplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <Todoform/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                           todos.map((todo)=>(
                              <div key={todo.id}
                              className="w-full"
                              > 
                              {/* <TTT todo={todo}/> */}
                              <Todoitem todo={todo}/>
                              </div>
                           ))
                        }
                    </div>
                </div>
            </div>
      </Todoprovider>
    </>
  )
}

export default App
