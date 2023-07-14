console.clear();
console.log(`------------------------`);

//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

const number1 = 2;
const number2 = 2;

if (number1 == number2) {
    console.log(`Skaičiai ${number1} ir ${number2} yra lygūs`);
} else if (number1 >= number2) {
    console.log(`Skaičius ${number1} yra didesnis už ${number2}`);
} else {
    console.log(`Skaičius ${number1} yra mazesnis už ${number2}`);
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

console.clear();
console.log(`------------------------`);

//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

while (true) {
    let randomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    console.log(randomNumber);

    if (randomNumber === 5) {
        break;
    }
}

console.clear();
console.log(`------------------------`);

//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. 
//Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

let = array = [];

const arrayLenght = Math.floor(Math.random() * (30 - 20 + 1) + 20);

console.log(`Masyvo ilgis --> ${arrayLenght}`);

for (let i = 0; i < arrayLenght; i++) {
    array.push(Math.floor(Math.random() * (30 - 10 + 1) + 10));
}

console.log(array);


let maxValue = 0;

for (let i = 0; i < array.length; i++) {

    if (array[i] > maxValue) {
        maxValue = array[i];
    }
}
console.log(`Didziausia masyvo reiksme --> ${maxValue}`);

console.clear();
console.log(`------------------------`);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. 
//Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)


let = arrayLetters = [];

for (let i = 0; i < 100; i++) {
    const letter = Math.floor(Math.random() * (4 - 1 + 1) + 1);

    if (letter === 1) {
        arrayLetters.push(`A`);
    }

    if (letter === 2) {
        arrayLetters.push(`B`);
    }

    if (letter === 3) {
        arrayLetters.push(`C`);
    }

    if (letter === 4) {
        arrayLetters.push(`D`);
    }

}

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

for (let i = 0; i < arrayLetters.length; i++) {

    if (arrayLetters[i] === 'A') {
        countA += 1;
    }

    if (arrayLetters[i] === 'B') {
        countB += 1;
    }

    if (arrayLetters[i] === 'C') {
        countC += 1;
    }

    if (arrayLetters[i] === 'D') {
        countD += 1;
    }

}

console.log(arrayLetters);
console.log(`"arrayLetters" masyve "A" raidės yra vienetai: ${countA}`);
console.log(`"arrayLetters" masyve "B" raidės yra vienetai: ${countB}`);
console.log(`"arrayLetters" masyve "C" raidės yra vienetai: ${countC}`);
console.log(`"arrayLetters" masyve "D" raidės yra vienetai: ${countD}`);

console.clear();
console.log(`------------------------`);

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. 
//Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
//Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. 
//Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)


function lygineSuma(a, b) {


    if (
        (typeof a === 'number' || Array.isArray(a)) &&
        (typeof b === 'number' || Array.isArray(b))
    ) {



        if (typeof a === 'number' && typeof b === 'number') {
            if (a % 2 === 0 && b % 2 === 0) {
                return a + b;
            }
        }

        if (Array.isArray(a) && Array.isArray(b)) {
            const lyginiaiA = a.filter(num => typeof num === 'number' && num % 2 === 0);
            const lyginiaiB = b.filter(num => typeof num === 'number' && num % 2 === 0);
            const sumaA = lyginiaiA.reduce((sum, num) => sum + num, 0);
            const sumaB = lyginiaiB.reduce((sum, num) => sum + num, 0);
            return sumaA + sumaB;
        }
    }

    return `kintamieji a ir b nera abu skaiciai arba abu masyvai, arba nera dvieju lyginiu skaitmenu kiriuos butu galima sudeti`;
}


console.log(lygineSuma(8, 12));
console.log(lygineSuma([5, 7, 6], [6, 1, 2]));

console.clear();
console.log(`------------------------`);

// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, 
//kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
//skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)


function pirminisSkaicius(skaicius) {

    if (typeof skaicius !== "number") {
        return `Kintamasis nėra skaičius.`;
    } else if (skaicius < 2) {
        return ` ${skaicius} nėra pirminis skaičius `;
    } else {
        for (let i = 2; i <= Math.sqrt(skaicius); i++) {
            if (skaicius % i === 0) {
                return ` ${skaicius} nėra pirminis skaičius `;
            }
            return ` ${skaicius} yra pirminis skaičius `;
        }
    }

}

console.log(pirminisSkaicius(1));

console.clear();
console.log(`------------------------`);

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą.
// Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)

function telefonoNumeris(masyvas) {
    let atsakymas = ``;


    if (!Array.isArray(masyvas)) {
        atsakymas = 'Kintamasis nėra masyvas.';
    } else if (masyvas.length !== 10) {
        atsakymas = "Masyvo elementų skičius nėra 10";
    } else {

        const arVisiSkaiciai = masyvas.every(function (element) {
            return typeof element === "number";
        });

        if (arVisiSkaiciai) {
            atsakymas = `(${masyvas[0]}${masyvas[1]}${masyvas[2]}) ${masyvas[3]}${masyvas[4]}${masyvas[5]}-${masyvas[6]}${masyvas[7]}${masyvas[8]}${masyvas[9]}`;

        } else {
            atsakymas = "Masyvo elementai nėra visi skaičiai.";
        }

    }
    return atsakymas;
}
console.log(telefonoNumeris([0, 8, 6, 0, 7, 9, 3, 6, 0, 1]));







