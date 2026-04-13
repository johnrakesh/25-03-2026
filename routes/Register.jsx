import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./Register.css";
import { useState } from "react";
import { useEffect } from "react";


export function Register() {

   const [userData, setFormData] = useState([{ fullname: "", email: "", password: "", role: "" }]);

    // useEffect(()=>{
    //     setFormData([{

    //         fullname: "Prakash", email: "prakash@gmail.com", password: "asdwqe!123", role: "Admin" 

    //     },{
    //         fullname: "Raj", email: "raj@gmail.com", password: "asd!@213adsQWQ", role: "Editor" 
    //     },{
    //         fullname: "Evan", email: "evan@gmail.com", password: "asda@!@#@212AA", role: "Viewer" 
    //     }])
    // },[])
     

    const validationSchema = yup.object({
        fullname: yup.string().min(2, "username should be 2 characters").max(12).required(),
        email: yup.string().email().required("Email is Required"),
        password: yup.string().required().min(8).matches(
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
            "Must contain number, lowercase, uppercase and special character"
        ),
        role: yup.string().required("Role is Required")
    })
    console.log(userData);

    

    return (
        <>

            <Formik
                initialValues={{ fullname: "", email: "", password: "", role: "" }}
                validationSchema={validationSchema} onSubmit={(values) => {
                    const updateUsers = [...userData,values];
                    
                    setFormData(updateUsers);
                    
                }}
            >

                <div className="container">
                    <Form >
                        <h2>Registration Form</h2>

                        <div className="inputs">
                            <label>FullName:</label>
                            <Field type="text" name="fullname" className="input-styling" placeholder="Enter FullName"></Field>
                            <ErrorMessage name="fullname" component="div" style={{ color: "red" }}></ErrorMessage>
                        </div>
                        <div className="inputs">
                            <label>Email</label>
                            <Field type="text" name="email" className="input-styling" placeholder="Enter Email Address"></Field>
                            <ErrorMessage name="email" component="div" style={{ color: "red" }}></ErrorMessage>
                        </div>

                        <div className="inputs">
                            <label>Password:</label>
                            <Field type="password" name="password" className="input-styling" placeholder="Enter Password" ></Field>
                            <ErrorMessage name="password" component="div" style={{ color: "red" }}></ErrorMessage>
                        </div>

                        <div className="inputs">
                            <label>Role</label>
                            <Field as="select" name="role">
                                <option value="">Select Role</option>
                                <option value="admin">Admin</option>
                                <option value="editor">Editor</option>
                                <option value="viewer">Viewer</option>
                            </Field>
                            <ErrorMessage name="role" component="div" style={{ color: "red" }}></ErrorMessage>
                        </div>

                        <div className="btn">
                            <button type="submit">Submit</button>
                            {/* <button type="submit">Submit</button> */}
                        </div>
                    </Form>
                </div>

            </Formik>


        </>
    )
}