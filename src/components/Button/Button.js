import "./Button.css"
import {SubmitToLocalStorage} from "../../Events/submitToDB.js";

const Button = (props) => {
	return (
		<button onClick={() => SubmitToLocalStorage("spogebob")} className="nimbus-button">{`${props.Content}`}</button>
		)
}

export {Button}