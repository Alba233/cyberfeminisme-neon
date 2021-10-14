const burger= document.getElementsByClassName('burger')[0];

const menu = document.querySelector('nav');
const spans = document.getElementsByClassName('burger-span')
console.log(typeof spans)

var isopen = false;

    burger.addEventListener('click', function(){
        if (isopen == false){
            menu.classList.remove('close')
            burger.classList.remove('burger-open')
            isopen = true;
            spans['0'].classList.remove('burger-span-close')
            spans['1'].classList.remove('burger-span-close')
            spans['2'].classList.remove('burger-span-close')
            spans['0'].classList.add('burger-span-open')
            spans['1'].classList.add('burger-span-open')
            spans['2'].classList.add('burger-span-open')
            console.log('coucou', burger)
        }
        else {
            menu.classList.add('close')
            burger.classList.add('burger-open')
            isopen = false;
            spans['0'].classList.add('burger-span-close')
            spans['1'].classList.add('burger-span-close')
            spans['2'].classList.add('burger-span-close')
            spans['0'].classList.remove('burger-span-open')
            spans['1'].classList.remove('burger-span-open')
            spans['2'].classList.remove('burger-span-open')

        }
       
    }
    );