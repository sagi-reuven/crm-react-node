const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{name}</label>
      <input {...rest} className="form-control" name={name} id={name} />
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default Input;
