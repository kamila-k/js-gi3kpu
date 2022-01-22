/* Ukoly - vstup a podmínky: 
1) Přijměte jméno jako vstup od uživatele, dale nechte zadat jeho vek a vypište na základě věku jednu ze dvou vět ve tvaru: 
a) Vaše jméno je Marian, je vám 30 let a tak máte právo řídit auto.
b) Vaše jméno je Marian, je vám 14 let a tak musíte počkat ještě 4 let, než budete moci řídit auto.
 */

let jmeno = prompt('Ahoj, jak se jmenujes?');
let vek = Number(prompt('A kolik je ti let?'));
let rokyDoRidicaku = 18 - vek;

if (vek > 18) {
  console.log(
    'Vaše jméno je ' +
      jmeno +
      ' , je vám ' +
      vek +
      ' let a tak máte právo řídit auto.'
  );
} else {
  console.log(
    'Vaše jméno ' +
      jmeno +
      ' , je vám ' +
      vek +
      ' let a tak musíte počkat ještě ' +
      rokyDoRidicaku +
      ' let, než budete moci řídit auto.'
  );
}
