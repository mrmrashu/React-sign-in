// Component Styles
import "./text-box.css"
const TextBox = (props) => {
	return (
			<input 
				onChange = {props.onChange}
				onKeyDown = {props.onKeyDown}
				value = {props.value} 
				type={props.type}
				className="workonfocus native-textbox"/>
		)
}

const FocusMe = () => {
	console.dir(TextBox.call);
}
export {FocusMe};
export {TextBox};