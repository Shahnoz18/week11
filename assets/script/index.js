const cards = document.querySelectorAll(".card");

const cardPrice1 = document.getElementById("card-price1");
const cardPrice2 = document.getElementById("card-price2");
const cardPrice3 = document.getElementById("card-price3");
const cardPrice4 = document.getElementById("card-price4");


let sum = +cardPrice1.textContent + +cardPrice2.textContent + +cardPrice3.textContent + +cardPrice4.textContent;
console.log(sum);
let result = document.getElementById("result");
result.textContent = sum;


let showDiscount = document.querySelector(".container__discount");

// function showPercent(number) {
//     return number * 0.8;
// }

// По клику вывести в хтмл каждую цену * 0.8
const discountTotal = showPercent => {
	let showNewPrice = +showPercent.textContent * 0.8;
	return showPercent.textContent = Math.round(showNewPrice);
};

const showResult = () => {
	sum = +cardPrice1.textContent + +cardPrice2.textContent + +cardPrice3.textContent + +cardPrice4.textContent;
	return result.textContent = sum;
};

function wrapperToDiscount() {
	discountTotal(cardPrice1);
	discountTotal(cardPrice2);
	discountTotal(cardPrice3);
	discountTotal(cardPrice4);
	showResult();
}
showDiscount.addEventListener('click', wrapperToDiscount, {once: true});

// showDiscount.addEventListener("click", () => {
//     const onePay = showPercent(cardPrice1);
//     console.log(onePay);
//     cardPrice1.textContent = onePay;
    // const twoPay = showPercent(cardPrice2);
    // const threePay = showPercent(cardPrice3);
    // const fourPay = showPercent(cardPrice4); 
   
    // cardPrice2.textContent = twoPay;
    // cardPrice3.textContent = threePay;
    // cardPrice4.textContent = fourPay;
// }

// )

// const showDiscount = showPercent => {
//     let showNewPrice = +showPercent.textContent * 0.8;
//     return showPercent.textContent = showNewPrice
// }

// //По клику вывести в хтмл каждую цену * 0.8
// const discountTotal = showPrice => {
// 	let showNewPrice = +showPrice.textContent * 0.8;
// 	return showPrice.textContent = showNewPrice;
// };

// function wrapperToDiscount() {
// 	discountTotal(priceItem1);
// 	discountTotal(priceItem2);
// 	discountTotal(priceItem3);
// 	discountTotal(priceItem4);
// 	discountTotal(priceItem5);
// 	total.textContent = sumPriceTotal();
// }

// btn.addEventListener('click', wrapperToDiscount);