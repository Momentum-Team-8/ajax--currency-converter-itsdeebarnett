const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

const URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=757feee5e2d8f3d429f3ebfbbdd9c251'

const root = document.querySelector('.container')


let header = document.createElement('div')

// header.innerHTML = <h1>${'Currency Convertor Plus'}</h1>
//debug line 44 still an error 



//wow--I suck 

let currencyFrom = document.getElementById('currency-name')



fetch(URL)
  .then(res => res.json())
  .then(data => { 
    console.log(data)
  let h2 = document.createElement('h2')
  h2.innerHTML = data.json
  
  return (data)
  

  for (let currency of currencies) {
    let currency_select= document.createElement('Selection')
    

  }
  })