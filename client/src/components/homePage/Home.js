import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <div className="jumbotron">
                <h5 className="card-title">VACCINATION (COVID 19) IN MONTREAL</h5>
            </div>
            <div className="vaccine_div">
                <img src="images/corona.jpg" />
            </div>
            <div className="jumbotron vaccine_title">
                <h5 className="card-title">ABOUT VACCINATION</h5>
            </div>
            <div className="row">
                <div className="col-xl-8">
                    <p className="p-3">COVID-19 vaccination is primarily aimed at reducing COVID-19 hospital admissions and deaths among people who are most at risk.</p>
                    <p className="p-3">Vaccination should also help maintain health and social services activities and a return to a normal life as soon as possible.</p>
                    <p className="p-3">Numerous studies carried out in Québec and elsewhere have shown that vaccination is highly effective in preventing COVID-19, hospital admissions and deaths both after the first dose and after 2 doses.</p>
                    <p className="p-3">Studies are underway to determine whether people who have been vaccinated no longer spread the infection and whether the usual protective measures (physical distancing, wearing a mask and handwashing) can be relaxed.</p>
                </div>
                <div className="col-xl-4">
                    <img src="/images/vaccination.png" className="img-fluid img-thumbnail" />
                </div>
            </div>
            <div className="jumbotron vaccine_title">
                <h5 className="card-title">SAFETY OF VACCINES</h5>
            </div>
            <div className="row">
                <div className="col-xl-4">
                    <img src="/images/image.jpg" className="img-fluid img-thumbnail" />
                </div>
                <div className="col-xl-8">
                    <p className="p-3">The COVID‑19 vaccines approved by Health Canada are safe. The vaccines were tested on a large number of people and have met all the requirements for approval.</p>
                    <p className="p-3">COVID‑19 vaccines must meet the same quality and safety standards as any other vaccine used in Canada.</p>
                    <p className="p-3">Once a vaccine has been approved, its safety is continuously monitored in order to detect very rare adverse reactions, if any. Canada and Québec have a very comprehensive system to ensure the safety of vaccines after they have been brought to market. Any unusual adverse effects reported are examined by experts to quickly identify any safety problems.</p>
                    <p className="p-3">It is important to get vaccinated when it is your turn. All the available vaccines offer good protection against COVID-19 hospital admissions and deaths.</p>
                </div>
            </div>
            <div class="appointment_div">
                <NavLink to="/signup">
                    <button class="btn btn-primary" type="button" >Book an appointment for vaccination</button>
                </NavLink>
            </div>
        </div>
    );
}
export default Home;