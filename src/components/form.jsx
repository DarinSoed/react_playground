import React from "react";
import { useForm } from "react-hook-form";
import {db} from "../firebase";
// import {Input, Button} from "@chakra-ui/core";

function Form () {

  const { register, handleSubmit, errors } = useForm();

//    const [formData, setFormData] = useState ({
//       username: "",
//       password: "",
//       email: "",
//       description: "",
//       transportation: "",
//   });

// const handleChanges = (event) => {
//     let nam = event.target.name;
//     let val = event.target.value;
//     setFormData({
//       ...formData,
//       [nam]: val
//     }); 
//   };

const onSubmit = (data) => {
    console.log(data);  
  alert(
      `${data.username} ${data.description} ${data.transportation} ${data.password} ${data.email}`
    );
const dataSend = {
      ...data,
      uid: new Date().getTime()
    };
    db.collection("react-training")
      .doc(dataSend.uid.toString())
      .set(dataSend)
  };

console.log(errors);

    // const { username, password, email, description, transportation } = formData;
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div >
          <label>Username</label>
          <input
            ref={register({ required: true })}
            placeholder="Enter username"
            type="text"
            className="form-username"
            name="username"
            // value={username}
            // onChange={handleChanges}
          />{errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div >
          <label>Password</label>
          <input
            ref={register({ required: true, pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }})}
            placeholder="Enter password"
            type="password"
            name="password"
            className="form-password"
            // value={password}
            // onChange={handleChanges}
          />{errors.email && errors.email.message}
        </div>
        <div >
          <label >Email address</label>
          <input
          ref={register({ required: true })}
            placeholder="example@email.com"
            type="email"
            name="email"
            className="form-email"
            // value={email}
            // onChange={handleChanges}
          />{errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div >
          <label >Comments</label>
          <textarea
          ref={register({ required: true })}
            className="form-description"
            name="description"
            // value={description}
            // onChange={handleChanges}
          ></textarea>{errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div >
          <label>Form of transportation</label>
          <select
          className="form-transportation" 
          name="transportation" 
          // value={transportation} 
          // onChange={handleChanges}
          ><option value="cars">cars</option>
            <option value="motorcycle">motorcycle</option>
            <option value="bicycle">bicycle</option>
          </select>
        </div>
        <div >
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }



export default Form;
