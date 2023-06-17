// Находим элементыы
let activeButton = false

const contApp = document.getElementById('container');
contApp.style.margin = '0 auto'
contApp.style.width = '100%'
contApp.style.display = 'flex'
contApp.style.flexDirection = 'column'
contApp.style.justifyContent = 'center'
contApp.style.alignItems = 'center'
contApp.style.gap = '10px'
// Создаем элементы контейнера
const tablo = 0,
    startButton = 0,
    startButtonText = 'Start',
    pauseButton = 0,
    pauseButtonText = 'Pause',
    stopButton = 0,
    stopButtonText = 'Stop'
// Создаем табло секундомера
const createElementTablo = (newTablo)=>{
    newTablo = document.createElement('div');
    newTablo.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    newTablo.style.width = '200px'
    newTablo.style.height = '200px'
    newTablo.style.fontSize = '24px'
    newTablo.style.color = 'white'
    newTablo.style.textAlign = 'center'
    newTablo.style.display = 'flex'
    newTablo.style.alignItems = 'center'
    newTablo.style.justifyContent = 'center'
    newTablo.style.borderRadius = '50%'
    // newTablo.style.paddingTop = '20px'
    newTablo.innerHTML = '0:0:0'
    newTablo.className = 'tablo'
    contApp.append(newTablo)
}
createElementTablo(tablo)
let tabloSecundomer = document.querySelector('.tablo');
// Создаем кнопки для секундомера
const createButton = (newButton, value)=>{
    newButton = document.createElement('button');
    newButton.style.width = '100px'
    newButton.style.height = '50px'
    newButton.style.fontSize = '18px'
    newButton.style.borderRadius = '5px'
    newButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    newButton.innerHTML = value
    newButton.className = value
    contApp.append(newButton)
}
createButton(startButton, startButtonText)
createButton(pauseButton, pauseButtonText)
createButton(stopButton, stopButtonText)
// Находим кнопки + события
const buttonStart = document.querySelector('.Start');
const buttonPause = document.querySelector('.Pause');
const buttonStop = document.querySelector('.Stop');
buttonStop.style.opacity = '0.5'

buttonStart.addEventListener('click', function(){
        buttonStop.style.opacity = '1'
        buttonStart.style.opacity = '0.5'
        let milisec = 0
        let secunds = 0
        let minutes = 0
        const interMiliSec = setInterval(()=>{
            if(milisec<=100){
                milisec++
                tabloSecundomer.innerHTML = secunds+':'+milisec
            } else{
                milisec = 0
                milisec++
                tabloSecundomer.innerHTML = secunds+':'+milisec
            }

        }, 10)
        const interSecunds = setInterval(()=>{
            secunds++
            console.log(secunds)
        },1000)
        const interMinutes = setInterval(()=>{
            minutes++
            console.log(secunds)
        },60000)
        
        buttonStop.addEventListener('click', function(){
            buttonStart.style.opacity = '1'
            buttonStop.style.opacity = '0.5'
            tabloSecundomer.innerHTML = '0:0:0'
            clearInterval(interMiliSec)
            clearInterval(interSecunds)
            clearInterval(interMinutes)
        })


})
