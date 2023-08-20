let totalPrice = 0;
function handleClick(target) {
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

    
}

function getCouponCode() {
     const totalPrice = document.getElementById('total-price').innerText;
     const totalPriceValue = parseFloat(totalPrice);
     const totalPriceTwoDecimal = totalPriceValue.toFixed(2);
     
    const couponFieldValue = document.getElementById('coupon-field').value;
    const discountElement = document.getElementById('discount');
    if (couponFieldValue === 'SELL200') {
        const discount = (totalPriceTwoDecimal * 20) / 100;
        discountElement.innerText = discount.toFixed(2);
    }

    const discountPriceString = document.getElementById('discount').innerText;
    const discountPrice = parseFloat(discountPriceString)
    const grandTotal = totalPriceTwoDecimal - discountPrice;
    const grandTotalTwoDecimal = grandTotal.toFixed(2);
    document.getElementById('total').innerText = grandTotalTwoDecimal;
}
