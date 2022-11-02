const item = document.querySelector('.container__todos_item').cloneNode(true);
const listElements = document.querySelector('.container__todos_list');


function changeStyle (event){
    listElements.appendChild(item)
}


const element = document.querySelector('.container__button');
const eve = element.addEventListener('click', changeStyle);