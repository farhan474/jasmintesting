describe("payments test (with setup and tear-down)", function() {
	beforeEach(function () {
		billAmtInput.value = 100;
		tipAmtInput.value = 20;
		
	});

it('should return bill amount, tip amount and tip percentage as a object using current inputs on createCurPayment()', function () {
   let amount = createCurPayment();
   expect(amount.billAmt).toEqual('100');
   expect(amount.tipAmt).toEqual('20');
   expect(amount.tipPercent).toEqual(20);
});

it('should should update the summary table using the all payement data updateSummary()', function () {
	allPayments = { payment0: {billAmt: '50' , tipAmt: '10', tipPercent: 20} }
    updateSummary();
	expect(summaryTds[0].innerHTML).toEqual('$50');
	expect(summaryTds[1].innerHTML).toEqual('$10');
	expect(summaryTds[2].innerHTML).toEqual('20%');
});

it('should change payemnt table when appendPaymentTable() is given a current payment', function () {
    let currentpayment = { billAmt: '150' , tipAmt: '75', tipPercent: 50 }
	appendPaymentTable(currentpayment);
	let paymentTds = document.querySelectorAll('#paymentTable tbody tr td');
	expect(paymentTds[0].innerHTML).toEqual('$150');
	expect(paymentTds[1].innerHTML).toEqual('$75');
	expect(paymentTds[2].innerHTML).toEqual('50%');

});

it('should increase the payment id by one and set billAmtInput and tipAmtInput to empty string on submitPaymentInfo(evt)', function () {

	submitPaymentInfo();
	expect(paymentId).toEqual(1);
	 expect(billAmtInput.value).toEqual('');
	 expect(tipAmtInput.value).toEqual('');

});
afterEach(function(){
		billAmtInput.value = null;
		tipAmtInput.value = null;
		allPayments= {};
		paymentId = 0;

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