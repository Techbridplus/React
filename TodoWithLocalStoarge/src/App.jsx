import { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import TodoForm from './todoForm/TodoForm'
import TodoItem from './todoItem/TodoItem'
import { loadData} from './feature/slice/Slice'

function App() {
  
  const todos = useSelector((state)=>state.Todo)
  
  const dispatch = useDispatch()


  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("todos"))
    if (localData) {
      dispatch(loadData(localData))
      console.log("local data=> : ",localData)
    }
  }, [])

  useEffect(() => {
     localStorage.setItem("todos", JSON.stringify([...todos]))
    console.log("store current array in local storage : ",...todos)
  }, [todos])
  



  return (
  
      <div className="bg-[#172842] min-h-screen py-8 w-screen">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/* Loop and Add TodoItem here */}
                        {todos.length > 0 ? (
                          todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                              <TodoItem todo={todo} />
                            </div>
                          ))
                        ) : (
                          <p className="text-center w-full">No todos available</p>
                        )}
                    </div>
                </div>
            </div>
  )
}

export default App