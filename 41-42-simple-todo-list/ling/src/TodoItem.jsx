import PropTypes from "prop-types";

export default function TodoItem({
  name,
  completed,
  id,
  toggleTodo,
  handleDelete,
}) {
  return (
    <>
      <li className="list-item">
        <label className="list-item-label">
          <input
            checked={completed}
            type="checkbox"
            data-list-item-checkbox
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          <span data-list-item-text>{name}</span>
        </label>
        <button onClick={() => handleDelete(id)} data-button-delete>
          Delete
        </button>
      </li>
    </>
  );
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
};
