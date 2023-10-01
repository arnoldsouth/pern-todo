import React, { Fragment, useEffect, useState } from 'react';
import EditTodo from './EditTodo';

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      });

      // console.log(deleteTodo);
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const jsonData = await response.json();

      // console.log(jsonData);
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);
  return (
    <Fragment>
      <div>
        <table class="table mt-2 align-middle">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {todos.map((todo, todo_id) => (
              <tr key={todo.todo_id}>
                <td>{todo_id + 1}</td>
                <td>{todo.description}</td>
                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    className="btn "
                    onClick={() => deleteTodo(todo.todo_id)}
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ListTodos;
