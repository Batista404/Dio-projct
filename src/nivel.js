let nome = "João"
var xp = 1999+1
let nivel = "teste"
if (xp < 1000) {
  nivel = "bronze";
} else if (xp < 3000) {
  nivel = "prata";
}else if (xp < 4000) {
  nivel = "ouro";
}else if (xp < 5000) {
  nivel = "diamante";
}else if (xp < 6000) {
  nivel = "platina"
}
console.log("o herói de nome " + nome + " " + "está no nível"+ " " + nivel)