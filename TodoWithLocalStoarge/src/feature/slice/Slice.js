import { createSlice, nanoid } from '@reduxjs/toolkit';
// Function to load state from local storage
const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('todos');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Could not load state", err);
        return [];
    }
};

// Function to save state to local storage
const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('todos', serializedState);
    } catch (err) {
        console.error("Could not save state", err);
    }
};
const initialState = loadStateFromLocalStorage();

export const TodoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        loadData: (state, action) => {
            return action.payload;
           console.log("loadData called ",action.payload)
        },

        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                todoMsg: action.payload,
                completed: false,
            };
            state.push(newTodo); // Directly push to the state array
            saveStateToLocalStorage(state);
        },
        updateTodo: (state, action) => {
            state.map((todo) => {
                if (todo.id == action.payload.id) {
                    todo.todoMsg = action.payload.todoMsg;
                }
            } 
            )
            saveStateToLocalStorage(state);
        },
        deleteTodo: (state, action) => {
            const newState = state.filter((todo) => todo.id !== action.payload);
            saveStateToLocalStorage(newState); // Save state after deleting a todo
            return newState;
        },
        toggleCompleted: (state, action) => {
            state.map((todo) => {
                
                if (todo.id == action.payload) {
                    todo.completed = !todo.completed;
                }
            });

        },
    
    },
});

export const { loadData,addTodo, updateTodo, deleteTodo, toggleCompleted } = TodoSlice.actions;

export default TodoSlice.reducer;