import {createContext, useContext} from "react"

/* 
## ye ek tarika hai store banane lekin hum redux toolkit use karte hai most efficient way hai
*/
export const TodoContext = createContext({
    todos:[{
        id: 0,
        todo: "Example Todo",
        completed: false
    }],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider