var henryLocation = {
    top: 700,
    left: 700
}

var coronaVirus = [
    {top: 100, left: 100},
    {top: 100, left: 250},
    {top: 100, left: 400},
    {top: 100, left: 550},
    {top: 100, left: 700},
    {top: 100, left: 850},
    {top: 100, left: 1000},
    {top: 300, left: 100},
    {top: 300, left: 250},
    {top: 300, left: 400},
    {top: 300, left: 550},
    {top: 300, left: 700},
    {top: 300, left: 850},
    {top: 300, left: 1000}
]

var missiles = []

document.onkeydown = function (evt) {
    // console.log(evt)
    if (evt.keyCode === 38 && henryLocation.top > 10) {
        henryLocation.top = henryLocation.top - 25
        moveHenry()
    } else if (evt.keyCode === 40 && henryLocation.top < 700) {
        henryLocation.top = henryLocation.top + 25
        moveHenry()
    } else if (evt.keyCode === 37 && henryLocation.left > 10) {
        henryLocation.left = henryLocation.left - 25
        moveHenry()
    } else if (evt.keyCode === 39 && henryLocation.left < 1360) {
        henryLocation.left = henryLocation.left + 25
        moveHenry()
    } else if (evt.keyCode === 32) {
        missiles.push({
            left: henryLocation.left + 20,
            top: henryLocation.top - 40
        })
        console.log(missiles)
    }
}

function moveHenry () {
    document.getElementById('henry').style.top = henryLocation.top + 'px'
    document.getElementById('henry').style.left = henryLocation.left + 'px'
}

function drawCorona () {
    document.getElementById('corona').innerHTML = ""
    for (let i = 0; i < coronaVirus.length;i++) {
        document.getElementById('corona').innerHTML += `<div class="corona1" style="top:${coronaVirus[i].top}px; left:${coronaVirus[i].left}px"></div>`
    }
}

function drawMissiles () {
    document.getElementById('missiles').innerHTML = ""
    for (let i = 0; i < missiles.length; i++) {
        document.getElementById('missiles').innerHTML += `<div class="missile" style='top:${missiles[i].top}px; left:${missiles[i].left}px'></div>`
    }
}


function gameLoop () {
    setTimeout(gameLoop, 1000)
    drawCorona()
    drawMissiles()
}

gameLoop()