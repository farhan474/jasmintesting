describe("step3 test (with setup and tear-down)", function () {

	it('should create a x value for dataset in payment table that deletes itself when clicked', function () {
		let currentpayment = { billAmt: '150' , tipAmt: '75', tipPercent: 50 }
		appendPaymentTable(currentpayment);
		let paymenteToedit = document.getElementById("payment0");
		appendDeleteBtn(paymenteToedit);
		let payemntTds = document.querySelectorAll('#paymentTable tbody tr td');
		expect(payemntTds[3].innerText).toEqual('X')
		payemntTds[3].click();
		let afterClick = document.querySelectorAll('#paymentTable tbody tr td');
		expect(afterClick.length).toEqual(0);
	});

});
