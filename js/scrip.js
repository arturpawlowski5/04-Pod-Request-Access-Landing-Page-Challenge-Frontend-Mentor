const form = document.getElementById("form-subscribe");
const formMessage_div = document.getElementById("info-message");
const inputField = document.getElementById("email");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	formMessage_div.style.display = "block";
	formMessage_div.innerText = "";

	let messages = ["Thank You! Please check your email", "Oops! Please add your email", "Oops! That doesn't look like an email address"];

	let validRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+))/;

	if (form.email.value === "") {
		formMessage_div.innerText = messages[1];
		formMessage_div.classList.remove("validate-msg");
		formMessage_div.classList.add("error-msg");
		inputField.classList.add("error-border");
	} else if (form.email.value.match(validRegex)) {
		formMessage_div.classList.add("validate-msg");
		inputField.classList.remove("error-border");
		formMessage_div.classList.remove("error-msg");
		formMessage_div.innerText = messages[0];
		form.email.value = "";
	} else {
		formMessage_div.classList.remove("validate-msg");
		formMessage_div.classList.add("error-msg");
		inputField.classList.add("error-border");
		formMessage_div.innerText = messages[2];
	}
});

/*
function validateEmail(inputText) {
	var emailPress = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (!inputText.match(emailPress)) {
		var errorMail = document.getElementById("error");
		errorMail.style.display = "block";
		return false;
	}
	return true;
}
*/

/*
const error = document.getElementById("email-error");

const isEmail = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const validate = () => {
	const inputEmail = document.getElementById("email").value;
	if (isEmail(inputEmail)) {
		error.classList.remove("error-active");
	} else {
		error.classList.add("error-active");
	}
};

document.getElementById("submit").addEventListener("click", (e) => {
	e.preventDefault();
	validate();
});
*/
