import 'bootstrap/dist/css/bootstrap.min.css';
import './MyAccount.css';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MedicalData from './MedicalData';


const MyAccount = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
            <div>
                <div className="jumbotron">
                    <h5 className="card-title">PERSONAL DETAILS</h5>
                </div>
                <div className="form_div">
                    <form>
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="row">
                                    <div className="input_div text-left form-group col-xl-6">
                                        <div className="nested_input_div">
                                            <label for="inputFirstName" className="col-6 col-form-label">FirstName</label>
                                            <div className="col-12">
                                                <input type="text" className="form-control" id="inputFirstName" required></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-left form-group col-xl-6 input_div">
                                        <div className="nested_input_div">
                                            <label for="inputFirstName" className="col-6 col-form-label">LastName</label>
                                            <div className="col-12">
                                                <input type="text" class="form-control" id="inputFirstName" required></input>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="text-left form-group col-xl-6 input_div">
                                        <div className="nested_input_div">
                                            <label for="inputFirstName" className="col-6 col-form-label">Gender</label>
                                            <div class="form-check">
                                                <div className="col-12">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                                                </div>
                                                <label class="form-check-label" for="flexRadioDefault1" className="col-4">
                                                    Male
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <div className="col-12">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                                                </div>
                                                <label class="form-check-label" for="flexRadioDefault2" className="col-4">
                                                    Female
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-left form-group col-xl-6 input_div">
                                        <div className="text-left form-group">
                                            <div className="nested_input_div">
                                                <label for="exampleAppointmentDate" className="col-6 col-form-label">Date Of Birth</label>
                                                <div className="col-12">
                                                    <input class="form-control" type="date" id="example-date-input"></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="text-left form-group col-xl-6 input_div">
                                        <div className="nested_input_div">
                                            <label for="exampleInputEmail1" className="col-6 col-form-label">Email address</label>
                                            <div className="col-12">
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-left form-group col-xl-6 input_div">
                                        <div className="nested_input_div">
                                            <label for="example-tel-input" className="col-6 col-form-label">Telephone</label>
                                            <div class="col-12">
                                                <input class="form-control" type="tel" id="example-tel-input"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="text-left form-group col-xl-6 input_div">
                                        <div className="nested_input_div">
                                            <label for="inputFirstName" className="col-6 col-form-label">Appt Number</label>
                                            <div className="col-12">
                                                <input type="text" className="form-control" id="inputFirstName" required></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-left form-group col-xl-6 input_div">
                                        <div className="nested_input_div">
                                            <label for="inputFirstName" className="col-6 col-form-label">Street</label>
                                            <div className="col-12">
                                                <input type="text" className="form-control" id="inputFirstName" required></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="text-left form-group col-xl-6 input_div">
                                        <div className="nested_input_div">
                                            <label for="inputFirstName" className="col-6 col-form-label">City</label>
                                            <div className="col-12">
                                                <input type="text" className="form-control" id="inputFirstName" required></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-left form-group col-xl-6 input_div">
                                        <div className="nested_input_div">
                                            <label for="inputFirstName" className="col-6 col-form-label">Postal Code</label>
                                            <div className="col-12">
                                                <input type="text" className="form-control" id="inputFirstName" required></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 user_img_div text-right">
                                <img src="images/user.png" className=" img-fluid" />
                            </div>
                        </div>
                        <MedicalData />
                        <div className="save_btn">
                        <button type="button" class="btn btn-outline-success">Save</button>
                        </div>
                    </form>
                </div>
                
            </div>
    );
}
export default MyAccount;  