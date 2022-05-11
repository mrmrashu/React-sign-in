const SubmitToLocalStorage = (data) => {
	// Get the existing data in the localStorage
	let existing = localStorage.getItem("namesDB");
	
	// If found Split the String by (,)
	// or if it doesn't exist assign it to an empty array
	existing = existing ? existing.split(',') : [];

	// Push the new data to localstorage
	existing.push(data);

	// Save back to localStorage
	localStorage.setItem("namesDB", existing.toString());
	console.log(existing);
}

export {SubmitToLocalStorage}

// UseState, ReactHookform (react-hook-form) Library