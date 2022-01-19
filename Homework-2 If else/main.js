// const age = prompt("Ввелите ваш возраст")
// if (age <= 2) 
// alert("Ты ребенок");
// if (age >=12 && age <=17)
// alert("ты подросток");
// if (age >=18 && age <=59)
// alert("Вы взрослый");
// if (age >=60)
// alert("Вы пенсионер");


// const number = +prompt('Введите число');

// if (number === 0) {
//   alert(')');
// }

// if (number === 1) {
//   alert('!');
// }

// if (number === 2) {
//   alert('@');
// }

// if (number === 3) {
//     alert('#');
// }

// if (number === 4) {
//     alert('$');
// }

// if (number === 5) {
//     alert('%');
// }

// if (number === 6) {
//     alert('^');
// }

// if (number === 7) {
//     alert('&');
// }

// if (number === 8) {
//     alert('*');
// }

// if (number === 9) {
//     alert('(');
// }




// let number = prompt( 'Введите трехзначное число: ',  );
// let number1 = (number /100);
// let number2 = (number /10)%10;
// let number3 = (number %10);
// if(number1 === number2 || number2 === number3 || number1 === number3) {
// alert('Есть совпадение');
// } else {
// alert('Нет совпадения');
// }


// let year = +prompt('Введите год');
// if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//     alert ('Год високосный')
// } else {
//     alert ('Год не високосный')
// }




// let number = +prompt('Введите пятиразрядное число');

// if (number[0] === number[4] && number[1] === number[3]) {
//     alert('Это палиндром')
// } else {
//     alert('Это не палиндром')
// }




// let enterNumberOfUsd = +prompt('Введите количестов USD');

// let nameOfcurrency = prompt('Введите название валют в которую хотите перевести \n EUR, AZN, или UAN')


// let EUR = enterNumberOfUsd * 1.53;
// let AZN = enterNumberOfUsd * 2.48;
// let UAN = enterNumberOfUsd * 0.52;

// if(nameOfcurrency === 'EUR') {
//     alert(EUR)
// } else if (nameOfcurrency === 'AZN') {
//     alert(AZN)
// } else if (nameOfcurrency === 'UAN') {
//     alert(UAN)
// }





// let enterOfpurchaseSum = +prompt('Введите сумму покупки');

// if( 200 > enterOfpurchaseSum < 300) {
//     alert(enterOfpurchaseSum - (enterOfpurchaseSum * 3 / 100))
// } else if (300 > enterOfpurchaseSum < 500) {
//     alert(enterOfpurchaseSum - (enterOfpurchaseSum * 5 / 100))
// } else if (500 > enterOfpurchaseSum) {
//     alert(enterOfpurchaseSum - (enterOfpurchaseSum * 7 /100))
// }



// let enterCircleLenght = +prompt('Введите длину окружнсти');

// let enterSquarePreimetr = +prompt('Введите периметр квадрата');

// alert(enterCircleLenght >= enterSquarePreimetr ? 'Окружность вместиться в квадрат' : 'Окружность не вместиться в квадрат')


// let points

// let capitalOfCountryFrance = prompt('Выберите столицу Франции \n Париж, Лион или Марсель?')

// let capitalOfCountrySpain = prompt('Выберите столицу Испании \n Барселона, Мадрид или Валенсия?')


// let capitalOfCountryGermany = prompt('Выберите столицу Германии \n Мюнхен, Гамбург или Берлин?')

// if(capitalOfCountryFrance === 'Париж') {
//     points === 2
// } else if (capitalOfCountrySpain === 'Мадрид') {
//     points === 2
// } else if (capitalOfCountryGermany === 'Берлин') {
//     points === 2
// }
// alert('Вы набрали: ${points} + ${points} +${points}')




// let nameOfDay = prompt('Введите день недели');

// switch(nameOfDay) {
//     case 0:
//         nameOfDay = 'Воскресенье';
//         case 1:
//             nameOfDay = 'Понедельник';
//             case 2:
//                 nameOfDay = 'Вторник';
//                 case 3:
//                     nameOfDay = 'Среда';
//                     case 4:
//                         nameOfDay = 'Четверг';
//                         case 5:
//                             nameOfDay = 'Пятница';
//                             case 6:
//                                 nameOfDay = 'Суббота'
                    

// }

// let nameOfMonth = prompt('Введите название месяца')

// switch(nameOfMonth) {
//     case 0:
//         nameOfMonth = 'Январь';
//         case 1:
//             nameOfMonth = 'Февраль';
//             case 2:
//                 nameOfMonth = 'Март';
//                 case 3:
//                     nameOfMonth = 'Апрель';
//                     case 4:
//                         nameOfMonth = 'Май';
//                         case 5:
//                             nameOfMonth = 'Июнь';
//                             case 6:
//                                 nameOfMonth = 'Июль';
//                                 case 7:
//                                     nameOfMonth = 'Август';
//                                     case 8:
//                                         nameOfMonth = 'Сентябрь';
//                                           case 9:
//                                             nameOfMonth = 'Октябрь';
//                                                   case 10:
//                                                     nameOfMonth = 'Ноябрь';
//                                                         case 1:
//                                                             nameOfMonth = 'Декабрь'
                    

// }

// let numberOfYear = +prompt('Введите год')

// alert(nameOfDay, nameOfMonth, numberOfYear) 