document.body.innerHTML
const cards = document.querySelectorAll(".card")

const cardPrice1 = +document.getElementById("card-price1").textContent;
const cardPrice2 = +document.getElementById("card-price2").textContent;
const cardPrice3 = +document.getElementById("card-price3").textContent;
const cardPrice4 = +document.getElementById("card-price4").textContent;


const sum = cardPrice1 + cardPrice2 + cardPrice3 + cardPrice4;
document.getElementById("result").innerHTML = sum;

const showDiscount = document.querySelector(".container__discount");

function showPercent(number) {
    return number * 0.8;
}
showDiscount.onclick("click", () => {
    const onePay = showPercent(cardPrice1);
    console.log(onePay);
    // const twoPay = showPercent(cardPrice2);
    // const threePay = showPercent(cardPrice3);
    // const fourPay = showPercent(cardPrice4);
    cardPrice1.textContent = onePay;
    // cardPrice2.textContent = twoPay;
    // cardPrice3.textContent = threePay;
    // cardPrice4.textContent = fourPay;
}

)
