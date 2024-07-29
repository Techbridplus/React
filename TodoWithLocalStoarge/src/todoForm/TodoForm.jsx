import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../feature/slice/Slice'


function TodoForm() {
	const [todoMsg, setTodoMsg] = useState("")
	const dispatch = useDispatch()

	const add = (e) => {
		e.preventDefault()

		if (!todoMsg) return

		dispatch(addTodo(todoMsg))
		setTodoMsg("")
	}

	return (
		<form onSubmit={add} className="flex">
			<input
				type="text"
				placeholder="Write Todo..."
				className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
				value={todoMsg}
				onChange={(e) => setTodoMsg(e.target.value)}
			/>
			<button type="submit" className="rounded-r-lg bg-blue-500 text-white px-4 py-1.5">Add</button>
		</form>
	)
}

export default TodoForm