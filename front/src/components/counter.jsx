const Counter = ({ counter, onIncrement, onDelete, onDecrement }) => {
  return (
    <>
      <button className="btn btn-primary" onClick={onIncrement}>
        +
      </button>
      <button className="btn btn-warning" onClick={onDecrement}>
        -
      </button>
      <button className="btn btn-danger" onClick={onDelete}>
        <i className="bi bi-trash"></i>
      </button>
      <span className="fs-3 fw-bold text-secondary">{counter}</span>
    </>
  );
};

export default Counter;
