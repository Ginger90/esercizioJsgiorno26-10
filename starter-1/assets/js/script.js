var bottoneDestro = document.querySelector('.right-arrow');
var bottoneSinistro = document.querySelector('.left-arrow');
var anteprimaDestra = document.querySelector('.control'); //non va
/*var anteprimaSinistra = document.querySelector('.control left-arrow');*/
var cubo = document.querySelector('.cube'); //non funge il queryselectorall

/*movimento sul bottone per anteprima*/
anteprimaDestra.addEventListener('onmouseover', () => {
    posizione -= 65;
    cubo.style.transform = `rotateY(${posizione}deg)`
});
bottoneSinistro.addEventListener('onmouseover', () => {
    posizione -= 65;
    cubo.style.transform = `rotateY(${posizione}deg)`
});

/*movimento al tocco cambia tutta l'immagine*/
let posizione = 0;
bottoneDestro.addEventListener('click', () => {
    posizione -= 90;
    cubo.style.transform = `rotateY(${posizione}deg)`;
});
bottoneSinistro.addEventListener('click', () => {
    posizione += 90;
    cubo.style.transform = `rotateY(${posizione}deg)`;
});
