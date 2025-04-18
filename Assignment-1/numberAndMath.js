let currencyCode = 'USD';

function formatCurrency(amount, currencyCode) {
  let symbol = '';
  if (currencyCode === 'USD') symbol = '$';
  else if (currencyCode === 'EUR') symbol = '€';
  else if (currencyCode === 'INR') symbol = '₹';
  else return 'Unsupported currency';

  amount = +amount;
  let parts = amount.toFixed(2).split('.');
  let num = parts[0];
  let decimal = parts[1];
  let result = '';

  if (currencyCode === 'INR') {
    if (num.length > 3) {
      let lastThree = num.slice(-3);
      let rest = num.slice(0, -3);
      let formatted = '';
      for (let i = rest.length - 1; i >= 0; i--) {
        formatted = rest[i] + formatted;
        if ((rest.length - i) % 2 === 0 && i !== 0) {
          formatted = ',' + formatted;
        }
      }
      result = formatted + ',' + lastThree;
    } else {
      result = num;
    }
  } else {
    let count = 0;
    for (let i = num.length - 1; i >= 0; i--) {
      result = num[i] + result;
      count++;
      if (count % 3 === 0 && i !== 0) {
        result = ',' + result;
      }
    }
  }

  return symbol + result + '.' + decimal;
}
