const czyTrojkaPitagorejska = (a, b, c) => {

  if(!a || !b || !c) {
    console.log("Nie podano wszystkich liczb")
    return;
  }

  if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Podane liczby muszą być dodatnie.");
    return;
  }

  let x = Math.max(a, b, c);

  let y = 0;
  
  if (x === a) {
      y = b * b + c * c;
    } else if (x === b) {
      y = a * a + c * c;
    } else {
      y = a * a + b * b;
  }

  if (x * x === y) {
    console.log(`Liczby ${a}, ${b}, ${c} tworzą trójkę pitagorejską. `);
  } else {
    console.log(`Liczby ${a}, ${b}, ${c} nie tworzą trójki pitagorejskiej.`);
  }
}
