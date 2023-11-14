const trojkatPascala = wys => {
    let trojkat = [];
  
    for (let i = 0; i < wys; i++) {
      let wiersz = Array(i + 1).fill(1);
      trojkat.push(wiersz);
  
      for (let j = 1; j < i; j++) {
        trojkat[i][j] = trojkat[i - 1][j - 1] + trojkat[i - 1][j];
      }
  
      console.log(wiersz.join(" "));
    }
  }
  
  