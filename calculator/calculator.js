window.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById("calc-form");
	if (form) {
		setupIntialValues();
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +(document.getElementById("loan-amount").value),
		years: +(document.getElementById("loan-years").value),
		rate: +(document.getElementById("loan-rate").value),
	}
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {

	const loanAmount = document.getElementById("loan-amount")
	const loanYears = document.getElementById("loan-years")
	const loanRate = document.getElementById("loan-rate")

	loanAmount.value = 0;
	loanRate.value = 0;
	loanYears.value = 0;

	update();
}


// Get the current values from the UI
// Update the monthly payment
function update() {
	const currentUI = getCurrentUIValues();
	updateMonthly(currentUI);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	const monthlyrate = values.rate / 1200;
	const monthlyPayment = ((values.amount * monthlyrate) / (1 - (1 + monthlyrate) ** (-values.years * 12))).toFixed(2);
	if (isNaN(monthlyPayment)) { return 0;}
	else { return monthlyPayment; }
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	const monthlyPaymentUI = document.getElementById("monthly-payment");
	const currentMonthly = calculateMonthlyPayment(monthly);
	monthlyPaymentUI.innerText = currentMonthly;

}
