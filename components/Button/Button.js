// Component Styles
import "./Button.css"
// import {SubmitToLocalStorage} from "../../Events/submitToDB.js";

const Button = (props) => {
	return (
		<button onClick={props.onClick} className="button">{`${props.children}`}</button>
	)
}

function disableButton(props) {
	return (
		<button disabled className="button">{`${props.children}`}</button>
	)
}

export {Button}