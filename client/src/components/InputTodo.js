import React, { Fragment, useState } from 'react';

const InputTodo = () => {
  const [description, setDescription] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { description };
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      // refreshes the page once the todo is added
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="text-center mt-2">
        <h1>PERN Todo List</h1>
      </div>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="btn btn-primary">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
