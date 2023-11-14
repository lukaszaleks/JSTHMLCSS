
const prostokąt = (a, b) => `Pole prostokąta: ${a*b}`;

const trapez = (a ,b ,h) => {
  let pole = ((a+b) * h) / 2
  return `Pole trapezu: ${pole}`
}

const rownoległobok = (a , h) => `Pole równoległoboku: ${a*h}`;

const trójkąt = (a, h) => `Pole trójkąta: ${a*h/2}` 


const obliczPoleCallback = (figura, a , b , h) => {
  return figura(a, b, h)
}


