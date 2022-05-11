// Global Dependencies
import React from "react"
import ReactDOM from "react-dom"

// import Components
import {TextBox} from "./components/text-box/text-box.js";
import {Button} from "./components/Button/Button.js";
// import {Titles} from "./components/Titles/Titles.js";
// import {DialogBox} from "./components/dialog-box/dialog-box.js";

// import Events

const Container = () => {
	let propeller = () => {
		console.log("propelling...");
	}	
	return (
			<div className="DialogBox">
			<h2>Enter Your Name to Continue</h2>
				<TextBox/>
				<Button onClick={propeller} Content="continue"></Button>
			</div>
		)
}

ReactDOM.render(<Container/>, document.getElementById('root'));