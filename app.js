
const allBtn = document.getElementsByClassName('add-btn');
let count = 0;

for (const btn of allBtn) {
  btn.addEventListener('click', function (event) {



    const cartCount = document.getElementById('cart-count').innerText;
    count = parseInt(cartCount) + 1;
    // set cart count
    setInnerText('cart-count', count);

    const location = event.target.parentNode.childNodes[1].innerText;
    const p = document.createElement('p');
    p.innerText = location;

    const price = parseInt(event.target.parentNode.childNodes[3].childNodes[1].innerText);

    const budget = parseInt(document.getElementById('budget').innerText);
    const cost = budget - price;
    if (cost < 0) {
      alert('Not Sufficient Amount in your budget')
      return;
    }
    event.target.style.backgroundColor = '#EBEBE4';
    event.target.setAttribute('disabled', true);
    setInnerText('budget', cost);


    const p2 = document.createElement('p');
    p2.innerText = price;

    const li = document.createElement('li');
    li.classList.add('flex', 'gap-3');
    li.appendChild(p);
    li.appendChild(p2);

    const cartContainer = document.getElementById('selected-place-container');
    cartContainer.appendChild(li);


    getTotalAmount(price);
    grandTotal();

  })
}

function setInnerText(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getTotalAmount(price) {
  const total = parseInt(document.getElementById('total-cost').innerText);
  const updateTotal = total + price;
  setInnerText('total-cost', updateTotal)
}

function grandTotal(category) {
  const total = parseInt(document.getElementById('total-cost').innerText);
  setInnerText('grand-total', total)
  if (total <= 0) {
    alert('Please add a location');
    return;
  }
  else if (category === 'bus') {
    setInnerText('grand-total', total + 100);
  }
  else if (category === 'train') {

    setInnerText('grand-total', total - 200);

  }
  else if (category === 'flight') {
    setInnerText('grand-total', total + 500);
  }
  else {
    setInnerText('grand-total', total);
  }

}

function budgetCost(price) {

}