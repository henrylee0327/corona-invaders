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
    {top: 100, left: 1150},
    {top: 300, left: 50},
    {top: 300, left: 200},
    {top: 300, left: 350},
    {top: 300, left: 500},
    {top: 300, left: 650},
    {top: 300, left: 800},
    {top: 300, left: 950},
    {top: 300, left: 1100},
    {top: 300, left: 1250}
]

var missiles = []
var coronaMissiles = []

document.onkeydown = function (evt) {
    if (evt.keyCode === 37 && henryLocation.left > 10) {
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

function moveCorona () {
    for (let i = 0; i < coronaVirus.length; i++) {
        coronaVirus[i].top = coronaVirus[i].top + 5
    }
}

function drawMissiles () {
    document.getElementById('missiles').innerHTML = ""
    for (let i = 0; i < missiles.length; i++) {
        document.getElementById('missiles').innerHTML += `<div class="missile" style='top:${missiles[i].top}px; left:${missiles[i].left}px'></div>`
    }
}

function moveMissiles () {
    for (let i = 0; i < missiles.length; i++) {
        missiles[i].top = missiles[i].top - 20
    }
}

setInterval(selectCoronaFiringMissiles, 2000)

function selectCoronaFiringMissiles () {
    var selectRandomCorona = coronaVirus[Math.floor(Math.random() * coronaVirus.length)]
    coronaMissiles.push({
        top: selectRandomCorona.top + 91,
        left: selectRandomCorona.left + 45
    })
} selectCoronaFiringMissiles()

function drawCoronaMissiles () {
    document.getElementById('coronaMissiles').innerHTML = ""
    for (let i = 0; i < coronaMissiles.length; i++) {
        document.getElementById('coronaMissiles').innerHTML += `<div class="coronaMissile" style="left: ${coronaMissiles[i].left}px; top: ${coronaMissiles[i].top}px"></div>`
    }
}

function moveCoronaMissiles () {
    for (let i = 0; i < coronaMissiles.length; i++) {
        coronaMissiles[i].top = coronaMissiles[i].top + 10
    }
}

function collisionDetectMissile1 () {
    for (let i = 0; i < coronaVirus.length; i++) {
        for (let m = 0; m < missiles.length; m++) {
            if (
                (missiles[m].top <= coronaVirus[i].top + 91) &&
                (missiles[m].top >= coronaVirus[i].top) &&
                (missiles[m].left >= coronaVirus[i].left) &&
                (missiles[m].left <= coronaVirus[i].left + 91)
                ) {
                coronaVirus.splice(i, 1)
                missiles.splice(m, 1)
            }
            if (coronaVirus.length == 0) {
                alert('Congrats! You killed all the viruses!')
                location.reload()
            }
         }
    }
}

function collisionDetectMissile2 () {
    for (let i = 0; i < coronaMissiles.length; i++) {
        if (
            (coronaMissiles[i].top + 25 >= henryLocation.top) &&
            (coronaMissiles[i].top <= henryLocation.top) &&
            (coronaMissiles[i].left >= henryLocation.left) &&
            (coronaMissiles[i].left <= henryLocation.left + 50)
        ) {
            alert('You are infected!')
            location.reload()
        }
    }
}

function collisionDetectCorona () {
    for (let i = 0; i < coronaVirus.length; i++) {
        if (
            (henryLocation.top <= coronaVirus[i].top + 91) &&
            (henryLocation.top >= coronaVirus[i].top) &&
            (henryLocation.left >= coronaVirus[i].left) &&
            (henryLocation.left <= coronaVirus[i].left + 91)
            ) 
            {
                alert('You are infected')
                location.reload()
            }
        if (coronaVirus[i].top + 91 === 801) {
            console.log(coronaVirus[i].top + 91)
            alert('You are infected')
            location.reload()
        }
    }
}

function coronaMissileRemove () {
    for (let i = 0; i < coronaMissiles.length; i++) {
        if (coronaMissiles[i].top >= 800) {
            coronaMissiles.splice(i, 1)
        }
    }
}


function gameLoop () {
    setTimeout(gameLoop, 300)
    drawCorona()
    moveCorona()
    drawMissiles()
    moveMissiles()
    collisionDetectMissile1()
    collisionDetectMissile2()
    collisionDetectCorona()
    drawCoronaMissiles()
    moveCoronaMissiles()
    coronaMissileRemove()
}

gameLoop()