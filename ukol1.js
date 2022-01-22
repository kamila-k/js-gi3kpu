/* 1) Založte proměnné pro jméno, vek, vahu v kg a a vysku v metrech - nastavte jim libovolnou hodnotu. Spočtěte BMI Do konzole vypište větu ve formátu:
"Jmenuji se Petra, je mi 34 let, vážím 65kg, měřím 1.67m a moje BMI je 23,2.". */

let jmeno = 'Kamila';
let vek = 30;
let vaha = 53;
let vyska = 1.6;
let BMI = vaha / vyska ** 2;
console.log(BMI);
console.log(
  'Jmenuji se ' +
    jmeno +
    ', je mi ' +
    vek +
    ' let' +
    ', vazim ' +
    vaha +
    ', merim ' +
    vyska +
    'm' +
    ', a moje BMI je ' +
    BMI +
    '.'
);

let zaokrouhleneBMI = Math.round(BMI);
console.log(zaokrouhleneBMI);

prompt('ahoj jak se mas?s?');

// Number("445") // 445 cislo
let odpovedNaVek = Number(prompt('Ahoj kolik je ti let?'));
console.log(odpovedNaVek);


// matematicke + - * ** / %
 
/* 
logicke promenne 
&& (A ZAROVEN) 
|| (NEBO) 

*/ 