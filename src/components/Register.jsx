import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./Register.css";
import { useState } from "react";

export function Register() {

    const [step, setStep] = useState(1);
    const [formdata, setFormData] = useState();

    const validationSchema = yup.object({
        username: yup.string().min(8, "username should be 8 characters").max(12).required(),
        phonenumber : yup.number().required("Phone Number Required"),
        password : yup.string().required().min(8).matches(/[0-9]/,"Must Contain Number"),
        confirmpassword : yup.string().required("Confirm Password").oneOf([yup.ref("password")], "Password must match")
       
    })

    return (
        <>
        {   step === 1 && (
            <Formik
                initialValues={{ username: "", phonenumber: "", password: "", confirmpassword: "" }}
                validationSchema={validationSchema} onSubmit={(values)=>{
                    setStep(2);
                    setFormData(values);
                }}
                 >
                
                <div className="container">
                <Form >
                    <h2>Register User</h2>
                    
                    <div className="inputs">
                        <label>UserName:</label>
                        <Field type="text" name="username" className="input-styling" placeholder="Enter User Name"></Field>
                        <ErrorMessage name="username" component="div" style={{color:"red"}}></ErrorMessage>
                    </div>
                    <div className="inputs">
                        <label>PhoneNumber:</label>
                        <Field type="number" name="phonenumber" className="input-styling" placeholder="Enter Phone Number"></Field>
                        <ErrorMessage name="phonenumber" component="div" style={{color:"red"}}></ErrorMessage>
                    </div>

                    <div className="inputs">
                        <label>Password:</label>
                        <Field type="password" name="password" className="input-styling" placeholder="Enter Password" ></Field>
                        <ErrorMessage name="password" component="div" style={{color:"red"}}></ErrorMessage>
                    </div>

                    <div className="inputs">
                        <label>ConfirmPassword:</label>
                        <Field type="password" name="confirmpassword" className="input-styling" placeholder="Confirm Password"></Field>
                        <ErrorMessage name="confirmpassword" component="div" style={{color:"red"}}></ErrorMessage>
                    </div>

                    <div className="btn">
                        <button type="submit" >Review</button>
                        {/* <button type="submit">Submit</button> */}
                    </div>
                </Form>
                </div>

            </Formik>)
            }

            {
                step === 2 && (
                    <>
                    <h2>Review Form Data</h2>
                    <div className="review">
                        <label>UserName:{formdata.username}</label><br></br>
                        <label>PhoneNumber:{formdata.phonenumber}</label>
                        <button className="btn-submit" type="submit" onClick={()=>setStep(3)}>Submit</button>
                    </div>
                    
                    </>

                )
            }
            {
                step === 3 && (
                    <>
                    
                    </>
                )
            }

        </>
    )
}