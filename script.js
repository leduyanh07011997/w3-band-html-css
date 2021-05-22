var menuBtn = document.querySelector('#header #header__menu-btn')
var headerElement = document.querySelector('#header')
var heightCurrent = headerElement.clientHeight

// đóng/mở mobile menu 
menuBtn.onclick = () => {
    const isClosed = headerElement.clientHeight === heightCurrent
    if(isClosed) {
        menuBtn.style.backgroundColor = '#ccc'
        headerElement.style.height = 'auto'
    } else {
        menuBtn.style.backgroundColor = '#000'
        headerElement.style.height = null
    }
}

// đóng khi scroll-behavior
var menuItems = document.querySelectorAll('#header-nav li a[href*="#"]')
console.log(menuItems)

Array.from(menuItems).forEach(item => {
    item.onclick = () => {
        menuBtn.style.backgroundColor = '#000'
        headerElement.style.height = null
    }
})