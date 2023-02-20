describe("helpers test (with setup and tear-down)", function () {

	beforeEach(function () {
		billAmtInput.value = 100;
		tipAmtInput.value = 20;

	});

	it('should calculate the total on sumPaymentTotal()', function () {

		submitPaymentInfo();
		expect(sumPaymentTotal('tipPercent')).toEqual(20);

	});

	it('should calculate the total on sumPaymentTotal()', function () {

		submitPaymentInfo();
		expect(sumPaymentTotal('tipAmt')).toEqual(20);

	});

	it('should calculate the total on sumPaymentTotal()', function () {

		submitPaymentInfo();
		expect(sumPaymentTotal('billAmt')).toEqual(100);

	});

	it('should calcualte tip percentage given the bill and tip on calculateTipPercent()', function () {
		let bill = billAmtInput.value;
		let tip = tipAmtInput.value;

		expect(calculateTipPercent(Number(bill), Number(tip))).toEqual(20);
	});

	it('should add the value to the table appendTd(tr, value)', function () {
		let newElememt = document.createElement('tr');
		appendTd(newElememt, "works");

		expect(newElememt.innerText).toEqual("works");
	});

	afterEach(function () {
		billAmtInput.value = null;
		tipAmtInput.value = null;
		allPayments = {};

		let payTable = document.getElementById("paymentTable");
		let element = payTable.getElementsByTagName("td")
		for (index = element.length - 1; index >= 0; index--) {
			element[index].parentNode.removeChild(element[index]);
		}

		let shiftTable = document.getElementById("summaryTable");
		let element2 = shiftTable.getElementsByTagName("td")
		for (index = element2.length - 1; index >= 0; index--) {
			element2[index].parentNode.removeChild(element2[index]);
		}



	})
});
