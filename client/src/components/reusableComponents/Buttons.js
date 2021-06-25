import 'bootstrap/dist/css/bootstrap.min.css';
import './Buttons.css';

const Buttons = () => {
    return (
        <div>
            <div className="button_div">
                <button type="button" class="btn btn-primary btn-lg">Yes</button>
                <button type="button" class="btn btn-secondary btn-lg">No</button>
            </div>
        </div>
    );
}
export default Buttons;