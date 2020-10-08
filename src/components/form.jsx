import React, { Component } from "react";

const labelSyle = {
  marginRight: "20px",
};
const divStyle = {
  marginTop: "20px",
};
const inputStyle = {
  textAlign: "center",
};
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: `"input username"`,
      password: "",
      email: `"example@email.com"`,
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
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = (event) => {
    alert(
      `${this.state.username} ${this.state.comment} ${this.state.topic} ${this.state.password} ${this.state.email}`
    );
    event.preventDefault();
  };

  render() {
    const { username, password, email, comments, topic } = this.state;
    return (
      <form style={{ textAlign: "center" }} onSubmit={this.handleSubmit}>
        <div style={divStyle}>
          <label style={labelSyle}>Username</label>
          <input
            style={inputStyle}
            type="text"
            className="form-username"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div style={divStyle}>
          <label style={labelSyle}>Password</label>
          <input
            style={inputStyle}
            value={password}
            type="password"
            className="form-password"
            onChange={this.handlePasswordChange}
          />
        </div>
        <div style={divStyle}>
          <label style={labelSyle}>Email address</label>
          <input
            style={inputStyle}
            value={email}
            type="email"
            className="form-email"
            onChange={this.handleEmailChange}
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
