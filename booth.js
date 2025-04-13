function calculateTotal() {
    const adultPrice = 10;
    const childPrice = 5;

    const adultCount = parseInt(document.getElementById("adults").value) || 0;
    const childCount = parseInt(document.getElementById("children").value) || 0;

    const totalAmount = (adultCount * adultPrice) + (childCount * childPrice);

    document.getElementById("total").value = totalAmount;
}
