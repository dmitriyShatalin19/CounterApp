let buttonAdd = document.querySelector('.buttonAdd');
let buttonReset = document.querySelector('.buttonReset')

let counterText = document.querySelector('.counter')
let counter = 0;

let data = prompt('сколько метров ваш круг?');


buttonAdd.addEventListener('click', function () { // addEventListener обработка действия
    counter++; // в этих дух строках происходит действия при нажатии
    counterText.innerText = counter;
});

buttonReset.addEventListener('click', function (){
    dataOutput = parseInt(data * counter);
    alert(`ваш результат: ${dataOutput} метров`);

    counter = 0;
    counterText.innerText = counter; // innerText меняет значение переменной
})

// DOM - Document Object Model 
console.log(document); // предстовление что видет js, можно упровлять элементами на старницы