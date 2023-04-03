const cards = document.querySelectorAll(".card");

const cardPrice1 = document.getElementById("card-price1");
console.log(cardPrice1);
const cardPrice2 = document.getElementById("card-price2");
const cardPrice3 = document.getElementById("card-price3");
const cardPrice4 = document.getElementById("card-price4");
const showDiscount = document.querySelector(".container__discount");


const calcSum = () => {
    return sum = +cardPrice1.textContent + +cardPrice2.textContent + +cardPrice3.textContent + +cardPrice4.textContent;
};
//console.log(calcSum());

let result = document.getElementById("result");
result.textContent = calcSum();


const showPercent = (number) => {
    let newNumber = Math.round(number.textContent * 0.8);
    console.log(number);
    return number.textContent = newNumber;
};

function calcDiscount() {
    showPercent(cardPrice1);
    //console.log(cardPrice1);
    showPercent(cardPrice2);
    showPercent(cardPrice3);
    showPercent(cardPrice4);
    result.textContent = calcSum();
}

showDiscount.addEventListener("click", calcDiscount, {once: true}
   

    // console.log(onePay);
    // cardPrice1.textContent = onePay;
    // const twoPay = showPercent(cardPrice2);
    // const threePay = showPercent(cardPrice3);
    // const fourPay = showPercent(cardPrice4); 
   
    // cardPrice2.textContent = twoPay;
    // cardPrice3.textContent = threePay;
    // cardPrice4.textContent = fourPay;
);