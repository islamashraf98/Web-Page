var acg = document.getElementById('ACG'),
    tabs = document.getElementsByClassName('tab')
acg.onclick = function () {
    console.log('hi 1')
    for (let index = 0; index < tabs.length; index++) {
        console.log('hi 2')
        if (tabs[index].classList.contains('active')) {
            console.log('hi 3')
            tabs[index].classList.remove('active')
            acg.classList.add('active')
        }
    }
}