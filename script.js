function validate() {
	/*Validation for First & Last Names*/
	if(document.productReturn.firstName.value.length < 2) {
		alert("Please enter your name");
	} else {
		alert("First name is filled");
	}

	if(document.productReturn.lastName.value.length < 2) {
		alert("Please enter your last name");
	} else {
		alert("Last name is filled");
	}
	
	/*Validation for Email*/
	var email = document.getElementById("email");
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	
	if(!reg.test(email.value)) {
		alert("Invalid email address");
		return false;
	} else {
		alert("Email is valid");
	}
	
	/*Validation for Password*/
	if(document.productReturn.pwd.value.length<8) {
		alert("Password must contain at least 8 characters");
		return false;
	} else {
		alert("Password is filled");
	}
	
	/*Validation for Address*/
	if(document.productReturn.address.value.length<1) {
		alert("Please enter your address");
		return false;
	} else {
		alert("Address is filled");
	}
	
	/*Validation for City*/
	var letters = /^[A-Za-z]+$/;
	
	if (letters.length<1) {
		alert("City must contain letters only.");
	} else {
		alert("City is filled");
	}
	
	/*Validation for State*/
	if (document.productReturn.state.value==="") {
		alert("Please select a state");
	} else {
		alert("State Ok");
	}
	
	/*Validation for ZIP*/
 	var zipCode = /^[0-9]{5}$/;
	
	if (zipCode) {
		alert("Valid ZIP Code");
	} else {
		alert("Please enter a valid ZIP code");
    	}
		
	/*Validation for Radio Buttons*/
	var product = document.getElementsByName("product");
	var productValue = false;
	
	for (var i = 0; i < product.length; i++) {
		if (product[i].checked === true) {
			productValue = true;
		}
	} if (!productValue) {
		alert("Please select the item you are returning.");
		return false;
	}

	/*Validation for Text Area*/
	if(document.productReturn.reasonForReturn.value.length<1) {
		alert("You must explain the reason for product return");
	} else {
		alert("Reason for return is filled.");
	}
	
	/*Validation for Checkbox*/
	if (this.checkbox.checked === false) {
		alert("You must agree to the terms first.");
	} else {
		alert("Agreed to terms.");
	}	

}