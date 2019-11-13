// pseudo code
// user inputs data
// user hits submit
// get input(base meal price, tax rate, and tip %)

// run calculations
// display results in Customer Charges
// add tip/meal count/avg tip to db
// display results in My Earnings info

// code lives here until I break it up into 'modules'

// Listen for submit
document.getElementById('meal-form').addEventListener('click', function (e) {
  e.preventDefault();
  e.stopImmediatePropagation();

  // alert('submitted');
  doMathStuff();
});

function doMathStuff() {
  // declare vars
  let inputBasePrice = (parseFloat(document.getElementById('input-base-price').value));
  let inputTaxRate = (parseFloat(document.getElementById('input-tax-rate').value) * 0.01);
  let inputTipPercent = (parseFloat(document.getElementById('input-tip-percent').value) * 0.01);

  let customerSubtotal = document.getElementById('customer-subtotal');
  let customerTip = document.getElementById('customer-tip');
  let customerTotal = document.getElementById('customer-total');
  // console.log(customerTotal);
  // console.log('sub: ' + customerSubtotal.textContent);

  customerSubtotal.textContent = `${inputBasePrice = inputBasePrice * inputTaxRate}`;
  customerTip.textContent = `${inputBasePrice * inputTipPercent}`;
  customerTotal.textContent = `${customerSubtotal + (inputBasePrice * inputTipPercent)}`;
}
