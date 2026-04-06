import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./Register.css";
import { useState } from "react";

export function Register() {

    const [step, setStep] = useState(1);

    const validationSchema = yup.object({
        username: yup.string().min(8, "username should be 8 characters").max(12).required()
       
    })

    return (
        <>
        {   step === 1 && (
            <Formik
                initialValues={{ username: "", phonenumber: "", password: "", confirmpassword: "" }}
                validationSchema={validationSchema} onSubmit={()=>setStep(2)}
                 >
                
                <div className="container">
                <Form >
                    <h2>Register User</h2>
                    
                    <div className="inputs">
                        <label>UserName:</label>
                        <Field type="text" name="username" placeholder="Enter User Name"></Field>
                        <ErrorMessage name="username" component="div" style={{color:"red"}}></ErrorMessage>
                    </div>
                    <div className="inputs">
                        <label>PhoneNumber:</label>
                        <Field type="number" name="phonenumber" placeholder="Enter Phone Number"></Field>
                        <ErrorMessage name="phonenumber"></ErrorMessage>
                    </div>

                    <div className="inputs">
                        <label>Password:</label>
                        <Field type="password" name="password" placeholder="Enter Password" ></Field>
                        <ErrorMessage name="password"></ErrorMessage>
                    </div>

                    <div className="inputs">
                        <label>ConfirmPassword:</label>
                        <Field type="password" name="confirmpassword" placeholder="Confirm Password"></Field>
                        <ErrorMessage name="confirmpassword"></ErrorMessage>
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
                    <h2>Review Form Data</h2>
                )
            }

        </>
    )
}