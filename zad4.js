const fibonacci = dlugosc => {
  if (dlugosc < 1) {
    console.log("Długość musi być co najmniej 1.");
    return;
  }

  if (dlugosc === 1) {
    console.log("0");
    return;
  }

  let a = 0;
  let b = 1;
  console.log(a);
  console.log(b);

  for (let i = 2; i < dlugosc; i++) {
    let nastepnaliczba = a + b;
    console.log(nastepnaliczba);
    a = b;
    b = nastepnaliczba;
  }
}

