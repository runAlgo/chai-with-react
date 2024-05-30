import { useState } from "react"
import {useDispatch} from "react-redux"
import { addTodo } from "../features/todo/todoSlice"

const AddTodo = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput("")
  }

  return (
      <form onSubmit={addTodoHandler} className="flex justify-between border-2 p-4 m-4 rounded border-black">
        <input
        size={80}
        className="rounded border-2 border-blue-700"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-green-600 rounded text-white p-2">addTodo</button>
      </form>
  )
}

export default AddTodo