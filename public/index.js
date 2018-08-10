window.addEventListener('load' , function () {
  console.log('se conecto js');

  var imagenes = [];
  imagenes [0] = 'img/carrusel_1jpg';
  imagenes [1] = 'img/carrusel_2jpg';
  imagenes [2] = 'img/carrusel_3jpg';
  imagenes [3] = 'img/carrusel_4jpg';

  var indiceImagenes = 0;
  function cambiarImagenes () {
    document.slider.src = imagenes[indiceImagenes];
    if (indiceImagenes < 3) {
      indiceImagenes ++;
    } else {
       indiceImagenes = 0;
    }
  }
  // setInterval(cambiarImagenes, 200);
});
