import * as yup from "yup";
import "../../src/index.css"

export function Formexample() {

    function handlesubmit(e){

        e.preventdefault();

    }


    return (
        <form onSubmit={handlesubmit}>
            <div className="container">
                <label>FirstName</label>
                <input type="text" />

                <label>LastName</label>
                <input type="text"></input>

                <label>Gender
                <input type="radio" name="gender" />Male
                <input type="radio" name="gender" />Female
                </label>

                <label>Skills:
                <input type="checkbox" name="skills"/>Javascript
                <input type="checkbox" name="skills" />React
                </label>

                <label>Email</label>
                <input type="text"></input>

                <label>Password</label>
                <input type="text"></input>

                <label>Confirm Password</label>
                <input type="text"></input>

                <button type="button">Submit</button>
            </div>
        </form>


    )
}