let open = document.getElementById('open');
let menu = document.getElementById('menu');
let container = document.getElementById('container');

setInterval(function () {
    if (menu.offsetWidth < 250) {
        open.textContent = '';
        open.style.height = '0px';
        open.style.visibility = 'hidden';
        container.style.visibility = 'hidden';
        container.style.height = '0px';
    } else if (menu.offsetWidth > 100) {
        open.textContent = 'PERSONAL INFO';
        open.style.height = '80px'; 
        open.style.visibility = 'visible';
        container.style.visibility = 'visible';
        container.style.height = '90px';
    }
});

let card = document.getElementById('cardd')
let con3 = document.getElementsByClassName('container3')

menu.addEventListener('mouseover', function () {
    console.log("hello")
    con3.style.width = '400px';
    console.log(con3.style.width)
});

menu.addEventListener('mouseout', function() {
    console.log("bye")
    con3.style.width = '470px';
    console.log(con3.style.width)
});
