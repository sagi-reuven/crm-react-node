const Post = ({ post: { id, title, body } }) => {
  return (
    <div className="col-3 p-2 m-4 ">
      <div className="card border-dark " style={{ width: "17rem", backgroundColor: "red" }}>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item text-danger fs-1 fw-bold">{id}</li>
          <li className="list-group-item">{title}</li>
          <li className="list-group-item">{body}</li>
        </ul>
        <div className="card-footer"></div>
      </div>
    </div>
  );
};

export default Post;
