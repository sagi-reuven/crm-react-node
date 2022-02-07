import { NavLink } from "react-router-dom";

const Card = ({ card: { bizImage, bizAddress, bizPhone, bizDescription, bizName } }) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={bizImage} class="card-img-top" alt={bizDescription} />
      <div class="card-body">
        <h5 class="card-title">{bizName}</h5>
        <p class="card-text">{bizDescription}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{bizName}</li>
        <li class="list-group-item">
          <i className="bi bi-house-fill text-primary"></i>
          {bizAddress}
        </li>
        <li class="list-group-item">
          <i className="bi bi-phone text-success "></i>
          {bizPhone}
        </li>
      </ul>
      <div class="card-body">
        <NavLink>
          <i className="bi bi-pencil text-warning"></i>
          Edit
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
