// Fixação 1

// type BemTeVi = {
//   name: string,
//   height: number,
//   beautiful: boolean
// }

// const consoleBemTeVi = (btv: BemTeVi) => {
//   console.log("O nome do pássaro é: ", btv.name);
//   console.log("A altura média em 'cm' do pássaro é: ", btv.height);
//   console.log("Ele é bonito?: ", btv.beautiful);
// }

// consoleBemTeVi({
//   name: 'Bem te Vi',
//   height: 15,
//   beautiful: true,
// });

// Fixação 2

enum MeusDogs {
  Salsichinha = "Goiaba e Pituka",
  PoodleToy = "Pipoca",
  ViraLata = "Floki"
}

class Eu {
  name: string;
  birthday: Date;
  dogs: MeusDogs;

  constructor(name: string, birthday: Date, dogs: MeusDogs) {
    this.name = name;
    this.birthday = birthday;
    this.dogs = dogs;
  }

  loves(): void {
    console.log(`${ this.name } ama todos os doguinhos, ${ this.dogs }`);
  }
}

const eu1 = new Eu("Marina", new Date("2000-01-30"), MeusDogs.Salsichinha);
const eu2 = new Eu("Carol", new Date("2000-10-17"), MeusDogs.PoodleToy);
const eu3 = new Eu("Marliete", new Date("2000-06-30"), MeusDogs.ViraLata);

eu1.loves();
eu2.loves();
eu3.loves();

console.log(Eu);