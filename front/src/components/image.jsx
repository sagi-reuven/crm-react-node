/* eslint-disable jsx-a11y/anchor-is-valid */
import Counter from "./counter";
const Image = ({ image: { id, title, url }, onIncrement, onDecrement, onDelete }) => {
  return (
    <div class="card" style={{ width: "17rem" }}>
      <img src={url} class="card-img-top" alt={title} />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <div className="counter d-flex justify-content-evenly">
          <Counter
            counter={id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Image;
