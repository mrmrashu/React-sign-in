// Global Dependencies
import React, {useState} from "react"
import ReactDOM from "react-dom"

// import Components
// import {TextBox} from "./components/text-box/text-box.js";
import {Titles} from "./components/Titles/Titles.js";
import {Button} from "./components/Button/Button.js";
import {DialogBox} from "./components/dialog-box/dialog-box.js";
import {Separator} from "./components/Separator/separator.js";

// Higher Order Components
import {TitleTextBox} from "./components/HOC/title-textbox.js"
// import Events
// import {FocusMe} from "./components/text-box/text-box.js";


const Form = () => {
	
	let Objkeys = Object.keys(values);
	// the useState hook to manage state of the components inside <Form/>
	const [values, setValues] = useState(() => {
		return {
			// default values
			firstName: {
				text: "",
				type: "text",
				title: "First Name"
			},
			lastName: {
				text: "",
				type: "text",
				title: "Last Name"
			},
			userName: {
				text: "",
				type: "text",
				title: "Username",
			},
			pwd: {
				text: "",
				type: "password",
				title: "Password"
			}
		}
	});

	// State Management for First Name (component)
	const setFName = (e) => {
		setValues(val => {
			return {
			 ...values,
			 firstName : { 
				text : e.target.value,
				type : "text",
				title: "First Name"
			}}
		})
	}
	
	// State Management for Last Name (component)
	const setLName = (e) => {
		setValues(val => {
			return {
			...values,
			lastName : {
				text : e.target.value,
				type : "text",
				title : "Last Name"
			}}
		})
	}

	// State Management for Username (component)
	const setUsername = (e) => {
		setValues(val => {
			return {
			...values, 
			userName : {
				text : e.target.value,
				type : "text",
				title : "Username"
			}}
		})
	}
	
	// State Management for Password (component)
	const setPwd = (e) => {
		setValues(val => {
			return {
			...values, 
			pwd : {
				text : e.target.values,
				type : "password",
				title : "Password"
			}}
		})
	}

	// Print the {object} (values) to the console
	const showValues = () => {
		console.log("The Values are : ", values)
	}

	// reset the state object (values)
	const resetForm = () => {
		showValues();
		console.log("resetting...")
		setValues(val => {
			return {
			firstName: {
				text: "",
				type: "text",
				title: "First Name"
			},
			lastName: {
				text: "",
				type: "text",
				title: "Last Name"
			},
			userName: {
				text: "",
				type: "text",
				title: "Username"
			},
			pwd: {
				text: "",
				type: "password",
				title: "Password"
			}
		}
		})
	}

	/*const TitleBoxes = Objkeys.map((el) => {
		<TitleTextBox><TitleTextBox>
	})*/
	return (
		<>
			<DialogBox className="DialogBox">
				<TitleTextBox onChange={setFName} value={values.firstName.text} type={values.firstName.type} title={values.firstName.title}></TitleTextBox>
				<TitleTextBox onChange={setLName} value={values.lastName.text} type={values.lastName.type} title={values.lastName.title}></TitleTextBox>
				<TitleTextBox onChange={setUsername} value={values.userName.text} type={values.userName.type} title={values.userName.title}></TitleTextBox>
				<TitleTextBox onChange={setPwd} value={values.pwd.text} type={values.pwd.type} title={values.pwd.title}></TitleTextBox>
				<Separator></Separator>
				<div Style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 20px;">
					<Button onClick={resetForm} disabled>Reset</Button>
					<Button onClick={showValues}>Check Values</Button>
				</div>
			</DialogBox>
			<DialogBox>
				<Titles>{`Hi!, ${values.firstName.text} ${values.lastName.text}, @${values.userName.text} is your unique username`}</Titles>
			</DialogBox>
		</>
		)
}

// After useRef()
/*const Display() = {
	return (
			<DialogBox>
				<Titles>{`Hi!, ${values.firstName} ${values.lastName}, @${values.userName} is your unique username`}</Titles>
			</DialogBox>
		)
}*/


/*const HookApp = () => {
	const [state, setState] = useState({count : 4, theme : '...'}) 
	const count = state.count
	const theme = state.theme
	function decrementCount () {
		setState(prevState => {
			console.log(prevState);
			return { ...prevState, count : prevState.count - 1}
		})
	}

	function incrementCount () {
		setState(prevState => {
			let newState = prevState.count + 1;
			return { ...prevState, count : newState}
		})
	}

	function checkState () {
		console.log(state)
	}

	return (
		<DialogBox>
			<Button onClick={decrementCount}>Decrement</Button>
			<Titles>{count}</Titles>
			<Titles>{theme}</Titles>
			<Button onClick={incrementCount}>Increment</Button>
			<Separator></Separator>
			<Button onClick={checkState}>Check State</Button>
		</DialogBox>
	)
}*/

// ReactDOM.render(<HookApp></HookApp> , document.getElementById("hook"));
ReactDOM.render(<Form></Form> , document.getElementById('root'));
