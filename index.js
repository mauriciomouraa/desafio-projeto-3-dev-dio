// Desafio de Projeto 3
// Javascript

class hero{
	constructor(nameHero, ageHero, typeHero){
    	this.nameHero = nameHero;
        this.ageHero = ageHero;
        this.typeHero = typeHero;
    }
    
    attack(){
    	let attack;
        if (this.typeHero == "mago"){
        	attack = "magia";
        } else if (this.typeHero == "guerreiro"){
        	attack = "espada";
        } else if (this.typeHero == "monge"){
        	attack = "artes marciais";
        } else if (this.typeHero == "ninja"){
        	attack = "shuriken";
        } else{
        	attack = "Kamehameha";
        }
    	console.log(`O ${this.typeHero} atacou usando ${attack}!`);
    }
    
    infoHero(){
    	console.log(`\nO nome do ${this.typeHero} é ${this.nameHero} e possui ${this.ageHero} anos de idade.`);
    }

}

let heroi = new hero("Sova", 33, "monge");
heroi.attack();
heroi.infoHero();