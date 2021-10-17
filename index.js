function sumInput() {
    let arrContainer = document.getElementById('array');
    
    let arr = []; // создаем массив
    for(let i=0; i < 3; i++) {
// Заполняем массив
        arr[i] = prompt('Введите любое число', +i); 
// если  нажимаем "Отмена"
        if(arr[i] === null) { 
            alert('Отмена');
            return;
        }
// если  число не введено
        if(arr[i] === '') { 
            alert('Вы не указали значение');
            arr[i] = prompt('Введите любое число'); 
        }
//проверка является ли числом
        if(isNaN(arr[i])) {
            alert('Введенное значение не является числом');
            arr[i] = prompt('Введите любое число');
        }

    }

    arrContainer.innerHTML = '';
    arrContainer.innerHTML = arr.sort((a, b) => a - b);
// Выводим массив целиком
    console.log(arr); 
//суммируем элементы массива
    let sum=0; 
        for(let i in arr) { 
//переводим в числа, ато будет строка
            arr = arr.map(Number); 
            sum += arr[i];
        }
        console.log(sum);
//выводим сумму элементов
    let arrSum = document.getElementById('arraySum');
    arrSum.innerHTML = '';
    arrSum.innerHTML = sum;
}

