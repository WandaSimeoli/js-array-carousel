// Creare array con lista delle 5 immagini

const allImg = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp', ];
console.log(allImg, typeof allImg);


// Ciclo for per concatenare Template Literal

const content = document.querySelector('.content');

for (let i = 0; i < allImg.length; i++) {
    console.log (allImg[i]);
    
    if (i == 0) {
    content.innerHTML = content.innerHTML + `
    <img src="${allImg[i]}" class="active" alt="">`; 
}
else {
    content.innerHTML = content.innerHTML  + `
    <img src="${allImg[i]}" alt="">`; 
}
}







