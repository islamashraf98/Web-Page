var acg = document.getElementById('ACG'),
    conf = document.getElementById('conference'),
    events = document.getElementById('events'),
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
conf.onclick = function () {
    console.log('hi 1')
    for (let index = 0; index < tabs.length; index++) {
        console.log('hi 2')
        if (tabs[index].classList.contains('active')) {
            console.log('hi 3')
            tabs[index].classList.remove('active')
            conf.classList.add('active')
        }
    }
}
events.onclick = function () {
    console.log('hi 1')
    for (let index = 0; index < tabs.length; index++) {
        console.log('hi 2')
        if (tabs[index].classList.contains('active')) {
            console.log('hi 3')
            tabs[index].classList.remove('active')
            events.classList.add('active')
        }
    }
}