document.addEventListener('mousemove', function (e) {
    let heart = document.createElement('span')
    x = e.pageX
    y = e.pageY
    heart.style.left = x + 'px'
    heart.style.top = y + 'px'

    let size = Math.random() * 80
    heart.style.width = 40 + size + 'px'
    heart.style.height = 40 + size + 'px'

    let transformValue = Math.random() * 360
    heart.style.transform = 'rotate(' + transformValue + 'deg)'
    document.body.appendChild(heart)
    setTimeout(function () {
        heart.remove()
    }
        , 500)

})
typeWriter = () => {
    let message = "Поздравляю с 8 марта! Лучшей маме, сестрам, бабушке, тете и всем всем! от whynot"
    text = document.createElement('p')
    text.className = 'message'
    text.style.width = '600px'
    document.body.appendChild(text)

    for (let i = 0; i < message.length; i++) {
        setTimeout(function () {
            text.innerHTML += message[i]
        }, 50 + (50 * i))
    }

}

var counter = 0
container = document.querySelector('#heart-container')
updateMsg = () => {
    counter++
    console.log(123);
    switch (counter) {
        case 1:
            msg.innerHTML = 'Кажется, нужно еще'
            break
        case 2:
            msg.innerHTML = 'Ну два раза нажать маловато'
            break
        case 3:
            msg.innerHTML = 'Еще разок'
            break
        case 4:
            msg.innerHTML = 'И еще один'
            break
        case 5:
            msg.innerHTML = ''
            container.removeEventListener('click', updateMsg)
            let heart = document.querySelector('.heart')
            heart.style.transform = 'scale(0.7) translateY(-200px)'
            setTimeout(function () {
                const heartBeat = [
                    { transform: "scale(0.7) translateY(-200px)" },
                    { transform: "scale(0.65) translateY(-200px)" }
                ]
                const timing = {
                    duration: 800,
                    iterations: Infinity
                }
                typeWriter()
                heart.animate(heartBeat, timing)
            }, 1000)


    }
}
container.addEventListener('click', updateMsg)
