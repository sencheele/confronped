// Объявление глобальных переменных.
objectIndex = 0
is_anim_finished = true


// Определение компнонента для анимации передвижения камеры
AFRAME.registerComponent('change-cam-position', {
  schema: { },
  init: function () {

    cam = this.el

    // Подгрузка объектов, свечейний и аудио
    objects = document.querySelectorAll('.object')
    glows = document.querySelectorAll('.glow')
    audios = document.getElementsByTagName('audio')


    // Подгрузка элементов интерфейса
    infoPlate = document.querySelector('#infoPlate')
    startButton = document.querySelector('#startButton')
    nextButton = document.querySelector('#nextButton')
    repeatButton = document.querySelector('#repeatButton')
    startAgainButton = document.querySelector('#startAgainButton')


    // Определние массивов с информацией о звездах и планете

    objectsInfos = ["Earth - 12 742",
    "Sun - 1 400 000",
    "Sirius A - 2 500 000",
    "Vega - 3 800 000",
    "Arcturus - 36 000 000",
    "Rigel - 97 000 000",
    "Betelgeuse - 1 300 000 000",
    "VY Canister Majoris - 2 000 000 000",
    "UY Scuti - 2 400 000 000",
    "NGC 1277 - 60 000 000 000",
    "TON 618 - 400 000 000 000"]

    objectsZeroSizes = ["0.013 0.013 0.013",
    "1.4 1.4 1.4"]

    objectsZeroPositions = ["-2 -1.4 0",
    "0 0 0"]

    glowZeroSizes = ["0.036",
    "4.2"]

    objectsFirstSizes = ["0.00013 0.00013 0.00013",
    "0.014 0.014 0.014", 
    "0.025 0.025 0.025", 
    "0.038 0.038 0.038", 
    "0.36 0.36 0.36", 
    "0.97 0.97 0.97"]

    objectsSecondSizes = ["0.0000013 0.0000013 0.0000013",
    "0.00014 0.00014 0.00014", 
    "0.00025 0.00025 0.00025", 
    "0.00038 0.00038 0.00038", 
    "0.0036 0.0036 0.0036", 
    "0.0097 0.0097 0.0097"]

    objectsFirstPositions = ["-0.02 -0.014 0",
    "0 0 0", 
    "0.07 0.011 0", 
    "0.16 0.024 0", 
    "0.65 0.346 0", 
    "2.3 0.956 0"]

    objectsSecondPositions = ["-0.0002 -0.00014 0",
    "0 0 0", 
    "0.0007 0.00011 0", 
    "0.0016 0.00024 0", 
    "0.0065 0.00346 0", 
    "0.023 0.00956 0"]

    glowFirstSizes = ["0.00036",
    "0.042", 
    "0.075", 
    "0.12", 
    "1.1", 
    "3"]

    glowSecondSizes = ["0.0000036",
    "0.00042", 
    "0.00075", 
    "0.0012", 
    "0.011", 
    "0.03"]

    startButton.addEventListener('mouseenter', function (){
      startButton.addEventListener('click', function (){
        buttonsHandler(startButton, "hide")
        buttonsHandler(nextButton, "show")
        buttonsHandler(repeatButton, "show")
        showObject(objectIndex, objects, glows, objectsInfos)
        audioHandler(objectIndex, "play")
      })
    })

    nextButton.addEventListener('mouseenter', function () {
      nextButton.addEventListener('click', function () {
          if (is_anim_finished){
            is_anim_finished = false
            objectIndex += 1
            if (objectIndex == 10){
              buttonsHandler(startAgainButton, "show")
              buttonsHandler(nextButton, "hide")
              buttonsHandler(repeatButton, "show")
            }
            chengePosition(cam, objectIndex, objects, glows, objectsInfos)
          }
        });
    });

    repeatButton.addEventListener('mouseenter', function (){
      repeatButton.addEventListener('click', function (){
        audioHandler(objectIndex, "repeat")
      })
    })

    startAgainButton.addEventListener('mouseenter', function (){
      startAgainButton.addEventListener('click', function (){
        buttonsHandler(startAgainButton, "hide")
        buttonsHandler(nextButton, "show")
        buttonsHandler(repeatButton, "show")

        objectIndex = 0
        hideAllobjects(objects, glows)
        resize_objects(cam, objects, glows, objectsFirstSizes, glowFirstSizes, objectsFirstPositions, 6)
        resize_objects(cam, objects, glows, objectsZeroSizes, glowZeroSizes, objectsZeroPositions, 2)
        cam.setAttribute('position', "-2 -3 0.03")
        showObject(objectIndex, objects, glows, objectsInfos)
        audioHandler(objectIndex, "start again")
      })
    })
  }
});


// Определение компнонента для настройки состояния наведения у кнопок
AFRAME.registerComponent('hover-button', {
  schema: { },
  init: function () {

    var button = this.el
    button.addEventListener('mouseenter', function(){
      material = button.getAttribute('material')
      src = material.src.replace("default", "hover")
      material.src = src
      button.setAttribute('material', material)
    })
    button.addEventListener('mouseleave', function(){
      material = button.getAttribute('material')
      src = material.src.replace("hover", "default")
      material.src = src
      button.setAttribute('material', material)
    })
  }
});


// Определение функции для изменения позиции камеры
function chengePosition(cam, objectIndex, objects, glows, objectsInfos){
  switch(objectIndex){
    case 2:
      resize_objects(cam, objects, glows, objectsFirstSizes, glowFirstSizes, objectsFirstPositions, objectIndex)
      break;
    case 6:
      resize_objects(cam, objects, glows, objectsSecondSizes, glowSecondSizes, objectsSecondPositions, objectIndex)
      break;
    default:
      break;
  }

  startEventString = "start" + objectIndex
  infoPlate.setAttribute('value', "")
  cam.emit(startEventString)

  cam.addEventListener('animationcomplete', function(){
    is_anim_finished = true
  })
  showObject(objectIndex, objects, glows, objectsInfos)
  audioHandler(objectIndex, "play")
}


// Определение функции для отображения звезды
function showObject(objectIndex, objects, glows, objectsInfos){
  objects[objectIndex].setAttribute('visible', 'true')
  glows[objectIndex].setAttribute('visible', 'true')
  infoPlate.setAttribute('value', objectsInfos[objectIndex])
}


// Определение функции для управления отображением кнопок
function buttonsHandler(button, state){
  if(state == "hide"){
    button.setAttribute('height', "0")
  }
  if(state == "show"){
    button.setAttribute('height', "0.0025")
  }
}


// Определение функции для изменения размеров звезд
function resize_objects(cam, objects, glows, objectsizes, glowSizes, positions, objectIndex){
  switch(objectIndex){
    case 2:
      objects = Array.from(objects).slice(0, 2)
      glows = Array.from(glows).slice(0, 2)
      objectsizes = Array.from(objectsizes).slice(0, 2)
      glowSizes = Array.from(glowSizes).slice(0, 2)
      positions = Array.from(positions).slice(0, 2)
      cam.setAttribute('position', "0 -1.6 0.03")
      break;
    case 6:
      objects = Array.from(objects).slice(0, 6)
      glows = Array.from(glows).slice(0, 6)
      cam.setAttribute('position', "0.023 -1.58663 0.02")
      break;
    default:
      return;
  }

  objects.forEach(function(object, index, objects) {
    object.setAttribute('scale', objectsizes[index])
    object.setAttribute('position', positions[index])
  });

  glows.forEach(function(glow, index, glows) {
    glow.setAttribute('width', glowSizes[index])
    glow.setAttribute('height', glowSizes[index])
    glow.setAttribute('position', positions[index])
  });
}


// Определение функции для скрытия всех звезд
function hideAllobjects(objects, glows){
  objects.forEach(function(object, index) {
    if (index != 0){
      object.setAttribute('visible', 'false')
    }
  });

  glows.forEach(function(glow, index) {
    if (index != 0){
      glow.setAttribute('visible', 'false')
    }
  });
}


// Определение функции для управления аудио
function audioHandler(objectIndex, state){
  if (state == "play"){
    if(objectIndex != 0){
      audios[objectIndex - 1].pause()
    }
    audios[objectIndex].currentTime = 0
    audios[objectIndex].play()
  }
  if(state == "repeat"){
    audios[objectIndex].pause()
    audios[objectIndex].currentTime = 0
    audios[objectIndex].play()
  }
  if(state == "start again"){
    audios[10].pause()
    audios[objectIndex].currentTime = 0
    audios[objectIndex].play()
  }
}
