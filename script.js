let list = document.querySelector('.bi-list')
let sideNav = document.querySelector('.sidenav')
let sideNavBg = document.querySelector('.sidenav-bg')
let header = document.querySelector('.header')

list.addEventListener('click', () =>{
    sideNav.style.left = '0'
    sideNavBg.style.display = 'block'
    header.style.backgroundColor = 'lightgray'
})
sideNavBg.addEventListener('click', () =>{
    sideNav.style.left = '-100%'
    sideNavBg.style.display = 'none'
    header.style.backgroundColor = '#f5f5f5'
})

let liHome = document.querySelector('.li-home')
let liAbout = document.querySelector('.li-about')
let liSocialMedia = document.querySelector('.li-social-media')

liHome.addEventListener('click', () =>{
    sideNav.style.left = '-100%'
    sideNavBg.style.display = 'none'
    header.style.backgroundColor = '#f5f5f5'
})
liAbout.addEventListener('click', () =>{
    sideNav.style.left = '-100%'
    sideNavBg.style.display = 'none'
    header.style.backgroundColor = '#f5f5f5'
})
liSocialMedia.addEventListener('click', () =>{
    sideNav.style.left = '-100%'
    sideNavBg.style.display = 'none'
    header.style.backgroundColor = '#f5f5f5'
})