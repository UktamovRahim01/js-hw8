let discount = +prompt('Какая скидка?')
let totalSale = 0
let total = 0
let max = 0
let min = Infinity
let average = 0
let arr = [
    {
        name: 'Milk',
        price: 3.25
    },
    {
        name: 'Coffee',
        price: 1.5
    },
    {
        name: 'Ice Cream',
        price: 7.85
    },
    {
        name: 'Tomatos',
        price: 4.14
    },
    {
        name: 'Onion',
        price: 2.25
    }
]
if (typeof (discount) === `number`) {
    if (discount <= 100 && discount > 0) {
        if (Math.floor(discount) === discount) {
            for (i = 0; i < arr.length; i++) {
                total += arr[i].price;;
                arr[i].price = (Math.round((arr[i].price - ((arr[i].price / 100) * discount)) * 100)) / 100;
                totalSale += arr[i].price;
                if (max < arr[i].price) {
                    max = arr[i].price;
                }
                if (min > arr[i].price) {
                    min = arr[i].price;
                }
            }
            average = ((Math.round((totalSale / arr.length)*100))/100);
            console.log(arr);
            console.log(`скидка составила= ` + discount + `%`);
            console.log(`обшая сумма со скидкой равна= ` + ((Math.round(totalSale*100))/100));
            console.log(`обшая сумма без скидкой равна= ` + total);
            console.log(`саммый дорогой продукт стоит = ` + max);
            console.log(`саммый дешовый продукт стоит = ` + min);
            console.log(`средня цена = ` + average);
        }
        else {
            console.log(`Ведите коректную скидку!!!`);
        }
    }
    else if (discount === 0) {
        console.log(`А смысл в такой скидке?`);
    }
    else {
        console.log(`Ведите адекватную скидку!!!`);
    }
} 
else {
    console.log(`это не число`);
}


console.log(``);
console.log(`!!!Второе задание!!!`);



let num = [0, 1, 2, 3, 4, 5, 6];
let sum = 6;
console.log(num);
for (i = 0; i < num.length; i++) {
    let num1 = num[i];
    let num0 = num.slice(i + 1, num.length);
    for (index = 0; index < num0.length; index++) {
        let num2 = num0[index];
        if ((num1 + num0[index]) == sum) {
            console.log(`сумма ` + num1 + ` и ` + num2 + ` дает ` + sum);
        }
    }
}