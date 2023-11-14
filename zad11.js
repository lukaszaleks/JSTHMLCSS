let auto = {
    
    rok: null,
    przebieg: null,
    cena_start: 100000,
    cena_end: null, 

    powiekszCeneWyjsciowa: function() {
        this.cena_start += 1000;
    },

    cenaKoncowaZaKazdyRok: function() {
        const wiekAuta = new Date().getFullYear() - this.rok
        const obnizka = wiekAuta * 1000
        this.cena_end -= obnizka
    }, 

    cenaKoncowaZaPrzebieg: function() {
        const przebieg = Math.floor(this.przebieg/100000)
        const obnizka = przebieg * 10000
        this.cena_end -= obnizka
    },
    
    dodaniePrzebieguIRoku: function(przebieg, rok) {
        this.przebieg = przebieg
        this.rok = rok;
        this.cena_end = this.cena_start;
        this.cenaKoncowaZaKazdyRok();
        this.cenaKoncowaZaPrzebieg();
    }
}


let samochody = [];

const dodajAuto = (rok, przebieg, cena_start, cena_end) => {
   if(cena_end < 10000) return 'Cena auta jest za niska!';

   samochody.push({
    rok,
    przebieg,
    cena_start,
    cena_end,
   })
   return 'Auto dodane!'
}

const zwieszenieRokuAut = () => {
    samochody.forEach(auto => auto.rok++) 
}