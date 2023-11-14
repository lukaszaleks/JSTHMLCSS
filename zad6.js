const choinkaNoca = poziom => {
  for (let i = 0; i < poziom; i++) {
    let gwiazdki = '*'.repeat(poziom - i);
    let spacje = ' '.repeat(i * 2);
    let wiersz = gwiazdki + spacje + gwiazdki;
    console.log(wiersz);
  }

  // Rysowanie podstawy choinki
  let podstawa = '*'.repeat(poziom * 2 - 1);
  console.log(podstawa);
}


