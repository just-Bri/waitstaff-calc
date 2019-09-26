// pseudo code
// user inputs data
// user hits submit
// get input(base meal price, tax rate, and tip %)

// run calculations
// display results in Customer Charges
// add tip/meal count/avg tip to db
// display results in My Earnings info

// code lives here until I break it up into 'modules'

// declare vars
let inputBasePrice = document.getElementById('input-base-price');
let inputTaxRate = document.getElementById('input-tax-rate');
let inputTipPercent = document.getElementById('input-tip-percent');

let cusomterSubTotal = inputBasePrice * inputTaxRate;
let customerTip = cusomterSubTotal * inputTipPercent;
let customerTotal = cusomterSubTotal + customerTip;

let earningTip = 0;
let earningCount = 0;
let earningAverage = 0;