const choinka = wysokość => {
  for (let i = 1; i <= wysokość; i++) {
    let choinka = '';
    for (let j = 1; j <= i; j++) {
      choinka += '*';
    }
    console.log(choinka);
  }
}



