// const inputs = document.querySelectorAll(".input");

// function focusFunc() {
//   let parent = this.parentNode;
//   parent.classList.add("focus");
// }

// function blurFunc() {
//   let parent = this.parentNode;
//   if (this.value == "") {
//     parent.classList.remove("focus");
//   }
// }

// inputs.forEach((input) => {
//   input.addEventListener("focus", focusFunc);
//   input.addEventListener("blur", blurFunc);
// });





const scriptURL = 'https://script.google.com/macros/s/AKfycbzl1wwUtkBEKPHioTLwIPkTqrnuwkpYxoQLFhEy2iR-XM2XlNVD3zSGkiE-dwVuV7ke/exec'
const form = document.forms['registrationForm']
const registerButton = document.getElementById('registerButton');


form.addEventListener('submit', e => {
	e.preventDefault();
 
  
  
	
	registerButton.disabled = true; // Disable the button while waiting for response

  console.log('reached')

	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => {
      console.log('reached1')
			
			registerButton.disabled = false; // Re-enable the button
			if (response.ok) {
				console.log('Success!', response);
			
				form.reset();
				setTimeout(() => {
					showAlert("Success! We will connect with you soon.")
				},2000);
			

			} else {
				console.error('Error!', response.statusText);
				showAlert('please try again ')
			
				registerButton.disabled = false; // Re-enable the button
				// You might want to provide user feedback here
			}
		})
		.catch(error => {
			console.error('Error!', error.message);
			// You might want to provide user feedback here
		});
  
});




	
	function showAlert(a) {
    alert(a);
}
