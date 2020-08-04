var henryLocation = {
    top: 700,
    left: 700
}

var coronaLocation = [
    {
        top: 0,
        left: 0
    }, 
    {
        top: 0,
        left: 0
    }, 
    {
        top: 0,
        left: 0
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

// function startMoveCorona () {
//   for (let i = 0; i < coronaLocation.length; i++) {
//   if (coronaLocation[i].top > 10 && coronaLocation[i].top < 700) {
//       coronaLocation[i].top++
//   } else if (coronaLocation[i].left > 10 && coronaLocation[i].left < 1360) {
//       coronaLocation[i].left++
//   }
//   console.log(coronaLocation[i].top)
//   console.log(coronaLocation[i].left)
// }
// }
// startMoveCorona()

function startMoveCorona () {
    // const randomTop = Math.floor(Math.random()*600)
    // const randomLeft = Math.floor(Math.random()*1300)
    // for (let i = 0; i < coronaLocation.length; i++) {
    //     coronaLocation[i].top = randomTop
    //     coronaLocation[i].left = randomLeft
    //    }
    setInterval(testCorona, 10)

    function testCorona () {
    const randomTop = Math.floor(Math.random()*600)
    const randomLeft = Math.floor(Math.random()*1300)
    for (let i = 0; i < coronaLocation.length; i++) {
        if (coronaLocation[i].top < 700 && coronaLocation[i].left < 1360) {
            coronaLocation[i].top++
            coronaLocation[i].left++
        } else if (coronaLocation[i].top > 10 && coronaLocation[i].left > 10) {
            coronaLocation[i].top--
            coronaLocation[i].left--
        }
        console.log(coronaLocation[i].top)
        console.log(coronaLocation[i].left)
       }
    }
}

function gameLoop () {
    setTimeout(gameLoop, 1000)
    // console.log(setTimeout)
    moveHenry()
    locateCorona()
    // startMoveCorona()
}

gameLoop()