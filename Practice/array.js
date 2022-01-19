// const heading = document.getElementById('hello')
// // const heading2 = document.getElementsByTagName('h2')[0]
// // const heading2 = document.getElementsByClassName('h2-class')[0]

// const heading2 = document.querySelector('.h2-class')
// const heading3 = document.querySelector('.heading3')




// setTimeout (() => {
//    addStylesTo(heading,'JavaScript')
// }, 1500)

// setTimeout (() => {
//     addStylesTo(heading2,'Практикуйся', 'yellow')
//  }, 3500)

// const link = heading3.querySelector('a')

// link.addEventListener('click', (event) => {
//     event.preventDefault()
//     console.log('Clic on link', event.target)
// })

//  setTimeout (() => {
//     addStylesTo(link,'И все получится', 'white', '2rem')
//  }, 4500)

// function addStylesTo (node, text, color = 'red', fontSize) {
//     node.textContent = text
//     node.style.color = color
//     node.style.textAlign = 'center'
//     node.style.textAlign = 'center'
//     node.style.padding = '2rem'
//     node.style.backgroundColor = "black"
//     node.style.width = '100%'
//     node.style.display = 'block'
//     if (fontSize) {
//         node.style.fontSize = fontSize
//     }
// }


// heading.onclick = () => {
//    if(heading.style.color === 'red') {
//     heading.style.color = '#000'
//     heading.style.backgroundColor = '#fff'
//    } else {
//     heading.style.color = 'red'
//     heading.style.backgroundColor = '#000'
//    }
// }

// heading2.addEventListener('dblclick', () => {
//     if(heading2.style.color === 'yellow') {
//         heading2.style.color = '#000'
//         heading2.style.backgroundColor = '#fff'
//        } else {
//         heading2.style.color = 'yellow'
//         heading2.style.backgroundColor = '#000'
//        }
// })


// const fib = [1, 1, 2, 3, 5, 8, 13]

// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)

// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// const pow2Fib = fib.map(pow2)

// const filteredNumbers = pow2Fib.filter(num =>{
//     return num > 20
// })

// console.log(pow2Fib);
// console.log(filteredNumbers);

// console.log(pow2Fib);

// const index = people.findIndex(function(person) {
// return person.budget === 3500
// })

// const person = people.find(function(person) {
//     return person.budget === 3500
// })


// const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })

// console.log(upperCaseCars);

const people = [
    {name: 'Kamil', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Viktoria', budget: 1700}
]

const allBudget = people.reduce(function (acc, person) {
    acc += person .budget
    return acc
}, 0)
console.log(allBudget);
// console.log(cars.includes('Мазда'));


// let findedPerson

// for ( const person of people) {
//     if (person.budget === 3500) {
//         findedPerson = person
//     }
// }
// // console.log(findedPerson);

// const person = people.find(person =>person.budget === 3500) /* Лямда функция */

// console.log(person);




// cars.push('Рено')


// cars.unshift('Волга')
// const firstItem = cars.shift()
// const lastCar = cars.pop()
// console.log(firstItem)
// console.log(lastCar)

// console.log(cars.reverse());
// console.log(cars);

// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText);