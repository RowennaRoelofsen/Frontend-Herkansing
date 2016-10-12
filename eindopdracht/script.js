////var nextStep = document.querySelector('fieldset:nth-of-type(4n)');
////
////var secondSteps = document.querySelectorAll('fieldset:nth-of-type(2n)');
////
////var nextStep = document.querySelector('fieldset:nth-of-type(2n)');
////nextStep.classList.add('is-visible');
////
////var nextStep = document.querySelector('fieldset:nth-of-type(2n)');
////nextStep.classList.add('is-visible');
//


/*bronnen
- hamburgermenu
http://www.w3schools.com/howto/howto_js_topnav.asp
- verwijder en voeg een class TouchEventhttp://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript
http://callmenick.com/post/add-remove-classes-with-javascript-property-classlist
- While loop tips van D. Jong

*/

//var nav = document.getElementById("nav")
//var p = document.getElementById("p")
//var form = document.getElementById("form")
//var menu = document.getElementById("menu")
//
//menu.addEventListener("click", toggle)
//
//
//function toggle() {
//    if (form.className==="hidden") {
//        form.classList.add('displayed');
//        p.classList.add('displayed');
//        nav.classList.add('displayed');
//        form.classList.remove('hidden');
//        nav.classList.remove('hidden');
//        p.classList.remove('hidden');
//    }
//    else {
//        form.classList.add('hidden');
//        p.classList.add('hidden');
//        nav.classList.add('hidden');
//        form.classList.remove('displayed');
//        nav.classList.remove('displayed');
//        p.classList.remove('displayed');
//    }
//
//}





//variabel voor elementen met class hidden
var menu_hidden = document.getElementsByClassName("menu-hidden")

//variabel voor elementen met class displayed (niet default)
var menu_displayed = document.getElementsByClassName("menu-displayed")

var menu = document.getElementById("menu")
menu.addEventListener("click", toggle)

//als button is geklikt start functie toggle
//als var menu_hidden meer elemenen bevat dan 0 -> voor elke keer dat menu_hidden groter is dan 0 voeg class menu-displayed toe en verwijder menu-hidden aan de items in menu_hidden

function toggle() {
    if (menu_hidden.length > 0) {
        while (menu_hidden.length > 0) {
            menu_hidden[0].classList.add('menu-displayed');
            menu_hidden[0].classList.remove('menu-hidden');
        }
    }
    else {
        while (menu_displayed.length > 0) {
            menu_displayed[0].classList.add('menu-hidden');
            menu_displayed[0].classList.remove('menu-displayed');
        }
    }
}






