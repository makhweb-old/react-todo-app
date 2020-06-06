import React from "react";

const TodoItem = ({ todo, listIndex }) => {
  return (
    <li className="list-group-item">
      {listIndex}. {todo}
    </li>
  );
};

export default TodoItem;
