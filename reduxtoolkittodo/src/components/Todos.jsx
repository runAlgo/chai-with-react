import { useSelector, useDispatch } from "react-redux";
import { editTodo, removeTodo} from "../features/todo/todoSlice";
import { useState } from "react";


const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editedText, setEditedText] = useState('');

  const handleEditTodo = (id) => {
    dispatch(editTodo({id, newText: editedText}));
    setEditedText('');
  }

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li
          className="flex justify-between px-5 my-2 bg-blue-200 rounded items-center text-center"
          key={todo.id}
        >
          <div className="flex justify-between px-2 bg-slate-200 rounded items-center text-center">
            {todo.text}
          </div>
          <div>
          <button onClick={() => dispatch(handleEditTodo(todo.id))} className="bg-white px-2 rounded py-1 ">✏️</button>
          <button
            className="bg-white px-4 py-1 rounded mx-3 m-2 text-red-700"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            X
          </button>
          </div>
        
        </li>
      ))}
    </>
  );
};

export default Todos;
