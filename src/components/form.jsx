import React from "react";
import { useForm } from "react-hook-form";
import {db} from "../firebase";
// import {Input, Textarea, FormLabel, Formik, FormHelperText, Button} from "@chakra-ui/core";

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
const divStyle = {
  //  display: "flex",
          // justifyContent: "spaceBetween",
          alignItems: "center",
          // margin : "auto"
}

console.log(errors);

    // const { username, password, email, description, transportation } = formData;
    return (
      <form  as="fieldset" onSubmit={handleSubmit(onSubmit)}>
          <div style={divStyle}><label as="legend" >Username</label>
          <input
            ref={register({ required: true })}
            placeholder="Enter username"
            type="text"
            name="username"
            // value={username}
            // onChange={handleChanges}
          />{errors.username && <span>This field is required</span>}
         </div>
         <div style={divStyle} ><label as="legend" >Password</label>
          <input
            ref={register({ required: true , minLength: 8, maxLength: 20})}
            placeholder="Enter password"
            type="password"
            name="password"
            // value={password}
            // onChange={handleChanges}
          />{errors.password && <span> password is invalid </span>}
      </div> 
          <div style={divStyle} ><label as="legend" >Email address</label>
          <input
          ref={register({ required: true, pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          } })}
            placeholder="example@email.com"
            type="email"
            name="email"
            // value={email}
            // onChange={handleChanges}
          />
          {errors.exampleRequired && <span>This field is required</span>}
       </div>
        
          <div style={divStyle} ><label as="legend" >Describe yourself</label>
          <textarea
          ref={register({ required: true })}
            name="description"
            // value={description}
            // onChange={handleChanges}
          ></textarea>
     </div>
     <div style={divStyle} >     
     <label as="legend" >Form of transportation</label>
          <select
          name="transportation" 
          defaultValue="cars"
          // value={transportation} 
          // onChange={handleChanges}
          ><option value="cars">cars</option>
            <option value="motorcycle">motorcycle</option>
            <option value="bicycle">bicycle</option>
          </select></div>


<div style={divStyle}>
  <label> insert Picture</label>
  <input type="file" ref={register} />
</div>

      <div style={divStyle} ><button
            type="submit">Submit</button></div>
          
   
      </form>
    );
  }



export default Form;
