var henryLocation = {
    top: 700,
    left: 700
}

document.onkeydown = function (evt) {
    // console.log(evt)
    if (evt.keyCode === 38 && henryLocation.top > 10) {
        henryLocation.top = henryLocation.top - 25
    } else if (evt.keyCode === 40 && henryLocation.top < 700) {
        henryLocation.top = henryLocation.top + 25
    } else if (evt.keyCode === 37 && henryLocation.left > 10) {
        henryLocation.left = henryLocation.left - 25
    } else if (evt.keyCode === 39 && henryLocation.left < 1360) {
        henryLocation.left = henryLocation.left + 25
    }
    moveHenry()
}

function moveHenry () {
    document.getElementById('henry').style.top = henryLocation.top + 'px'
    document.getElementById('henry').style.left = henryLocation.left + 'px'
}

const startBtn = document.getElementById('btn-start')
startBtn.addEventListener("click", theGame, false)

function theGame () {
    const startGame = setInterval(moveCorona, 1300)
    
    function moveCorona () {
    const theCorona = document.getElementById('corona')
    const theCorona1 = document.getElementById('corona1')
    const theCorona2 = document.getElementById('corona2')
    const w = 1300, h = 600

    theCorona.style.top = Math.floor(Math.random() * h) + 'px'
    theCorona.style.left = Math.floor(Math.random() * w) + 'px'
    theCorona1.style.top = Math.floor(Math.random() * h) + 'px'
    theCorona1.style.left = Math.floor(Math.random() * w) + 'px'
    theCorona2.style.top = Math.floor(Math.random() * h) + 'px'
    theCorona2.style.left = Math.floor(Math.random() * w) + 'px'
    
    function gameOver () {
        const henry = document.getElementById('henry')
        const theCorona = document.getElementById('corona')
        const theCorona1 = document.getElementById('corona1')
        const theCorona2 = document.getElementById('corona2')

        
    }
    gameOver()
}
}




function gameLoop () {
    setTimeout(gameLoop, 1000)
    // moveHenry()
}

gameLoop()