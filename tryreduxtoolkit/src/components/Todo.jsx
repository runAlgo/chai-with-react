import { useSelector, useDispatch } from "react-redux"
import {removeTodo, updateTodo} from "../features/todo/todoSlice"

const Todo = () => {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <>
    <div className="items-center text-center">Todo</div>
    {todos.map((todo) => (
      <li key={todo.id} className="border-2 border-yellow-300 flex justify-between m-4 rounded">
        {todo.text}
      <div>
        <button onClick={() => dispatch(updateTodo({id: todo.id, newText: "Hello edit"}))} className="bg-blue-300 px-4 rounded mx-2">!</button>
        <button onClick={() => dispatch(removeTodo(todo.id))} className="bg-red-500 text-white px-4 rounded">X</button>
      </div>
      </li>
      
    ))}
    </>
  )
}

export default Todo