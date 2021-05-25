var menuBtn = document.querySelector('#header #header__menu-btn')
var headerElement = document.querySelector('#header')
var heightCurrent = headerElement.clientHeight

// đóng/mở mobile menu 
menuBtn.onclick = () => {
    const isClosed = headerElement.clientHeight === heightCurrent
    if(isClosed) {
        menuBtn.style.backgroundColor = '#ccc'
        headerElement.style.height = 'auto'
        headerElement.style.overflow = 'none'
    } else {
        menuBtn.style.backgroundColor = '#000'
        headerElement.style.height = null
    }
}

// đóng khi scroll-behavior
var menuItems = document.querySelectorAll('#header-nav li a[href*="#"]')

Array.from(menuItems).forEach(item => {
    item.onclick = (e) => {
        const isMatch = item.nextElementSibling && item.nextElementSibling.classList.contains('subnav')
        if(isMatch) {
            if(item.nextElementSibling.style.display === 'none') {
                item.nextElementSibling.style.display = 'block'
                e.preventDefault()
            } else {
                item.nextElementSibling.style.display = 'none'
                e.preventDefault()
            }
        } else {
            menuBtn.style.backgroundColor = '#000'
            headerElement.style.height = null
        }
    }
})