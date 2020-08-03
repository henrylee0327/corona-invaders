var henryLocation = {
    top: 700,
    left: 700
}

var coronaLocation = [
    {
        top: 50,
        left: 600
    }, 
    {
        top: 50,
        left: 700
    }, 
    {
        top: 50,
        left: 800
    }
    ]

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

function locateCorona () {
    document.getElementById('corona').innerHTML = ""
    for (let i = 0; i < coronaLocation.length; i ++) {
        document.getElementById('corona').innerHTML += `<div class="corona1" style='top:${coronaLocation[i].top}px; left:${coronaLocation[i].left}px'}}></div>`
    }
}

const startBtn = document.getElementById('btn-start')
startBtn.addEventListener("click", startMoveCorona)

function startMoveCorona () {
    // const randomLocation = []
    // const randomTop = Math.floor(Math.random()*700)
    // const randomLeft = Math.floor(Math.random()*1400)
    // randomLocation.push(newVirusLocation)
    // function newVirusLocation () {
    //     const newLocation = {
    //         top: randomTop,
    //         left: randomLeft
    //     }
    // }
    const coronaVirus = document.getElementsByClassName('corona1')
    const animate = setInterval(moveFunc, 2000)

    function moveFunc () {
        for (let i = 0; i < coronaLocation.length; i++) {
            if (coronaLocation[i].top == 10 || 700) {
                clearInterval(animate)
            } else {
                coronaLocation[i].top++
                coronaVirus.style.top = coronaLocation[i].top + 'px'
            }
        }
    }
}

function gameLoop () {
    setTimeout(gameLoop, 1000)
    // console.log(setTimeout)
    moveHenry()
    locateCorona()
    // moveCorona()
}

gameLoop()