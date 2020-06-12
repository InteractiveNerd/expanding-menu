import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";

class Card extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPost(props) {
    let pageTitle = this.props.pageTitle;

    return this.props.posts.map((post) => {
      return (
        <div className="card__container" key={post.id}>
          <div className="card__container-hero">{pageTitle}</div>
          <div className="card__container-caption">{post.title}</div>
          <div className="card__container-btns">
            <button id="left" />
            <button id="right" />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="card">{this.renderPost()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(Card);

// const [data, setData] = useState({ info: [] });

// useEffect(() => {
//   async function fetchData() {
//     const result = await axios(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//   }
//   fetchData();
// }, [setData(result.data)]);

// useEffect(() => {
//   axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       console.log(res);
//       setPosts(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, []);
