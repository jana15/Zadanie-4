class Animal {
    typ = null;
    constructor (typ, sound){
        this.typ = typ;
        this.typ = typ;
    }
    speak() {
        alert(this.typ + 'make sound '+ this.sound)
    }
}
//trieda sluzi nato ze ju vytvorime iba raz a po
 const pes = new Animal('Pes', 'štekat'); 
 const pes = new Animal('Mačka', 'manukat');

 pes.speak()
 macka.speak()

// hovorima ze mame vytvorit potridu animal a preberie je vlastnosti
 class Pes extends Animal{
     typPsa = null;
     constructor(typPsa){
         super('pes', 'haf');
         this.typPsa = typPsa;
     }
     speak(){
        alert(this.typ + ' ' + this.typPsa + 'make sound '+ this.sound)
     }
 }
const bigl = new Pes ('bigl');
bigl.speak();