import React, { Component } from "react";

const labelSyle = {
  marginRight: "20px",
};
const divStyle = {
  marginTop: "20px",
};
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "input username",
      comment: "",
      topic: "react",
    };
  }

  handleCommentChange = (event) => {
    this.setState({ comment: event.target.value });
  };
  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };
  handleTopicChange = (event) => {
    this.setState({ topic: event.target.value });
  };
  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={divStyle}>
          <label style={labelSyle}>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div style={divStyle}>
          <label style={labelSyle}>Comments</label>
          <textarea
            value={comments}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <div style={divStyle}>
          <label style={labelSyle}>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">react</option>
            <option value="angular">angular</option>
            <option value="vue">vue</option>
          </select>
        </div>
        <div style={divStyle}>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
