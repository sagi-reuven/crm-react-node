import { Component } from "react";
import getPosts from "../services/posts";
import Post from "./post";
import PageHeader from "./common/pageHeader";
class Posts extends Component {
  state = {
    postsArray: [],
  };

  async componentDidMount() {
    const post = await getPosts();
    this.setState({ postsArray: post });
  }
  render() {
    const { postsArray } = this.state;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <PageHeader title="Posts  Page" para="here you can find cards with diffrent posts" />
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            {postsArray.map((post) => (
              <Post key={post.title} post={post} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Posts;
