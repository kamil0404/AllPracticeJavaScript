// КНОПКИ

// function fun1() {
//     let chbox;
// chbox = document.getElementById("one");


// if (chbox.checked) {
//     alert('Выбран');
// }
// else 
// {
//     alert('Не выбран')
// }

// }

// function fun1() {
//     let radi = document.getElementsByName('r1');
//     for (let i = 0; i < radi.length; i++) {
//         if (radi[i].checked) {
//             alert('Выбран ' +i+ ' элемент');
//         } 
        
//     }

// }

// КНОПКИ


// СЕЛЕКТЫ
// function fun1() {
//     let sel = document.getElementById('mySelect').selectedIndex;
//     let options = document.getElementById('mySelect').options
//     alert('Выбрана опция ' +options[sel].text);


// }



// function fun1() {
//     let rng = document.getElementById('r1');
//     // let p = document.getElementById('one');
//     let i1 = document.getElementById('i1');
//     // p.innerHTML = rng.value;
//     i1.value = rng.value;
// }

// function fun1() {
//     let rng = document.getElementById('r1');
//     let div = document.getElementById('test');
//     div.style.width = rng.value+'px';
// }




// СЕЛЕКТЫ






// СЕРВИСЫ

// function fun1() {
//     let rtl = document.getElementById('rtl').value;
//     let rtr = document.getElementById('rtr').value;
//     let rbr = document.getElementById('rbr').value;
//     let rbl = document.getElementById('rbl').value;
//     let ttl = document.getElementById('ttl');
//     let ttr = document.getElementById('ttr');
//     let tbr = document.getElementById('tbr');
//     let tbl = document.getElementById('tbl');

//     let block = document.getElementById('block');

//     ttl.value = rtl;
//     ttr.value = rtr;
//     tbr.value = rbr;
//     tbl.value = rbl;

//     block.style.borderRadius = rtl +'px ' +rtr +'px ' +rbr +'px ' +rbl +'px';

// }








// СЕРВИСЫ







// ВЫПАДАЮЩЕЕ МЕНЮ

// document.getElementById('nav').onmouseover = function(event) {
//     let target = event.target;
//     if (target.className == 'menu-item') {
//         let s = target.getElementsByClassName('submenu');
//         closeMenu();
//         s[0].style.display = 'block';
//     }
// }

// document.onmouseover = function(event) {
//     let target = event.target;
//     console.log(event.target);
//     if (target.className !='menu-item' && target.className != 'submenu') {
//         closeMenu();
//     }
// }

// function closeMenu() {
//     let menu = document.getElementById('nav');
//     let subm = document.getElementsByClassName('submenu');
//     for (let i= 0; i < subm.length; i++) {
//         subm[i].style.display = 'none';
//     }
// }


// ВЫПАДАЮЩЕЕ МЕНЮ







// ВКЛАДКИ ТАБЫ

// let tab;
// let tabcontent;

// window.onload = function () {
//     tabContent = document.getElementsByClassName('tabContent');
//     tab = document.getElementsByClassName('tab');
//     hideTabsContent(1);
// }

// function hideTabsContent(a) {
//     for (let i = a; i < tabContent.lenght; i++) {
//         tabContent[i].classList.remove('show');
//         tabContent[i].classList.add('hide');
//         tab[i].classList.remove('whiteborder') 
//     }
// }


// document.getElementById('tabs').onclick = function (event) {
// let target = event.target;
// if(target.className =='tab') {
//     for (let i = 0; i < tab.lenght; i++) {
//         if(target == tab[i]) {
//             showTabsContent(i);
//              break;
//         }
//     }
// }
// }

// function showTabsContent(b) {
//     if(tabsContent[b].classList.contains('hide')) {
//         hideTabsContent(0);
//         tab[b].classList.add('whiteborder');
//         tabContent[b].classList.remove('hide');
//         tabContent[b].classList.add('show');
//     }
// }
// ВКЛАДКИ ТАБЫ

// let who = "dragon's" + 'mother';
// console.log(who);



// const printNumbers = (initialNumber) => {
//     let i = initialNumber
//     while ( i >= 1) {
//         console.log(i)
//         i = i - 1
//     }
//     console.log('finished')
// }

// printNumbers(4)


// const multiplyNumbersFromRange = (start, finish) => {
//     let i = start
//     let multiply = 1

//     while (i <= finish) {
//         multiply = multiply * i
//         i = i + 1
        
//     }
//     return multiply
// }


// console.log(multiplyNumbersFromRange(1, 3))

// const joinNumbersFromRange = (start, finish) => {
//     let i = start
//     let result = ''
    
//     while(i <= finish) {
//         result = '${result}${i}'
//         i = i + 1
        
//     }
//     return result
// }

// console.log(joinNumbersFromRange(11 1))





