import { Component } from "react";
import getUsers from "../services/users";
import PageHeader from "./common/pageHeader";
class UsersTable extends Component {
  state = {
    usersArray: [],
  };

  async componentDidMount() {
    const users = await getUsers();
    this.setState({ usersArray: users });
  }

  handleDelete = (id) => {
    const { usersArray } = this.state;
    const updated = usersArray.filter((user) => user.id !== id);
    this.setState({ usersArray: updated });
  };
  render() {
    const { usersArray } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <PageHeader title="Users Table" para="users information" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered table-striped table-hover table-dark">
              <thead>
                <tr>
                  <th className="text-danger">No.</th>
                  <th className="text-danger">Name</th>
                  <th className="text-danger">Email</th>
                  <th className="text-danger">City</th>
                  <th className="text-danger">Street</th>
                  <th className="text-danger">Delete</th>
                </tr>
              </thead>
              <tbody>
                {usersArray.map(({ id, name, email, address: { street, city } }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{city}</td>
                    <td>{street}</td>
                    <td onClick={() => this.handleDelete(id)}>
                      <i className="bi bi-trash text-danger"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default UsersTable;
