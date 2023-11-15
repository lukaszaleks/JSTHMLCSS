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

    set ocena(ocena){
        if(ocena instanceof Ocena){
            this.ocenyTablica.push(ocena)
             let sumaOcen = null
        
        this.ocenyTablica.forEach(ocena => {
            sumaOcen += ocena.wartosc
        })
        
        this.sredniaocen = sumaOcen / this.ocenyTablica.length
        }
        else{
        console.log('Wartość musi być instancją obiektu Ocena!')
        }
    }

    get oceny(){
        const wszystkieOceny = this.ocenyTablica.map(ocena => {
            return `Przedmiot: ${ocena.przedmiot} - ocena ${ocena.wartosc}.`
        })
        return console.log(wszystkieOceny.join(' '));
    }
}


let ocena = new Ocena('TIN', 5)
let ocena2 = new Ocena('WF', 5)

let student = new Student('Jan', 'Kowalski')

student.ocena = ocena;
student.oceny
