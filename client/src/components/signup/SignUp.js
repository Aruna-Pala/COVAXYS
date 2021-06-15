import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,form } from 'react-bootstrap';
import './SignUp.css';
import React, { useState } from 'react';





 const SignUp=(props)=>{
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
        <div>
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
                        <h5 className="card-title">Sign Up Here</h5>
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
                            <p>Already a member? <a>Log in</a></p>
                            <button type="submit" class="btn btn-primary">Sign up</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default SignUp;