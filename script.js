let mapa = [
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 0, 0, 3, 0, 0, 0, 0, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 3, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 3, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
  [1, 3, 0, 1, 2, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
];
const TAMANO_PARED = 5;
const ALTO_PARED = 3;
let muro;
let premio;
let muros = document.querySelector('#muros');
let premios = document.querySelector('#premios');
let scoreEl = document.querySelector('#score');
for (let x = 0; x < mapa.length; x += 1) {
  for (let z = 0; z < mapa[x].length; z += 1) {
  let posicion = (x - mapa.length / 2) * TAMANO_PARED +
  " " +
  1.5 +
  " " +
  (z - mapa[x].length / 2) * TAMANO_PARED;
    if (mapa[x][z] == 0) {
      continue;
      } else if (mapa[x][z] == 1) {
        muro = document.createElement("a-box");
        muros.appendChild(muro);
        muro.setAttribute("color", "fff");
        muro.setAttribute("material", "src: #pared");
        muro.setAttribute("width", TAMANO_PARED);
        muro.setAttribute("height", ALTO_PARED);
        muro.setAttribute("depth", TAMANO_PARED);
        muro.setAttribute("static-body", "");
        muro.setAttribute("position", posicion);
          } else if (mapa[x][z] == 2) {
              document.querySelector('#jugador').setAttribute("position", posicion);
              } else if (mapa[x][z] == 3) {
                  premio = document.createElement("a-sphere");
                  premios.appendChild(premio);
                  premio.setAttribute("position", posicion);
                  premio.setAttribute("class", "premio");
                  premio.setAttribute("color", "tomato");
                  premio.setAttribute("radius", "0.3");
                }
  };
};
premios = Array.from(document.querySelectorAll(".premio"))
let score = premios.length;
scoreEl.setAttribute("value", `Encontra ${ score } Premios`);
scoreEl.setAttribute('color', '#881166');
premios.forEach(function (premio) {
  premio.addEventListener('click', function (){
    premio.setAttribute("visible", "false");
    score -= 1;
    scoreEl.setAttribute("value", `Encontra ${score} Premios`);
    if (score <= 0) {
      scoreEl.setAttribute('value', 'Ya encontraste todos los premios')
    };
  });
});