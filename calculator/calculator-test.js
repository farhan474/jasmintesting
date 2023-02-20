
it('should calculate the monthly rate correctly', function () {
  const values = {
	amount: 100,
	years: 10, 
	rate: 1,
  }
  expect(calculateMonthlyPayment(values)).toEqual('0.88')
});
it('should calculate the monthly rate correctly', function () {
	const values = {
	  amount: 100000,
	  years: 10, 
	  rate: 5,
	}
	expect(calculateMonthlyPayment(values)).toEqual('1060.66')
  });

it("should return a result with 2 decimal places", function() {
  	const values = {
	  amount: 100113,
	  years: 100, 
	  rate: 5,
	}
	expect(calculateMonthlyPayment(values)).toEqual('420.00')
});

it("should be able to handle super high rates", function() {
	const values = {
		amount: 100113,
		years: 100, 
		rate: 99,
	}
	expect(calculateMonthlyPayment(values)).toEqual('8259.32')
});


