const liczbyzprzedziału = (a , b ,c) => {
  
  for(let i = a; i <=b ; i++){
    if(i % c === 0) {
      console.log(`liczba podzielna przez ${c} w zbiorze od ${a} do ${b}: ${i}`)
    }
    if(!c){
      console.log("Brak liczb w przedziale!")
    }
  
  }
}
