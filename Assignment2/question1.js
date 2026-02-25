
const testResults = [
{ testId: 'TC001', name: 'Login Test', status: 'passed', duration: 2500 },
{ testId: 'TC002', name: 'Search Product', status: 'failed', duration: 3200 },
{ testId: 'TC003', name: 'Add to Cart', status: 'passed', duration: 1800 },
{ testId: 'TC004', name: 'Checkout', status: 'skipped', duration: 0 },
{ testId: 'TC005', name: 'Payment', status: 'failed', duration: 4500 },
{ testId: 'TC006', name: 'Order Confirmation', status: 'passed', duration: 2100 }
];




//Create an array of test names that took more than 2000ms







///Transform the array t include a new property isSlowTest (true if duration>3000 ms)