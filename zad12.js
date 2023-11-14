class Ocena {
    
    constructor(przedmiot, wartosc){
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }

}


class Student {
    
    constructor(imie, nazwisko){
        this.imie = imie;
        this.nazwisko = nazwisko;
    }

    ocenyTablica = [];

    sredniaocen = null;

    hello() {
        return console.log(`${this.imie} ${this.nazwisko} średnia ocen: ${this.sredniaocen}`)
    }

    setOcena(przedmiot, wartosc) {
        this.ocenyTablica.push(new Ocena(przedmiot, wartosc))
        let sumaOcen = null;

        this.ocenyTablica.forEach(ocena => {
            sumaOcen += ocena.wartosc;
        })

        this.sredniaocen = sumaOcen / this.ocenyTablica.length;
    }

    getOcena(){
        const ocenyDoWyświetlenia = this.ocenyTablica.map(ocena => {
            return `Przedmiot: ${ocena.przedmiot} - ocena ${ocena.wartosc}.`
        }).join(' ')
        
        return ocenyDoWyświetlenia
    }

}