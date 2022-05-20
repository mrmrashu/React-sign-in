// Importing Styles
import "./HOC-Styles.css";
// Importing Components
import {TextBox} from "../text-box/text-box.js";
import {Titles} from "../Titles/Titles.js";
const TitleTextBox = (props) => {
	return (
			<div className="TitleTextBox">
				<Titles>{`${props.title}`}</Titles>
				<TextBox value={props.value} onChange={props.onChange} type={`${props.type}`}/>
			</div>
		)
}
console.log(TextBox.FocusMe)

export {TitleTextBox};