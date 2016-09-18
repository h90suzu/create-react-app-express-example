import React, { Component, PropTypes } from 'react';

const propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

function TodoItem({ id, title, handleDelete }) {
  return (
    <li>
      <span>{title}</span>
      <button onClick={() => handleDelete(id)}>DELETE</button>
    </li>
  );
}

TodoItem.propTypes = propTypes;

export default TodoItem;
