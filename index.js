var henryLocation = {
    top: 700,
    left: 700
}

document.onkeydown = function (evt) {
    console.log(evt)
    if (evt.keyCode === 38 && henryLocation.top > 10) {
        henryLocation.top = henryLocation.top - 10
    } else if (evt.keyCode === 40 && henryLocation.top < 700) {
        henryLocation.top = henryLocation.top + 10
    } else if (evt.keyCode === 37 && henryLocation.left > 10) {
        henryLocation.left = henryLocation.left - 10
    } else if (evt.keyCode === 39 && henryLocation.left < 1360) {
        henryLocation.left = henryLocation.left + 10
    }
    moveHenry()
}


function moveHenry () {
    document.getElementById('henry').style.top = henryLocation.top + 'px'
    document.getElementById('henry').style.left = henryLocation.left + 'px'
}

const startBtn = document.getElementById('btn-start')
startBtn.addEventListener("click", startMoveCorona, false)

function startMoveCorona () {
    setInterval(constantMove, 1000)
    
    function constantMove () {
    const theCorona = document.getElementById('corona')
    const w = 1300, h = 600

    theCorona.style.top = Math.floor(Math.random() * h) + 'px'
    theCorona.style.left = Math.floor(Math.random() * w) + 'px'
}
}



function gameLoop () {
    setTimeout(gameLoop, 1000)
    moveHenry()
}

gameLoop()