var henryLocation = {
    top: 700,
    left: 700
}

var coronaLocation = [
    {
        top: 0,
        left: 100
    }, 
    {
        top: 0,
        left: 200
    }, 
    {
        top: 0,
        left: 300
    }
    ]

document.onkeydown = function (evt) {
    console.log(evt)
    if (evt.keyCode === 38) {
        henryLocation.top = henryLocation.top - 10
    } else if (evt.keyCode === 40) {
        henryLocation.top = henryLocation.top + 10
    } else if (evt.keyCode === 37) {
        henryLocation.left = henryLocation.left - 10
    } else if (evt.keyCode === 39) {
        henryLocation.left = henryLocation.left + 10
    }
    moveHenry()
}

function moveHenry () {
    document.getElementById('henry').style.top = henryLocation.top + 'px'
    document.getElementById('henry').style.left = henryLocation.left + 'px'
}

function addCorona () {
    document.getElementById('corona').innerHTML = ""
    for (let i = 0; i < coronaLocation.length; i ++) {
        document.getElementById('corona').innerHTML += `<div class="corona1" style='top:${coronaLocation[i].top}px; left:${coronaLocation[i].left}px'}}></div>`
    }
}

function moveCorona () {
    const startBtn = document.getElementsByClassName('btn-start')

    startBtn.addEventListener('click', startMovetheVirus)

    function startMovetheVirus () {
        const theCorona = document.getElementById('corona')
        const generateRandomNumber = 
        
    }
}

function gameLoop () {
    setTimeout(gameLoop, 1000)
    // console.log(setTimeout)
    moveHenry()
    addCorona()
}

gameLoop()