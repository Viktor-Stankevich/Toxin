let rooms = [
    {img: require('../img/img1.png'), surname: '#840', price: '9 900 в сутки'},
    {img: require('../img/img2.png'), surname: '#980', price: '9 900 в сутки'},
    {img: require('../img/img3.png'), surname: '#856', price: '8 500 в сутки'},
    {img: require('../img/img4.png'), surname: '#740', price: '7 300 в сутки'},
    {img: require('../img/img5.png'), surname: '#982', price: '6 00 в сутки'},
    {img: require('../img/img6.png'), surname: '#678', price: '5 800 в сутки'},
    {img: require('../img/img7.png'), surname: '#450', price: '5 500 в сутки'},
    {img: require('../img/img8.png'), surname: '#350', price: '5 300 в сутки'},
    {img: require('../img/img9.png'), surname: '#666', price: '5 000 в сутки'},
    {img: require('../img/img10.png'), surname: '#444', price: '5 000 в сутки'},
    {img: require('../img/img11.png'), surname: '#352', price: '5 000 в сутки'},
    {img: require('../img/img12.png'), surname: '#352', price: '5 000 в сутки'},
    {img: require('../img/img3.png'), surname: '#840', price: '5 000 в сутки'},
    {img: require('../img/img4.png'), surname: '#980', price: '5 000 в сутки'},
    {img: require('../img/img5.png'), surname: '#856', price: '6 000 в сутки'},
    {img: require('../img/img6.png'), surname: '#740', price: '5 500 в сутки'},
    {img: require('../img/img7.png'), surname: '#982', price: '5 800 в сутки'},
    {img: require('../img/img8.png'), surname: '#678', price: '4 500 в сутки'},
    {img: require('../img/img9.png'), surname: '#450', price: '4 500 в сутки'},
    {img: require('../img/img10.png'), surname: '#350', price: '4 500 в сутки'},
    {img: require('../img/img11.png'), surname: '#666', price: '4 500 в сутки'},
    {img: require('../img/img12.png'), surname: '#444', price: '4 500 в сутки'},
    {img: require('../img/img1.png'), surname: '#352', price: '4 500 в сутки'},
    {img: require('../img/img2.png'), surname: '#352', price: '4 500 в сутки'},
    {img: require('../img/img3.png'), surname: '#840', price: '5 300 в сутки'},
    {img: require('../img/img6.png'), surname: '#980', price: '5 000 в сутки'},
    {img: require('../img/img8.png'), surname: '#856', price: '6 000 в сутки'},
    {img: require('../img/img1.png'), surname: '#740', price: '4 700 в сутки'},
    {img: require('../img/img12.png'), surname: '#982', price: '3 800 в сутки'},
    {img: require('../img/img3.png'), surname: '#678', price: '4 500 в сутки'},
    {img: require('../img/img7.png'), surname: '#450', price: '4 500 в сутки'},
    {img: require('../img/img8.png'), surname: '#350', price: '4 500 в сутки'},
    {img: require('../img/img9.png'), surname: '#666', price: '4 500 в сутки'},
    {img: require('../img/img10.png'), surname: '#444', price: '4 500 в сутки'},
    {img: require('../img/img8.png'), surname: '#352', price: '4 500 в сутки'},
    {img: require('../img/img12.png'), surname: '#352', price: '4 500 в сутки'},
    {img: require('../img/img1.png'), surname: '#840', price: '5 300 в сутки'},
    {img: require('../img/img2.png'), surname: '#980', price: '5 600 в сутки'},
    {img: require('../img/img3.png'), surname: '#856', price: '2 800 в сутки'},
    {img: require('../img/img4.png'), surname: '#740', price: '7 000 в сутки'},
    {img: require('../img/img5.png'), surname: '#489', price: '8 000 в сутки'},
    {img: require('../img/img6.png'), surname: '#656', price: '4 750 в сутки'},
    {img: require('../img/img7.png'), surname: '#450', price: '4 750 в сутки'},
    {img: require('../img/img8.png'), surname: '#312', price: '4 750 в сутки'},
    {img: require('../img/img9.png'), surname: '#666', price: '4 750 в сутки'},
    {img: require('../img/img10.png'), surname: '#454', price: '5 200 в сутки'},
    {img: require('../img/img11.png'), surname: '#382', price: '5 200 в сутки'},
    {img: require('../img/img12.png'), surname: '#352', price: '5 200 в сутки'}
    

];

//Получаем элементы DOMs
let divGrid = document.querySelector('#main2__content');
let pagination = document.querySelector('#pagination');
let body = document.querySelector('body');

//Количество записей на странице
let notesOnPage = 12;
//Количество страниц
let countOfItems = Math.ceil(rooms.length / notesOnPage);

//Динамическая пагинация
let items = [];
for (let i = 1; i <= countOfItems; i++ ) {
    let li = document.createElement('li');
    li.innerHTML = i;
    pagination.appendChild(li)
    items.push(li);
}

//Кнопка включения последней страницы
let btn = document.createElement('li');
    btn.classList.add('lastPage');
let btnPng = document.createElement('img');
    btnPng.src = require('../img/arrow_forward.png');
    btn.appendChild(btnPng);
    pagination.appendChild(btn);

//Подпись под кнопками
let signature = document.createElement('span');
pagination.appendChild(signature);


//Основной функционал
showPage(items[0]);
for (let item of items) {                            //Перебор масива с li-шками пагинации
    item.addEventListener('click', function() {
        showPage(this);
        
    });
}

function showPage(item) {
    let active = document.querySelector('#pagination li.active');
    if(active) {                                                        //Удаления класса active
        active.classList.remove('active');
    }
    item.classList.add('active');                                       //Добовление класса active
    
    last(item);                                                         //Вызов функции кнопки показа последнней страницы
  
    let pageNum = +item.innerHTML;

    let start = (pageNum - 1) * notesOnPage;                            //Откуда резать массив
    let end = start + notesOnPage;                                      //Докуда резать массив

    let notes = rooms.slice(start, end);                                


//Функционал подпись "1 - 12" из столькито
let signatureValueStart = (pageNum -1 ) * notesOnPage + 1;
let signatureValueEnd = (pageNum -1 ) * notesOnPage + notesOnPage ;
    if (rooms.length < 100) {   
        signature.innerHTML = signatureValueStart + ' - ' + signatureValueEnd + ' из ' + rooms.length + ' вариантов аренды';
    } else {
        signature.innerHTML = signatureValueStart + ' - ' + signatureValueEnd + ' из 10+ вариантов аренды';

    }

// функционал кнпоки выбора последнего элемента
function last () {
    
    btn.onclick = function () {
        item.classList.remove('active');
           
        let endLast = rooms.length;
        let startLast = endLast - notesOnPage;
        let note = rooms.slice(startLast, endLast);
        
        divGrid.innerHTML = '';
        for (let not of note) {
            
            let divContent = document.createElement('div');
            divContent.classList.add('divContent');
            divGrid.appendChild(divContent);

            let imgContainer = document.createElement('div');
            imgContainer.classList.add('imgContainer');
            divContent.appendChild(imgContainer);
            
            let img = document.createElement('img');
            img.src = not.img;
            imgContainer.appendChild(img);

            let nameAndPrice = document.createElement('div');
            nameAndPrice.classList.add('nameAndPrice');
            divContent.appendChild(nameAndPrice);
    
            let name = document.createElement('h3');
            name.innerHTML = not.surname;
            nameAndPrice.appendChild(name);
    
            let price = document.createElement('p');
            price.innerHTML = not.price;
            nameAndPrice.appendChild(price);  
            
            
            let ratingAntReview = document.createElement('div');
            ratingAntReview.classList.add('ratingAntReview');
            divContent.appendChild(ratingAntReview);
                
        }
        
    }
}

//Создание таблицы 
    
divGrid.innerHTML = '';
for (let note of notes) {
    let divContent = document.createElement('div');
    divContent.classList.add('divContent');
    divGrid.appendChild(divContent);

    let imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');
    divContent.appendChild(imgContainer);

    let img = document.createElement('img');
    img.src = note.img;
    imgContainer.appendChild(img);



    let nameAndPrice = document.createElement('div');
    nameAndPrice.classList.add('nameAndPrice');
    divContent.appendChild(nameAndPrice);

    let name = document.createElement('h3');
    name.innerHTML = note.surname;
    nameAndPrice.appendChild(name);

    let price = document.createElement('p');
    price.innerHTML = note.price;
    nameAndPrice.appendChild(price);  
    
    
    let ratingAntReview = document.createElement('div');
    ratingAntReview.classList.add('ratingAntReview');
    divContent.appendChild(ratingAntReview);

    let rating = document.createElement('div');
    rating.id = 'star';
    ratingAntReview.appendChild(rating);

   

}



}