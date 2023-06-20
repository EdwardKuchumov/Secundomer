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
    stopButtonText = 'Clear'
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
    newButton.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
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
const buttonClear = document.querySelector('.Clear');
buttonClear.style.opacity = '0.3'
buttonPause.style.opacity = '0.3'
// Функция с условиями
let milisec = 0
let secunds = 0
let minutes = 0
const inrervalSecundomer = ()=>{
    const interMiliSec = setInterval(()=>{
        if(milisec<=100){
            milisec++
            tabloSecundomer.innerHTML = minutes+':'+secunds+':'+milisec
        } else{
            milisec = 0
            milisec++
            tabloSecundomer.innerHTML = minutes+':'+secunds+':'+milisec
        }
    }, 10)
    const interSecunds = setInterval(()=>{
        if(secunds<=58){
            secunds++
            tabloSecundomer.innerHTML = minutes+':'+secunds+':'+milisec
        } else{
            secunds = 0
            secunds++
            tabloSecundomer.innerHTML = minutes+':'+secunds+':'+milisec
        }
    },1000)
    const interMinutes = setInterval(()=>{
        minutes++
        console.log(secunds)
    },60000)
// Кнопка очистки
    buttonClear.addEventListener('click', function(){
        buttonStart.style.opacity = '1'
        buttonClear.style.opacity = '0.3'
        buttonPause.style.opacity = '0.3'
        tabloSecundomer.innerHTML = '0:0:0'
        milisec = 0
        secunds = 0
        minutes = 0
        clearInterval(interMiliSec)
        clearInterval(interSecunds)
        clearInterval(interMinutes)
    })
    buttonPause.addEventListener('click', function(){
        buttonPause.style.opacity = '0.3'
        buttonStart.style.opacity = '1'
        buttonClear.style.opacity = '1'
        clearInterval(interMiliSec)
        clearInterval(interSecunds)
        clearInterval(interMinutes)
    })
}
// Кнопка старта с условиями
buttonStart.addEventListener('click', function(){
        buttonClear.style.opacity = '1'
        buttonStart.style.opacity = '0.3'
        buttonPause.style.opacity = '1'
        inrervalSecundomer()

    if (buttonPause.style.opacity == '0.3'){
        alert('Hrllo')
    }else{
        buttonClear.style.opacity = '1'
        buttonStart.style.opacity = '0.3'
        buttonPause.style.opacity = '1'
        inrervalSecundomer()
    }

})
