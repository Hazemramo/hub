let toggleButton = document.getElementById('mohamed')
let navbarBack = document.getElementById('navbarSupportedContent')
let body = document.getElementById('body')
let navbar = document.getElementById('navbar')
let btnServices = document.getElementById('btn-services')
let btnToAbout = document.getElementById('learn-more')


window.onscroll = function () {
    if (window.scrollY >= 261) {
        navbar.style.position = 'fixed'
        navbar.style.backgroundColor = 'white'
        navbar.style.boxShadow = '-4px -2px 9px'

    } else {
        navbar.style.position = 'relative'
        navbar.style.backgroundColor = '#ffffff00'
        navbar.style.boxShadow = 'none'


    }

}

btnServices.onclick = function () {
    window.open('services.html')
}
btnToAbout.onclick = function () {
    window.open('about-us.html')
}


