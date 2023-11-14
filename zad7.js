const poleFigury = (ksztalt, a, b, h ) => {
  
  const poleProstokata = (a, b) => {
    return `Pole prostokąta: ${a*b}`
  }

  const poleTrapezu = (a, b, h) => {
    let pole = ((a+b) * h) / 2
    return `Pole Trapezu: ${pole}`
  }

  const poleRownolegloboku = (a , h) => {
    return `Pole równoległoboku: ${a*h}`
  }

  const poleTrojkata = (a, b) => {
    return `Pole trójkąta: ${a*b / 2}`
  }
  
  switch (ksztalt) {
    case "prostokąt":
      return poleProstokata(a, b);
    case "trapez":
      return poleTrapezu(a, b, h);
    case "rownoległobok":
      return poleRownolegloboku(a , b);
    case "trójkąt":
      return poleTrojkata(a, b);
    default:
      return "Nieznany kształt";
  }

}

poleFigury("prostokąt", 2, 5)
