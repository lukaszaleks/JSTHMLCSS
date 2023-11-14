const zamienLiteryNaGwiazdkiWZdaniu = (zdanie, slowaDoZamiany) => {
    
    const slowa = zdanie.split(' ');
  
    for (let i = 0; i < slowa.length; i++) {
     
       for (let j = 0; j < slowaDoZamiany.length; j++) {
        const slowo = slowaDoZamiany[j];
  
        if (slowa[i].includes(slowo)) {
          slowa[i] = slowa[i].replace(new RegExp(slowo, 'g'), '*'.repeat(slowo.length));
        }
      }
    }
  
    const wynikoweZdanie = slowa.join(' ');
  
    return console.log(wynikoweZdanie);
  }
  


 