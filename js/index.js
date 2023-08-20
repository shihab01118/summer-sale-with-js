// function to add product to the cart and get the total price
let totalPrice = 0;
function addToCart(target) {
    const selectedProductContainer = document.getElementById('cart');
    const productName = target.childNodes[3].childNodes[3].innerText;
    const count = selectedProductContainer.childElementCount;

    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${productName}`;
    selectedProductContainer.appendChild(p);

    const productPrice = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    totalPrice = parseFloat(totalPrice) + parseFloat(productPrice);
    const totalPriceTwoDecimal = totalPrice.toFixed(2);

    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText = totalPriceTwoDecimal;

    if (totalPriceTwoDecimal > 0) {
        document.getElementById('btn-purchase').removeAttribute('disabled');
    }

    const buttonApply = document.getElementById('btn-apply');
    if (totalPriceTwoDecimal >= 200) {
        buttonApply.removeAttribute('disabled');
    }

    document.getElementById('total').innerText = totalPriceTwoDecimal;
}

// function to get coupon code from customer and get the grand total after giving discount
function giveDiscount() {
     const totalPrice = document.getElementById('total-price').innerText;
     const totalPriceValue = parseFloat(totalPrice);
     const totalPriceTwoDecimal = totalPriceValue.toFixed(2);
     
    const couponFieldValue = document.getElementById('coupon-field').value;
    const discountElement = document.getElementById('discount');
    if (couponFieldValue === 'SELL200') {
        const discount = (totalPriceTwoDecimal * 20) / 100;
        discountElement.innerText = discount.toFixed(2);
    }
    else {
        alert('Invalid Coupon Code');
        return;
    }

    const discountPriceString = document.getElementById('discount').innerText;
    const discountPrice = parseFloat(discountPriceString)
    const grandTotal = totalPriceTwoDecimal - discountPrice;
    const grandTotalTwoDecimal = grandTotal.toFixed(2);
    document.getElementById('total').innerText = grandTotalTwoDecimal;
}

// event listener to reload page
document.getElementById('btn-reload').addEventListener('click', function() {
    location.reload();
})
