import 'bootstrap/dist/css/bootstrap.min.css';
import './MedicalData.css';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Buttons from '../reusableComponents/Buttons';

const MedicalData = () => {
    return (
        <div>
            <div className="jumbotron medical_data_div">
                <h5 className="card-title">MEDICAL DETAILS</h5>
            </div>
            <div className="row medical_question_div">
                <div className="col-xl-9">
                    <div>
                        <h6>1. Are you in self-isolation or quarantine?</h6>
                        <ul>
                            <li><p>IF YES: Make sure that the chosen appointment is after the end of your self-isolation or quarantine period.</p></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-3"><Buttons /></div>
            </div>
            <div className="row medical_question_div">
                <div className="col-xl-9">
                    <div>
                        <h6>2. Are you in the vaccine priority group?</h6>
                        <ul>
                            <li><p>Adults aged 18 +.</p></li>
                            <li><p>A person 18 years of age or older who works in an environment identified as high risk by public health. Proof of employment will be required on-site.</p></li>
                            <li><p> A healthcare professional in a private clinic</p></li>
                            <li><p>A person 18 years of age or older with a motor, intellectual, speech, language, visual, auditory, or other sensory disability or an autism spectrum disorder or his caregiver.</p></li>
                        </ul>
                        
                    </div>
                </div>
                <div className="col-xl-3"><Buttons /></div>
            </div>
            <div className="row medical_question_div">
            <div className="col-xl-9">
                <div>
                    <h6>3. Do you have allergies to medications, food, a vaccine component, or latex?</h6>
                </div>
            </div>
            <div className="col-xl-3"><Buttons /></div>
        </div>
        <div className="row medical_question_div">
            <div className="col-xl-9">
                <div>
                    <h6>4. Do you have a long-term health problem with heart, lung, kidney, or metabolic disease
                    (e.g., diabetes), asthma, a blood disorder, no spleen, complement component deficiency,
                    a cochlear implant, or a spinal fluid leak? Are you on long-term aspirin therapy?</h6>
                </div>
            </div>
            <div className="col-xl-3"><Buttons /></div>
        </div>
        <div className="row medical_question_div">
                <div className="col-xl-9">
                    <div>
                        <h6>5. Have you ever had a serious reaction after receiving a vaccination?</h6>
                    </div>
                </div>
                <div className="col-xl-3"><Buttons /></div>
            </div>
            <div className="row medical_question_div">
                <div className="col-xl-9">
                    <div>
                        <h6>6. In the past 3 months, have you taken medications that affect your immune system, such
                        as prednisone, other steroids, or anticancer drugs; drugs for the treatment of rheumatoid
                        arthritis, Crohn’s disease, or psoriasis; or have you had radiation treatments?</h6>
                    </div>
                </div>
                <div className="col-xl-3"><Buttons /></div>
            </div>
            <div className="row medical_question_div">
                <div className="col-xl-9">
                    <div>
                        <h6>7. During the past year, have you received a transfusion of blood or blood products,
                        or been given immune (gamma) globulin or an antiviral drug?</h6>
                    </div>
                </div>
                <div className="col-xl-3"><Buttons /></div>
            </div>
            <div className="checkbox_div">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault">
            I affirm and certify that all the information and answers to questions herein are
            complete, true and correct to the best of my knowledge and belief.
            </label>
          </div>
            </div>
        </div>
    );
}
export default MedicalData;