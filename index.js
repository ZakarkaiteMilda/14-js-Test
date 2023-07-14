console.clear();
console.log(`------------------------`);

//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

const number1 = 2;
const number2 = 2;

if (number1 == number2) {
    console.log(`Skaičiai number1 ir number2 yra lygūs`);
} else if (number1 >= number2) {
    console.log(`Skaičius number1 yra didesnis už number2`);
} else {
    console.log(`Skaičius number1 yra mazesnis už number2`);
}

console.clear();
console.log(`------------------------`);

//2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.clear();
console.log(`------------------------`);

//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

for (let i = -1; i <= 10; i++) {
    i += 1;
    console.log(i);
}

console.clear();
console.log(`------------------------`);

//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

for (let i = 1; i <= 5; i++) {
    let randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    console.log(randomNumber);
}

