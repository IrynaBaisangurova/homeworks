// Задание 1
// Спросить с помощью prompt у пользователя 2 числа и записать их в переменные.
// Сравнить полученные числа.
// С помощью alert вывести на экран сообщение о том, какое число больше. 
// Если числа равны - сообщить что числа равны

let number1 = Number(prompt("Enter number 1"));
let number2 = Number(prompt("Enter number 2"));
if(number1 > number2){
    alert("number 1 is greater than number 2");
}else if(number1 < number2){
    alert("number 2 is greater than number 1");
}else {
    alert("numbers are equal to");
}  

// Задание 2
// Реализовать калькулятор используя prompt и alert.

// Последовательно спросить у пользователя два числа и желаемое действие.
// Действия могут быть следующие: + - / *
// Выполнить математическую операцию с полученными значениями.
// Результат показать пользователю

const a = Number(prompt("Enter number"));
const action = prompt("Enter action (+, -, * or /)");
const b = Number(prompt("Enter number 2"));
let result;
switch (action) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
            result = a / b;
            break;

    default:
        result = "incorrect operation";
        break;
}
alert(result);

// Задание 3
// Напишите простую программу допуска посетителей на американские горки. 
// Необходимо спросить у пользователя возраст, далее проанализровать 
// и дать ему ответ о допуске на аттракцион.

// Возможные варианты:

// пенисионерам (60-80 лет) и подросткам (12-18 лет) доступ разрешен с 
// разрешения взрослых. По этому если возраст посетителя находится в 
// указанных возрастных диапазонах, то нужно дополнительно спросить его 
// о разрешении от взрослых.
// взрослым вход разрешен
// детям и очень пожилым людям вход запрещен

const userAge = Number(prompt("Your age?"));
if ((userAge >=12 && userAge < 18) || (userAge >=60 && userAge < 80)){
    const isAdults = confirm ("Parents allowed?");
    if (isAdults){
        alert("Entry allowed");
    }else{
        alert("No entry");
    }
}else if (userAge < 12 || userAge >= 80){
    alert("No entry");
}else{
    alert("Entry allowed");
}

