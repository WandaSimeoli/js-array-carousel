// Creare array con lista delle 5 immagini

const allImg = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp', ];
console.log(allImg, typeof allImg);


// Ciclo for per concatenare Template Literal

const content = document.querySelector('.content');

let activeElement = 0;

for (let i = 0; i < allImg.length; i++) {
    console.log (allImg[i]);
    
    if (i == 0) {
    content.innerHTML = content.innerHTML + `
    <div>
    <img src="${allImg[i]}" class="active" alt="">
    </div>`; 
}
else {
    content.innerHTML = content.innerHTML  + `
    <div>
    <img src="${allImg[i]}" alt="">
    </div>`; 
}
}

const allContent = document.querySelectorAll('img');
console.log(allContent, typeof allContent);
 

const postArrow = document.querySelector('.post');

postArrow.addEventListener('click', 
   function () {
    console.log('click post', activeElement);
    allContent[activeElement].classList.remove('active');

    console.log('dopo il click', activeElement + 1);
    allContent [activeElement].classList.add('active');
    }
);





