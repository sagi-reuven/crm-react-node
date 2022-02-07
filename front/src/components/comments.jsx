import { Component } from "react";
import getComments from "../services/comments";
import PageHeader from "./common/pageHeader";
class Comments extends Component {
  state = {
    commentsArray: [],
  };
  async componentDidMount() {
    const comment = await getComments();
    this.setState({ commentsArray: comment });
  }
  render() {
    const { commentsArray } = this.state;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <PageHeader title="Comments Page" para="here you can find diffrent comments" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered border-success table-hover table-striped table-light">
                <thead>
                  <tr>
                    <th className="text-success">Post Id</th>
                    <th className="text-success">Id</th>
                    <th className="text-success">Name</th>
                    <th className="text-success">Email</th>
                    <th className="text-success">Comment</th>
                  </tr>
                </thead>
                <tbody>
                  {commentsArray.map(({ postId, id, name, email, body }) => (
                    <tr key={id}>
                      <td>{postId}</td>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{body}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Comments;
