import React, { useState } from "react";
import {db} from "../firebase";

function Form () {
   const [formData, setFormData] = useState ({
      username: "",
      password: "",
      email: "",
      description: "",
      transportation: "",
  });

const handleChanges = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    setFormData({
      ...formData,
      [nam]: val
    }); 
  };

const handleSubmit = (event) => {
    alert(
      `${formData.username} ${formData.description} ${formData.transportation} ${formData.password} ${formData.email}`
    );
    const data = {
      ...formData,
      uid: new Date().getTime()
    };
    db.collection("react-training")
      .doc(data.uid.toString())
      .set(data)
    event.preventDefault();
  };



    const { username, password, email, description, transportation } = formData;
    return (
      <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        <div style={divStyle}>
          <label style={labelSyle}>Username</label>
          <input
            style={inputStyle}
            placeholder="Enter username"
            type="text"
            className="form-username"
            name="username"
            value={username}
            onChange={handleChanges}
          />
        </div>
        <div style={divStyle}>
          <label style={labelSyle}>Password</label>
          <input
            style={inputStyle}
            placeholder="Enter password"
            value={password}
            type="password"
            name="password"
            className="form-password"
            onChange={handleChanges}
          />
        </div>
        <div style={divStyle}>
          <label style={labelSyle}>Email address</label>
          <input
            style={inputStyle}
            placeholder="example@email.com"
            value={email}
            type="email"
            name="email"
            className="form-email"
            onChange={handleChanges}
          />
        </div>

        <div style={divStyle}>
          <label style={labelSyle}>Comments</label>
          <textarea
            className="form-description"
            name="description"
            value={description}
            onChange={handleChanges}
          ></textarea>
        </div>
        <div style={divStyle}>
          <label style={labelSyle}>Form of transportation</label>
          <select className="form-transportation" name="transportation" value={transportation} onChange={handleChanges}>
            <option value="cars">cars</option>
            <option value="motorcycle">motorcycle</option>
            <option value="bicycle">bicycle</option>
          </select>
        </div>
        <div style={divStyle}>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }


const labelSyle = {
  marginRight: "20px",
};
const divStyle = {
  marginTop: "20px",
};
const inputStyle = {
  textAlign: "center",
};

export default Form;
