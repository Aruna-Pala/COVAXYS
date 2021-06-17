import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,form } from 'react-bootstrap';
import './SignUp.css';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




 const SignUp=(props)=>{
    const [startDate, setStartDate] = useState(new Date());
//     const [formData, setForm] = useState({
//         firstname:'',
//         lastname: '',
//         email: '',
//         password: '',
//       });
//     const [firstName,setFirstName]=useState('');
//     const [lastName,setLastName]=useState('');
//     const [emailId,setEmailId]=useState('');
//     const [password,setPassword]=useState('');
    
// //       const { fname, lname, email, password} = formData;
    
//       const onSubmit = async (e) => {
//         e.preventDefault();
//         setFirstName('');
//         setLastName('');
//         setEmailId('');
//         setPassword('');
//       };
    return(
        <div className="main_div">
            <section>
                <div className="jumbotron">
                    <div className="container text-center">
                        <h1 className="display-4">COVAXSYS</h1>
                    </div>
                </div>
            </section>

            <section>
                <div className="card col-xl-6 col-12">
                    <div className="card-body text-center">
                        <h5 className="card-title">Schedule an Appointment</h5>
                    </div>
                    <div className="loginForm col-xl-9 col-12 text-center">
                        <form>
                            <div class="text-left form-group">
                                <label for="inputFirstName">FirstName</label>
                                <input type="text" class="form-control" id="inputFirstName" required></input>
                            </div>
                            <div class="text-left form-group">
                                <label for="inputLastName">LastName</label>
                                <input type="text" class="form-control" id="inputLastName" required></input>
                            </div>
                            <div className="text-left form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            </div>
                            <div className="text-left form-group">
                                <label for="exampleInputPassword1">Set Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" required></input>
                            </div>
                            <div className="text-left form-group">
                                <label for="exampleAppointmentDate">Select Appointment Date</label>
                                <div>
                                <input class="form-control" type="date" id="example-date-input"></input>
                                </div>
                            </div>
                            <div className="text-left form-group">
                                <label for="exampleVaccineCenter">Select Vaccination Center</label>
                                <div>
                                <select className="form-select form-control" aria-label="Default select example">
                                <option value="grapefruit" selected>Grapefruit</option>
                                <option value="lime">Lime</option>
                                <option selected value="coconut">Coconut</option>
                                <option value="mango">Mango</option>
                            </select>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign up</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default SignUp;