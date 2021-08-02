let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  info['recorrente'] = 'Sim';

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  
  //console.log(info);
  //console.log("Bem-vinda, " + info.personagem);

//   for (let key in info) {
//       console.log(key);
//   }
  
//   for (let key in info) {
//       console.log(info[key]);
//   }
let infomRec = [info.personagem, info.origem , info.nota];
let info2mRec = [info2.personagem, info2.origem, info.nota];

for(let key in infomRec&&info2mRec){
    console.log(infomRec[key] + " e " + info2mRec[key]);
}if (info.recorrente === info2.recorrente) {

    console.log("Ambos recorrentes");
}