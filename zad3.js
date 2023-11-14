const tabliczkaMnozenia = bok => {
  for (let i = 1; i <= bok; i++) {
    let wiersz = '';
    for (let j = 1; j <= bok; j++) {
      wiersz += (i * j) + '\t'; // '\t' to znak tabulacji
    }
    console.log(wiersz);
  }
}

