

// Homework 4
// Задание 1
// Написать простую функцию для получения суммы чисел, 
// которая принимает в себя 2 числа в качестве аргументов, 
// и возвращает их сумму. Необходио написать 2 варианта, как стрелочную,
//  так и обычную функции.
// Вызовите ее несколько раз с разными значениями.


// function simpleMath(a, b){
//     let result = a + b;
//     return result;
// }
// let sum = simpleMath(122, 233);
// sum = simpleMath(453, 65);
// console.log(sum);

// let sum =(a, b)=> a + b;
// let res1 = sum(5, 6);
// res1=sum(23, 56);
// console.log("res1", res1);


// Задание 2
// Написать функцию, которая будет спрашивать у пользователя его имя и возраст,
//  и с помощью alert приветствовать его.
// Далее, если возраст больше 30, то показать сообщение с приветсвием
// Здавствуйте,
//  <Имя Пользователя>
// Если меньше, сообщением будет Привет, 
// <Имя Пользователя> (в треугольных скобках должно быть значение имени,
//  введенной пользователем)



function userGreeting(){
    let userName = prompt("Your name");
         userAge = +prompt("Your age");
    if(userAge >= 30){
        alert("Hello!" + userName);
    }else if(userAge < 30){
        alert("Hi!" + userName);
    }
}
userGreeting()




// Задание 3
// Напишите функцию для возведения числа в степень
// функция принимает 2 аргумента, число, с которым нужно провести
//  операцию и необходимую степень, степень является НЕОБЯЗАТЕЛЬНЫМ аргументом, 
//  значением по умолчанию является число 2
// функция должна вернуть результат операции


// const result = 8**2;
// console.log(result);

