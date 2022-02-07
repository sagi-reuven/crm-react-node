const PageHeader = ({ title, para }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <h1>{title}</h1>
        </div>
        <div className="col-12 mb-5">
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
