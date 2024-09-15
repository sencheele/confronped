// glob
// var model_Saturn = document.querySelector('#model_Saturn');
// model_Saturn.object3D.rotation.x = 50;

var platform__Start = document.querySelector('.rig__Start');
var camera__Start = document.querySelector('.Camera_Rig__Start');

var platform__Sun = document.querySelector('.rig__Sun');
var camera__Sun = document.querySelector('.Camera_Rig__Sun');

var platform__Mercury = document.querySelector('.rig__Mercury');
var camera__Mercury = document.querySelector('.Camera_Rig__Mercury');

var platform__Venus = document.querySelector('.rig__Venus');
var camera__Venus = document.querySelector('.Camera_Rig__Venus');

var platform__Earth = document.querySelector('.rig__Earth');
var camera__Earth = document.querySelector('.Camera_Rig__Earth');

var platform__Mars = document.querySelector('.rig__Mars');
var camera__Mars = document.querySelector('.Camera_Rig__Mars');

var platform__Jupiter = document.querySelector('.rig__Jupiter');
var camera__Jupiter = document.querySelector('.Camera_Rig__Jupiter');

var platform__Saturn = document.querySelector('.rig__Saturn');
var camera__Saturn = document.querySelector('.Camera_Rig__Saturn');

var platform__Uranus = document.querySelector('.rig__Uranus');
var camera__Uranus = document.querySelector('.Camera_Rig__Uranus');

var platform__Neptune = document.querySelector('.rig__Neptune');
var camera__Neptune = document.querySelector('.Camera_Rig__Neptune');


// Настройки
var mode = '';
// Start
var frame_Choose_Mode__Start = document.querySelector('.Frame_Choose_Mode__Start');
var btn_Text__Start = document.querySelector('.Button_Text__Start');
var btn_Audio__Start = document.querySelector('.Button_Audio__Start');
// Sun
var frame_Choose_Mode__Sun = document.querySelector('.Frame_Choose_Mode__Sun');
var btn_Text__Sun = document.querySelector('.Button_Text__Sun');
var btn_Audio__Sun = document.querySelector('.Button_Audio__Sun');
// Mercury
var frame_Choose_Mode__Mercury = document.querySelector('.Frame_Choose_Mode__Mercury');
var btn_Text__Mercury = document.querySelector('.Button_Text__Mercury');
var btn_Audio__Mercury = document.querySelector('.Button_Audio__Mercury');
// Venus
var frame_Choose_Mode__Venus = document.querySelector('.Frame_Choose_Mode__Venus');
var btn_Text__Venus = document.querySelector('.Button_Text__Venus');
var btn_Audio__Venus = document.querySelector('.Button_Audio__Venus');
// Earth
var frame_Choose_Mode__Earth = document.querySelector('.Frame_Choose_Mode__Earth');
var btn_Text__Earth = document.querySelector('.Button_Text__Earth');
var btn_Audio__Earth = document.querySelector('.Button_Audio__Earth');
// Mars
var frame_Choose_Mode__Mars = document.querySelector('.Frame_Choose_Mode__Mars');
var btn_Text__Mars = document.querySelector('.Button_Text__Mars');
var btn_Audio__Mars = document.querySelector('.Button_Audio__Mars');
// Jupiter
var frame_Choose_Mode__Jupiter = document.querySelector('.Frame_Choose_Mode__Jupiter');
var btn_Text__Jupiter = document.querySelector('.Button_Text__Jupiter');
var btn_Audio__Jupiter = document.querySelector('.Button_Audio__Jupiter');
// Saturn
var frame_Choose_Mode__Saturn = document.querySelector('.Frame_Choose_Mode__Saturn');
var btn_Text__Saturn = document.querySelector('.Button_Text__Saturn');
var btn_Audio__Saturn = document.querySelector('.Button_Audio__Saturn');
// Uranus
var frame_Choose_Mode__Uranus = document.querySelector('.Frame_Choose_Mode__Uranus');
var btn_Text__Uranus = document.querySelector('.Button_Text__Uranus');
var btn_Audio__Uranus = document.querySelector('.Button_Audio__Uranus');
// Neptune
var frame_Choose_Mode__Neptune = document.querySelector('.Frame_Choose_Mode__Neptune');
var btn_Text__Neptune = document.querySelector('.Button_Text__Neptune');
var btn_Audio__Neptune = document.querySelector('.Button_Audio__Neptune');



// Выбор объектов
// Start
var frame_Choose_Object__Start = document.querySelector('.Frame_Choose_Object__Start');
var btn_Setting_Choose_Objects__Start = document.querySelector('.btn_setting_choose_object__Start');
// ---------
var btn_Sun__Start = document.querySelector('.Button_Sun__Start');
var btn_Mercury__Start = document.querySelector('.Button_Mercury__Start');
var btn_Venus__Start = document.querySelector('.Button_Venus__Start');
var btn_Earth__Start = document.querySelector('.Button_Earth__Start');
var btn_Mars__Start = document.querySelector('.Button_Mars__Start');
var btn_Jupiter__Start = document.querySelector('.Button_Jupiter__Start');
var btn_Saturn__Start = document.querySelector('.Button_Saturn__Start');
var btn_Uranus__Start = document.querySelector('.Button_Uranus__Start');
var btn_Neptune__Start = document.querySelector('.Button_Neptune__Start');
// ---------
var btn_Above__Start = document.querySelector('.Button_Above__Start');
var btn_Side__Start = document.querySelector('.Button_Side__Start');
var btn_Angle__Start = document.querySelector('.Button_Angle__Start');

// Sun
var frame_Choose_Object__Sun = document.querySelector('.Frame_Choose_Object__Sun');
var btn_Setting_Choose_Objects__Sun = document.querySelector('.btn_setting_choose_object__Sun');
// ---------
var btn_Sun__Sun = document.querySelector('.Button_Sun__Sun');
var btn_Mercury__Sun = document.querySelector('.Button_Mercury__Sun');
var btn_Venus__Sun = document.querySelector('.Button_Venus__Sun');
var btn_Earth__Sun = document.querySelector('.Button_Earth__Sun');
var btn_Mars__Sun = document.querySelector('.Button_Mars__Sun');
var btn_Jupiter__Sun = document.querySelector('.Button_Jupiter__Sun');
var btn_Saturn__Sun = document.querySelector('.Button_Saturn__Sun');
var btn_Uranus__Sun = document.querySelector('.Button_Uranus__Sun');
var btn_Neptune__Sun = document.querySelector('.Button_Neptune__Sun');
// ---------
var btn_Above__Sun = document.querySelector('.Button_Above__Sun');
var btn_Side__Sun = document.querySelector('.Button_Side__Sun');
var btn_Angle__Sun = document.querySelector('.Button_Angle__Sun');

// Mercury
var frame_Choose_Object__Mercury = document.querySelector('.Frame_Choose_Object__Mercury');
var btn_Setting_Choose_Objects__Mercury = document.querySelector('.btn_setting_choose_object__Mercury');
// ---------
var btn_Sun__Mercury = document.querySelector('.Button_Sun__Mercury');
var btn_Mercury__Mercury = document.querySelector('.Button_Mercury__Mercury');
var btn_Venus__Mercury = document.querySelector('.Button_Venus__Mercury');
var btn_Earth__Mercury = document.querySelector('.Button_Earth__Mercury');
var btn_Mars__Mercury = document.querySelector('.Button_Mars__Mercury');
var btn_Jupiter__Mercury = document.querySelector('.Button_Jupiter__Mercury');
var btn_Saturn__Mercury = document.querySelector('.Button_Saturn__Mercury');
var btn_Uranus__Mercury = document.querySelector('.Button_Uranus__Mercury');
var btn_Neptune__Mercury = document.querySelector('.Button_Neptune__Mercury');
// ---------
var btn_Above__Mercury = document.querySelector('.Button_Above__Mercury');
var btn_Side__Mercury = document.querySelector('.Button_Side__Mercury');
var btn_Angle__Mercury = document.querySelector('.Button_Angle__Mercury');

// Venus
var frame_Choose_Object__Venus = document.querySelector('.Frame_Choose_Object__Venus');
var btn_Setting_Choose_Objects__Venus = document.querySelector('.btn_setting_choose_object__Venus');
// ---------
var btn_Sun__Venus = document.querySelector('.Button_Sun__Venus');
var btn_Mercury__Venus = document.querySelector('.Button_Mercury__Venus');
var btn_Venus__Venus = document.querySelector('.Button_Venus__Venus');
var btn_Earth__Venus = document.querySelector('.Button_Earth__Venus');
var btn_Mars__Venus = document.querySelector('.Button_Mars__Venus');
var btn_Jupiter__Venus = document.querySelector('.Button_Jupiter__Venus');
var btn_Saturn__Venus = document.querySelector('.Button_Saturn__Venus');
var btn_Uranus__Venus = document.querySelector('.Button_Uranus__Venus');
var btn_Neptune__Venus = document.querySelector('.Button_Neptune__Venus');
// ---------
var btn_Above__Venus = document.querySelector('.Button_Above__Venus');
var btn_Side__Venus = document.querySelector('.Button_Side__Venus');
var btn_Angle__Venus = document.querySelector('.Button_Angle__Venus');

// Earth
var frame_Choose_Object__Earth = document.querySelector('.Frame_Choose_Object__Earth');
var btn_Setting_Choose_Objects__Earth = document.querySelector('.btn_setting_choose_object__Earth');
// ---------
var btn_Sun__Earth = document.querySelector('.Button_Sun__Earth');
var btn_Mercury__Earth = document.querySelector('.Button_Mercury__Earth');
var btn_Venus__Earth = document.querySelector('.Button_Venus__Earth');
var btn_Earth__Earth = document.querySelector('.Button_Earth__Earth');
var btn_Mars__Earth = document.querySelector('.Button_Mars__Earth');
var btn_Jupiter__Earth = document.querySelector('.Button_Jupiter__Earth');
var btn_Saturn__Earth = document.querySelector('.Button_Saturn__Earth');
var btn_Uranus__Earth = document.querySelector('.Button_Uranus__Earth');
var btn_Neptune__Earth = document.querySelector('.Button_Neptune__Earth');
// ---------
var btn_Above__Earth = document.querySelector('.Button_Above__Earth');
var btn_Side__Earth = document.querySelector('.Button_Side__Earth');
var btn_Angle__Earth = document.querySelector('.Button_Angle__Earth');

// Mars
var frame_Choose_Object__Mars = document.querySelector('.Frame_Choose_Object__Mars');
var btn_Setting_Choose_Objects__Mars = document.querySelector('.btn_setting_choose_object__Mars');
// ---------
var btn_Sun__Mars = document.querySelector('.Button_Sun__Mars');
var btn_Mercury__Mars = document.querySelector('.Button_Mercury__Mars');
var btn_Venus__Mars = document.querySelector('.Button_Venus__Mars');
var btn_Earth__Mars = document.querySelector('.Button_Earth__Mars');
var btn_Mars__Mars = document.querySelector('.Button_Mars__Mars');
var btn_Jupiter__Mars = document.querySelector('.Button_Jupiter__Mars');
var btn_Saturn__Mars = document.querySelector('.Button_Saturn__Mars');
var btn_Uranus__Mars = document.querySelector('.Button_Uranus__Mars');
var btn_Neptune__Mars = document.querySelector('.Button_Neptune__Mars');
// ---------
var btn_Above__Mars = document.querySelector('.Button_Above__Mars');
var btn_Side__Mars = document.querySelector('.Button_Side__Mars');
var btn_Angle__Mars = document.querySelector('.Button_Angle__Mars');

// Jupiter
var frame_Choose_Object__Jupiter = document.querySelector('.Frame_Choose_Object__Jupiter');
var btn_Setting_Choose_Objects__Jupiter = document.querySelector('.btn_setting_choose_object__Jupiter');
// ---------
var btn_Sun__Jupiter = document.querySelector('.Button_Sun__Jupiter');
var btn_Mercury__Jupiter = document.querySelector('.Button_Mercury__Jupiter');
var btn_Venus__Jupiter = document.querySelector('.Button_Venus__Jupiter');
var btn_Earth__Jupiter = document.querySelector('.Button_Earth__Jupiter');
var btn_Mars__Jupiter = document.querySelector('.Button_Mars__Jupiter');
var btn_Jupiter__Jupiter = document.querySelector('.Button_Jupiter__Jupiter');
var btn_Saturn__Jupiter = document.querySelector('.Button_Saturn__Jupiter');
var btn_Uranus__Jupiter = document.querySelector('.Button_Uranus__Jupiter');
var btn_Neptune__Jupiter = document.querySelector('.Button_Neptune__Jupiter');
// ---------
var btn_Above__Jupiter = document.querySelector('.Button_Above__Jupiter');
var btn_Side__Jupiter = document.querySelector('.Button_Side__Jupiter');
var btn_Angle__Jupiter = document.querySelector('.Button_Angle__Jupiter');

// Saturn
var frame_Choose_Object__Saturn = document.querySelector('.Frame_Choose_Object__Saturn');
var btn_Setting_Choose_Objects__Saturn = document.querySelector('.btn_setting_choose_object__Saturn');
// ---------
var btn_Sun__Saturn = document.querySelector('.Button_Sun__Saturn');
var btn_Mercury__Saturn = document.querySelector('.Button_Mercury__Saturn');
var btn_Venus__Saturn = document.querySelector('.Button_Venus__Saturn');
var btn_Earth__Saturn = document.querySelector('.Button_Earth__Saturn');
var btn_Mars__Saturn = document.querySelector('.Button_Mars__Saturn');
var btn_Jupiter__Saturn = document.querySelector('.Button_Jupiter__Saturn');
var btn_Saturn__Saturn = document.querySelector('.Button_Saturn__Saturn');
var btn_Uranus__Saturn = document.querySelector('.Button_Uranus__Saturn');
var btn_Neptune__Saturn = document.querySelector('.Button_Neptune__Saturn');
// ---------
var btn_Above__Saturn = document.querySelector('.Button_Above__Saturn');
var btn_Side__Saturn = document.querySelector('.Button_Side__Saturn');
var btn_Angle__Saturn = document.querySelector('.Button_Angle__Saturn');

// Uranus
var frame_Choose_Object__Uranus = document.querySelector('.Frame_Choose_Object__Uranus');
var btn_Setting_Choose_Objects__Uranus = document.querySelector('.btn_setting_choose_object__Uranus');
// ---------
var btn_Sun__Uranus = document.querySelector('.Button_Sun__Uranus');
var btn_Mercury__Uranus = document.querySelector('.Button_Mercury__Uranus');
var btn_Venus__Uranus = document.querySelector('.Button_Venus__Uranus');
var btn_Earth__Uranus = document.querySelector('.Button_Earth__Uranus');
var btn_Mars__Uranus = document.querySelector('.Button_Mars__Uranus');
var btn_Jupiter__Uranus = document.querySelector('.Button_Jupiter__Uranus');
var btn_Saturn__Uranus = document.querySelector('.Button_Saturn__Uranus');
var btn_Uranus__Uranus = document.querySelector('.Button_Uranus__Uranus');
var btn_Neptune__Uranus = document.querySelector('.Button_Neptune__Uranus');
// ---------
var btn_Above__Uranus = document.querySelector('.Button_Above__Uranus');
var btn_Side__Uranus = document.querySelector('.Button_Side__Uranus');
var btn_Angle__Uranus = document.querySelector('.Button_Angle__Uranus');

// Neptune
var frame_Choose_Object__Neptune = document.querySelector('.Frame_Choose_Object__Neptune');
var btn_Setting_Choose_Objects__Neptune = document.querySelector('.btn_setting_choose_object__Neptune');
// ---------
var btn_Sun__Neptune = document.querySelector('.Button_Sun__Neptune');
var btn_Mercury__Neptune = document.querySelector('.Button_Mercury__Neptune');
var btn_Venus__Neptune = document.querySelector('.Button_Venus__Neptune');
var btn_Earth__Neptune = document.querySelector('.Button_Earth__Neptune');
var btn_Mars__Neptune = document.querySelector('.Button_Mars__Neptune');
var btn_Jupiter__Neptune = document.querySelector('.Button_Jupiter__Neptune');
var btn_Saturn__Neptune = document.querySelector('.Button_Saturn__Neptune');
var btn_Uranus__Neptune = document.querySelector('.Button_Uranus__Neptune');
var btn_Neptune__Neptune = document.querySelector('.Button_Neptune__Neptune');
// ---------
var btn_Above__Neptune = document.querySelector('.Button_Above__Neptune');
var btn_Side__Neptune = document.querySelector('.Button_Side__Neptune');
var btn_Angle__Neptune = document.querySelector('.Button_Angle__Neptune');



// Информация об объекте
// Start
var frame_Information__Start = document.querySelectorAll('.obj__Start');
var btn_Back__Start = document.querySelector('.btn_back__Start');
var btn_Setting_Obj__Start = document.querySelector('.btn_setting_obj__Start');
var frame_Sun__Start = document.querySelector('.Frame_Sun__Start');
var frame_Mercury__Start = document.querySelector('.Frame_Mercury__Start');
var frame_Venus__Start = document.querySelector('.Frame_Venus__Start');
var frame_Earth__Start = document.querySelector('.Frame_Earth__Start');
var frame_Mars__Start = document.querySelector('.Frame_Mars__Start');
var frame_Jupiter__Start = document.querySelector('.Frame_Jupiter__Start');
var frame_Saturn__Start = document.querySelector('.Frame_Saturn__Start');
var frame_Uranus__Start = document.querySelector('.Frame_Uranus__Start');
var frame_Neptune__Start = document.querySelector('.Frame_Neptune__Start');
// Sun
var frame_Information__Sun = document.querySelectorAll('.obj__Sun');
var btn_Back__Sun = document.querySelector('.btn_back__Sun');
var btn_Setting_Obj__Sun = document.querySelector('.btn_setting_obj__Sun');
var frame_Sun__Sun = document.querySelector('.Frame_Sun__Sun');
var frame_Mercury__Sun = document.querySelector('.Frame_Mercury__Sun');
var frame_Venus__Sun = document.querySelector('.Frame_Venus__Sun');
var frame_Earth__Sun = document.querySelector('.Frame_Earth__Sun');
var frame_Mars__Sun = document.querySelector('.Frame_Mars__Sun');
var frame_Jupiter__Sun = document.querySelector('.Frame_Jupiter__Sun');
var frame_Saturn__Sun = document.querySelector('.Frame_Saturn__Sun');
var frame_Uranus__Sun = document.querySelector('.Frame_Uranus__Sun');
var frame_Neptune__Sun = document.querySelector('.Frame_Neptune__Sun');
// Mercury
var frame_Information__Mercury = document.querySelectorAll('.obj__Mercury');
var btn_Back__Mercury = document.querySelector('.btn_back__Mercury');
var btn_Setting_Obj__Mercury = document.querySelector('.btn_setting_obj__Mercury');
var frame_Sun__Mercury = document.querySelector('.Frame_Sun__Mercury');
var frame_Mercury__Mercury = document.querySelector('.Frame_Mercury__Mercury');
var frame_Venus__Mercury = document.querySelector('.Frame_Venus__Mercury');
var frame_Earth__Mercury = document.querySelector('.Frame_Earth__Mercury');
var frame_Mars__Mercury = document.querySelector('.Frame_Mars__Mercury');
var frame_Jupiter__Mercury = document.querySelector('.Frame_Jupiter__Mercury');
var frame_Saturn__Mercury = document.querySelector('.Frame_Saturn__Mercury');
var frame_Uranus__Mercury = document.querySelector('.Frame_Uranus__Mercury');
var frame_Neptune__Mercury = document.querySelector('.Frame_Neptune__Mercury');
// Venus
var frame_Information__Venus = document.querySelectorAll('.obj__Venus');
var btn_Back__Venus = document.querySelector('.btn_back__Venus');
var btn_Setting_Obj__Venus = document.querySelector('.btn_setting_obj__Venus');
var frame_Sun__Venus = document.querySelector('.Frame_Sun__Venus');
var frame_Mercury__Venus = document.querySelector('.Frame_Mercury__Venus');
var frame_Venus__Venus = document.querySelector('.Frame_Venus__Venus');
var frame_Earth__Venus = document.querySelector('.Frame_Earth__Venus');
var frame_Mars__Venus = document.querySelector('.Frame_Mars__Venus');
var frame_Jupiter__Venus = document.querySelector('.Frame_Jupiter__Venus');
var frame_Saturn__Venus = document.querySelector('.Frame_Saturn__Venus');
var frame_Uranus__Venus = document.querySelector('.Frame_Uranus__Venus');
var frame_Neptune__Venus = document.querySelector('.Frame_Neptune__Venus');
// Earth
var frame_Information__Earth = document.querySelectorAll('.obj__Earth');
var btn_Back__Earth = document.querySelector('.btn_back__Earth');
var btn_Setting_Obj__Earth = document.querySelector('.btn_setting_obj__Earth');
var frame_Sun__Earth = document.querySelector('.Frame_Sun__Earth');
var frame_Mercury__Earth = document.querySelector('.Frame_Mercury__Earth');
var frame_Venus__Earth = document.querySelector('.Frame_Venus__Earth');
var frame_Earth__Earth = document.querySelector('.Frame_Earth__Earth');
var frame_Mars__Earth = document.querySelector('.Frame_Mars__Earth');
var frame_Jupiter__Earth = document.querySelector('.Frame_Jupiter__Earth');
var frame_Saturn__Earth = document.querySelector('.Frame_Saturn__Earth');
var frame_Uranus__Earth = document.querySelector('.Frame_Uranus__Earth');
var frame_Neptune__Earth = document.querySelector('.Frame_Neptune__Earth');
// Mars
var frame_Information__Mars = document.querySelectorAll('.obj__Mars');
var btn_Back__Mars = document.querySelector('.btn_back__Mars');
var btn_Setting_Obj__Mars = document.querySelector('.btn_setting_obj__Mars');
var frame_Sun__Mars = document.querySelector('.Frame_Sun__Mars');
var frame_Mercury__Mars = document.querySelector('.Frame_Mercury__Mars');
var frame_Venus__Mars = document.querySelector('.Frame_Venus__Mars');
var frame_Earth__Mars = document.querySelector('.Frame_Earth__Mars');
var frame_Mars__Mars = document.querySelector('.Frame_Mars__Mars');
var frame_Jupiter__Mars = document.querySelector('.Frame_Jupiter__Mars');
var frame_Saturn__Mars = document.querySelector('.Frame_Saturn__Mars');
var frame_Uranus__Mars = document.querySelector('.Frame_Uranus__Mars');
var frame_Neptune__Mars = document.querySelector('.Frame_Neptune__Mars');
// Jupiter
var frame_Information__Jupiter = document.querySelectorAll('.obj__Jupiter');
var btn_Back__Jupiter = document.querySelector('.btn_back__Jupiter');
var btn_Setting_Obj__Jupiter = document.querySelector('.btn_setting_obj__Jupiter');
var frame_Sun__Jupiter = document.querySelector('.Frame_Sun__Jupiter');
var frame_Mercury__Jupiter = document.querySelector('.Frame_Mercury__Jupiter');
var frame_Venus__Jupiter = document.querySelector('.Frame_Venus__Jupiter');
var frame_Earth__Jupiter = document.querySelector('.Frame_Earth__Jupiter');
var frame_Mars__Jupiter = document.querySelector('.Frame_Mars__Jupiter');
var frame_Jupiter__Jupiter = document.querySelector('.Frame_Jupiter__Jupiter');
var frame_Saturn__Jupiter = document.querySelector('.Frame_Saturn__Jupiter');
var frame_Uranus__Jupiter = document.querySelector('.Frame_Uranus__Jupiter');
var frame_Neptune__Jupiter = document.querySelector('.Frame_Neptune__Jupiter');
// Saturn
var frame_Information__Saturn = document.querySelectorAll('.obj__Saturn');
var btn_Back__Saturn = document.querySelector('.btn_back__Saturn');
var btn_Setting_Obj__Saturn = document.querySelector('.btn_setting_obj__Saturn');
var frame_Sun__Saturn = document.querySelector('.Frame_Sun__Saturn');
var frame_Mercury__Saturn = document.querySelector('.Frame_Mercury__Saturn');
var frame_Venus__Saturn = document.querySelector('.Frame_Venus__Saturn');
var frame_Earth__Saturn = document.querySelector('.Frame_Earth__Saturn');
var frame_Mars__Saturn = document.querySelector('.Frame_Mars__Saturn');
var frame_Jupiter__Saturn = document.querySelector('.Frame_Jupiter__Saturn');
var frame_Saturn__Saturn = document.querySelector('.Frame_Saturn__Saturn');
var frame_Uranus__Saturn = document.querySelector('.Frame_Uranus__Saturn');
var frame_Neptune__Saturn = document.querySelector('.Frame_Neptune__Saturn');
// Uranus
var frame_Information__Uranus = document.querySelectorAll('.obj__Uranus');
var btn_Back__Uranus = document.querySelector('.btn_back__Uranus');
var btn_Setting_Obj__Uranus = document.querySelector('.btn_setting_obj__Uranus');
var frame_Sun__Uranus = document.querySelector('.Frame_Sun__Uranus');
var frame_Mercury__Uranus = document.querySelector('.Frame_Mercury__Uranus');
var frame_Venus__Uranus = document.querySelector('.Frame_Venus__Uranus');
var frame_Earth__Uranus = document.querySelector('.Frame_Earth__Uranus');
var frame_Mars__Uranus = document.querySelector('.Frame_Mars__Uranus');
var frame_Jupiter__Uranus = document.querySelector('.Frame_Jupiter__Uranus');
var frame_Saturn__Uranus = document.querySelector('.Frame_Saturn__Uranus');
var frame_Uranus__Uranus = document.querySelector('.Frame_Uranus__Uranus');
var frame_Neptune__Uranus = document.querySelector('.Frame_Neptune__Uranus');
// Neptune
var frame_Information__Neptune = document.querySelectorAll('.obj__Neptune');
var btn_Back__Neptune = document.querySelector('.btn_back__Neptune');
var btn_Setting_Obj__Neptune = document.querySelector('.btn_setting_obj__Neptune');
var frame_Sun__Neptune = document.querySelector('.Frame_Sun__Neptune');
var frame_Mercury__Neptune = document.querySelector('.Frame_Mercury__Neptune');
var frame_Venus__Neptune = document.querySelector('.Frame_Venus__Neptune');
var frame_Earth__Neptune = document.querySelector('.Frame_Earth__Neptune');
var frame_Mars__Neptune = document.querySelector('.Frame_Mars__Neptune');
var frame_Jupiter__Neptune = document.querySelector('.Frame_Jupiter__Neptune');
var frame_Saturn__Neptune = document.querySelector('.Frame_Saturn__Neptune');
var frame_Uranus__Neptune = document.querySelector('.Frame_Uranus__Neptune');
var frame_Neptune__Neptune = document.querySelector('.Frame_Neptune__Neptune');


// Аудио
var audio = document.querySelectorAll('.audio');
var audio_Sun = document.querySelector('.Audio_Sun');
var audio_Mercury = document.querySelector('.Audio_Mercury');
var audio_Venus = document.querySelector('.Audio_Venus');
var audio_Earth = document.querySelector('.Audio_Earth');
var audio_Mars = document.querySelector('.Audio_Mars');
var audio_Jupiter = document.querySelector('.Audio_Jupiter');
var audio_Saturn = document.querySelector('.Audio_Saturn');
var audio_Uranus = document.querySelector('.Audio_Uranus');
var audio_Neptune = document.querySelector('.Audio_Neptune');



// Отключаем все кнопки, кроме действующего экрана
buttons_Off_All();
buttons_On_Setting__Start();


// Выбор режима представляемой информации
// Start
btn_Text__Start.addEventListener('click', function(){
  choose_Mode_Function__Start('text');
})

btn_Audio__Start.addEventListener('click', function(){
  choose_Mode_Function__Start('audio');
})

// Sun
btn_Text__Sun.addEventListener('click', function(){
  choose_Mode_Function__Sun('text');
})

btn_Audio__Sun.addEventListener('click', function(){
  choose_Mode_Function__Sun('audio');
})

// Mercury
btn_Text__Mercury.addEventListener('click', function(){
  choose_Mode_Function__Mercury('text');
})

btn_Audio__Mercury.addEventListener('click', function(){
  choose_Mode_Function__Mercury('audio');
})

// Venus
btn_Text__Venus.addEventListener('click', function(){
  choose_Mode_Function__Venus('text');
})

btn_Audio__Venus.addEventListener('click', function(){
  choose_Mode_Function__Venus('audio');
})

// Earth
btn_Text__Earth.addEventListener('click', function(){
  choose_Mode_Function__Earth('text');
})

btn_Audio__Earth.addEventListener('click', function(){
  choose_Mode_Function__Earth('audio');
})

// Mars
btn_Text__Mars.addEventListener('click', function(){
  choose_Mode_Function__Mars('text');
})

btn_Audio__Mars.addEventListener('click', function(){
  choose_Mode_Function__Mars('audio');
})

// Jupiter
btn_Text__Jupiter.addEventListener('click', function(){
  choose_Mode_Function__Jupiter('text');
})

btn_Audio__Jupiter.addEventListener('click', function(){
  choose_Mode_Function__Jupiter('audio');
})

// Saturn
btn_Text__Saturn.addEventListener('click', function(){
  choose_Mode_Function__Saturn('text');
})

btn_Audio__Saturn.addEventListener('click', function(){
  choose_Mode_Function__Saturn('audio');
})

// Uranus
btn_Text__Uranus.addEventListener('click', function(){
  choose_Mode_Function__Uranus('text');
})

btn_Audio__Uranus.addEventListener('click', function(){
  choose_Mode_Function__Uranus('audio');
})

// Neptune
btn_Text__Neptune.addEventListener('click', function(){
  choose_Mode_Function__Neptune('text');
})

btn_Audio__Neptune.addEventListener('click', function(){
  choose_Mode_Function__Neptune('audio');
})




// Настройки из выбора
// Start
btn_Setting_Choose_Objects__Start.addEventListener('click', function(){
  audio_Stop();
  frame_Choose_Object__Start.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Mode__Start.object3D.visible = true;
  buttons_On_Setting__Start();
})

// Sun
btn_Setting_Choose_Objects__Sun.addEventListener('click', function(){
  audio_Stop();
  frame_Choose_Object__Sun.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Mode__Sun.object3D.visible = true;
  buttons_On_Setting__Sun();
})

// Mercury
btn_Setting_Choose_Objects__Mercury.addEventListener('click', function(){
  audio_Stop();
  frame_Choose_Object__Mercury.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Mode__Mercury.object3D.visible = true;
  buttons_On_Setting__Mercury();
})

// Venus
btn_Setting_Choose_Objects__Venus.addEventListener('click', function(){
  audio_Stop();
  frame_Choose_Object__Venus.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Mode__Venus.object3D.visible = true;
  buttons_On_Setting__Venus();
})

// Earth
btn_Setting_Choose_Objects__Earth.addEventListener('click', function(){
  audio_Stop();
  frame_Choose_Object__Earth.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Mode__Earth.object3D.visible = true;
  buttons_On_Setting__Earth();
})

// Mars
btn_Setting_Choose_Objects__Mars.addEventListener('click', function(){
  audio_Stop();
  frame_Choose_Object__Mars.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Mode__Mars.object3D.visible = true;
  buttons_On_Setting__Mars();
})

// Jupiter
btn_Setting_Choose_Objects__Jupiter.addEventListener('click', function(){
  audio_Stop();
  frame_Choose_Object__Jupiter.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Mode__Jupiter.object3D.visible = true;
  buttons_On_Setting__Jupiter();
})

// Saturn
btn_Setting_Choose_Objects__Saturn.addEventListener('click', function(){
  audio_Stop();
  frame_Choose_Object__Saturn.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Mode__Saturn.object3D.visible = true;
  buttons_On_Setting__Saturn();
})

// Uranus
btn_Setting_Choose_Objects__Uranus.addEventListener('click', function(){
  audio_Stop();
  frame_Choose_Object__Uranus.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Mode__Uranus.object3D.visible = true;
  buttons_On_Setting__Uranus();
})

// Neptune
btn_Setting_Choose_Objects__Neptune.addEventListener('click', function(){
  audio_Stop();
  frame_Choose_Object__Neptune.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Mode__Neptune.object3D.visible = true;
  buttons_On_Setting__Neptune();
})



// Смена обзора
// Start
btn_Above__Start.addEventListener('click', function(){
  camera_Change_Position__Start('above', false);
})

btn_Side__Start.addEventListener('click', function(){
  camera_Change_Position__Start('side', false);
})

btn_Angle__Start.addEventListener('click', function(){
  camera_Change_Position__Start('angle', false);
})

// Sun
btn_Above__Sun.addEventListener('click', function(){
  camera_Change_Position__Start('above', true);
})

btn_Side__Sun.addEventListener('click', function(){
  camera_Change_Position__Start('side', true);
})

btn_Angle__Sun.addEventListener('click', function(){
  camera_Change_Position__Start('angle', true);
})

// Mercury
btn_Above__Mercury.addEventListener('click', function(){
  camera_Change_Position__Start('above', true);
})

btn_Side__Mercury.addEventListener('click', function(){
  camera_Change_Position__Start('side', true);
})

btn_Angle__Mercury.addEventListener('click', function(){
  camera_Change_Position__Start('angle', true);
})

// Venus
btn_Above__Venus.addEventListener('click', function(){
  camera_Change_Position__Start('above', true);
})

btn_Side__Venus.addEventListener('click', function(){
  camera_Change_Position__Start('side', true);
})

btn_Angle__Venus.addEventListener('click', function(){
  camera_Change_Position__Start('angle', true);
})

// Earth
btn_Above__Earth.addEventListener('click', function(){
  camera_Change_Position__Start('above', true);
})

btn_Side__Earth.addEventListener('click', function(){
  camera_Change_Position__Start('side', true);
})

btn_Angle__Earth.addEventListener('click', function(){
  camera_Change_Position__Start('angle', true);
})

// Mars
btn_Above__Mars.addEventListener('click', function(){
  camera_Change_Position__Start('above', true);
})

btn_Side__Mars.addEventListener('click', function(){
  camera_Change_Position__Start('side', true);
})

btn_Angle__Mars.addEventListener('click', function(){
  camera_Change_Position__Start('angle', true);
})

// Jupiter
btn_Above__Jupiter.addEventListener('click', function(){
  camera_Change_Position__Start('above', true);
})

btn_Side__Jupiter.addEventListener('click', function(){
  camera_Change_Position__Start('side', true);
})

btn_Angle__Jupiter.addEventListener('click', function(){
  camera_Change_Position__Start('angle', true);
})

// Saturn
btn_Above__Saturn.addEventListener('click', function(){
  camera_Change_Position__Start('above', true);
})

btn_Side__Saturn.addEventListener('click', function(){
  camera_Change_Position__Start('side', true);
})

btn_Angle__Saturn.addEventListener('click', function(){
  camera_Change_Position__Start('angle', true);
})

// Uranus
btn_Above__Uranus.addEventListener('click', function(){
  camera_Change_Position__Start('above', true);
})

btn_Side__Uranus.addEventListener('click', function(){
  camera_Change_Position__Start('side', true);
})

btn_Angle__Uranus.addEventListener('click', function(){
  camera_Change_Position__Start('angle', true);
})

// Neptune
btn_Above__Neptune.addEventListener('click', function(){
  camera_Change_Position__Start('above', true);
})

btn_Side__Neptune.addEventListener('click', function(){
  camera_Change_Position__Start('side', true);
})

btn_Angle__Neptune.addEventListener('click', function(){
  camera_Change_Position__Start('angle', true);
})



// Выбор объекта
// Start
// Солнце
btn_Sun__Start.addEventListener('click', function(){

  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Start.object3D.visible = false;
    camera__Start.setAttribute('camera', 'active', false);
    camera__Sun.setAttribute('camera', 'active', true);
    platform__Sun.object3D.visible = true;
    frame_Sun__Sun.object3D.visible = true;
    buttons_On_Informations__Sun();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Start.object3D.visible = false;
    camera__Start.setAttribute('camera', 'active', false);
    camera__Sun.setAttribute('camera', 'active', true);
    platform__Sun.object3D.visible = true;
    frame_Choose_Object__Sun.object3D.visible = true;
    buttons_On_Objects__Sun();
    audio_Sun.play();
  }
})

// Меркурий
btn_Mercury__Start.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Start.object3D.visible = false;
    camera__Start.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', true);
    platform__Mercury.object3D.visible = true;
    frame_Mercury__Mercury.object3D.visible = true;
    buttons_On_Informations__Mercury();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Start.object3D.visible = false;
    camera__Start.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', true);
    platform__Mercury.object3D.visible = true;
    frame_Choose_Object__Mercury.object3D.visible = true;
    buttons_On_Objects__Mercury();
    audio_Mercury.play();
  }
})

//Венера
btn_Venus__Start.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Start.object3D.visible = false;
    camera__Start.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Venus__Venus.object3D.visible = true;
    buttons_On_Informations__Venus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Start.object3D.visible = false;
    camera__Start.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Choose_Object__Venus.object3D.visible = true;
    buttons_On_Objects__Venus();
    audio_Venus.play();
  }
})

//Земля
btn_Earth__Start.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Start.object3D.visible = false;
    camera__Start.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Earth__Earth.object3D.visible = true;
    buttons_On_Informations__Earth();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Start.object3D.visible = false;
    camera__Start.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Choose_Object__Earth.object3D.visible = true;
    buttons_On_Objects__Earth();
    audio_Earth.play();
  }
})

//Марс
btn_Mars__Start.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Start.object3D.visible = false;
    camera__Start.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Mars__Mars.object3D.visible = true;
    buttons_On_Informations__Mars();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Start.object3D.visible = false;
    camera__Start.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Choose_Object__Mars.object3D.visible = true;
    buttons_On_Objects__Mars();
    audio_Mars.play();
  }
})

//Юпитер
btn_Jupiter__Start.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Start.object3D.visible = false;
    camera__Start.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Jupiter__Jupiter.object3D.visible = true;
    buttons_On_Informations__Jupiter();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Start.object3D.visible = false;
    camera__Start.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Choose_Object__Jupiter.object3D.visible = true;
    buttons_On_Objects__Jupiter();
    audio_Jupiter.play();
  }
})

//Сатурн
btn_Saturn__Start.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Start.object3D.visible = false;
    camera__Start.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Saturn__Saturn.object3D.visible = true;
    buttons_On_Informations__Saturn();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Start.object3D.visible = false;
    camera__Start.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Choose_Object__Saturn.object3D.visible = true;
    buttons_On_Objects__Saturn();
    audio_Saturn.play();
  }
})

//Уран
btn_Uranus__Start.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Start.object3D.visible = false;
    camera__Start.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Uranus__Uranus.object3D.visible = true;
    buttons_On_Informations__Uranus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Start.object3D.visible = false;
    camera__Start.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Choose_Object__Uranus.object3D.visible = true;
    buttons_On_Objects__Uranus();
    audio_Uranus.play();
  }
})

//Нептун
btn_Neptune__Start.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Start.object3D.visible = false;
    camera__Start.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Neptune__Neptune.object3D.visible = true;
    buttons_On_Informations__Neptune();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Start.object3D.visible = false;
    camera__Start.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Choose_Object__Neptune.object3D.visible = true;
    buttons_On_Objects__Neptune();
    audio_Neptune.play();
  }
})

// Sun
// Солнце
btn_Sun__Sun.addEventListener('click', function(){

  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Sun.object3D.visible = false;
    camera__Sun.setAttribute('camera', 'active', false);
    camera__Sun.setAttribute('camera', 'active', true);
    platform__Sun.object3D.visible = true;
    frame_Sun__Sun.object3D.visible = true;
    buttons_On_Informations__Sun();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Sun.object3D.visible = false;
    camera__Sun.setAttribute('camera', 'active', false);
    camera__Sun.setAttribute('camera', 'active', true);
    platform__Sun.object3D.visible = true;
    frame_Choose_Object__Sun.object3D.visible = true;
    buttons_On_Objects__Sun();
    audio_Sun.play();
  }
})

// Меркурий
btn_Mercury__Sun.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Sun.object3D.visible = false;
    camera__Sun.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', true);
    platform__Mercury.object3D.visible = true;
    frame_Mercury__Mercury.object3D.visible = true;
    buttons_On_Informations__Mercury();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Sun.object3D.visible = false;
    camera__Sun.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', true);
    platform__Mercury.object3D.visible = true;
    frame_Choose_Object__Mercury.object3D.visible = true;
    buttons_On_Objects__Mercury();
    audio_Mercury.play();
  }
})

//Венера
btn_Venus__Sun.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Sun.object3D.visible = false;
    camera__Sun.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Venus__Venus.object3D.visible = true;
    buttons_On_Informations__Venus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Sun.object3D.visible = false;
    camera__Sun.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Choose_Object__Venus.object3D.visible = true;
    buttons_On_Objects__Venus();
    audio_Venus.play();
  }
})

//Земля
btn_Earth__Sun.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Sun.object3D.visible = false;
    camera__Sun.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Earth__Earth.object3D.visible = true;
    buttons_On_Informations__Earth();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Sun.object3D.visible = false;
    camera__Sun.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Choose_Object__Earth.object3D.visible = true;
    buttons_On_Objects__Earth();
    audio_Earth.play();
  }
})

//Марс
btn_Mars__Sun.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Sun.object3D.visible = false;
    camera__Sun.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Mars__Mars.object3D.visible = true;
    buttons_On_Informations__Mars();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Sun.object3D.visible = false;
    camera__Sun.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Choose_Object__Mars.object3D.visible = true;
    buttons_On_Objects__Mars();
    audio_Mars.play();
  }
})

//Юпитер
btn_Jupiter__Sun.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Sun.object3D.visible = false;
    camera__Sun.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Jupiter__Jupiter.object3D.visible = true;
    buttons_On_Informations__Jupiter();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Sun.object3D.visible = false;
    camera__Sun.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Choose_Object__Jupiter.object3D.visible = true;
    buttons_On_Objects__Jupiter();
    audio_Jupiter.play();
  }
})

//Сатурн
btn_Saturn__Sun.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Sun.object3D.visible = false;
    camera__Sun.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Saturn__Saturn.object3D.visible = true;
    buttons_On_Informations__Saturn();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Sun.object3D.visible = false;
    camera__Sun.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Choose_Object__Saturn.object3D.visible = true;
    buttons_On_Objects__Saturn();
    audio_Saturn.play();
  }
})

//Уран
btn_Uranus__Sun.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Sun.object3D.visible = false;
    camera__Sun.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Uranus__Uranus.object3D.visible = true;
    buttons_On_Informations__Uranus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Sun.object3D.visible = false;
    camera__Sun.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Choose_Object__Uranus.object3D.visible = true;
    buttons_On_Objects__Uranus();
    audio_Uranus.play();
  }
})

//Нептун
btn_Neptune__Sun.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Sun.object3D.visible = false;
    camera__Sun.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Neptune__Neptune.object3D.visible = true;
    buttons_On_Informations__Neptune();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Sun.object3D.visible = false;
    camera__Sun.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Choose_Object__Neptune.object3D.visible = true;
    buttons_On_Objects__Neptune();
    audio_Neptune.play();
  }
})

// Mercury
// Солнце
btn_Sun__Mercury.addEventListener('click', function(){

  if (mode == 'text')
    {
      buttons_Off_All();
      visible_Off_Frames();
      platform__Mercury.object3D.visible = false;
      camera__Mercury.setAttribute('camera', 'active', false);
      camera__Sun.setAttribute('camera', 'active', true);
      platform__Sun.object3D.visible = true;
      frame_Sun__Sun.object3D.visible = true;
      buttons_On_Informations__Sun();
    }
    else if (mode == 'audio')
    {
      audio_Stop();
      buttons_Off_All();
      visible_Off_Frames();
      platform__Mercury.object3D.visible = false;
      camera__Mercury.setAttribute('camera', 'active', false);
      camera__Sun.setAttribute('camera', 'active', true);
      platform__Sun.object3D.visible = true;
      frame_Choose_Object__Sun.object3D.visible = true;
      buttons_On_Objects__Sun();
      audio_Sun.play();
    }
})

// Меркурий
btn_Mercury__Mercury.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    frame_Mercury__Mercury.object3D.visible = true;
    buttons_On_Informations__Mercury();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    frame_Choose_Object__Mercury.object3D.visible = true;
    buttons_On_Objects__Mercury();
    audio_Mercury.play();
  }
})

//Венера
btn_Venus__Mercury.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mercury.object3D.visible = false;
    camera__Mercury.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Venus__Venus.object3D.visible = true;
    buttons_On_Informations__Venus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mercury.object3D.visible = false;
    camera__Mercury.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Choose_Object__Venus.object3D.visible = true;
    buttons_On_Objects__Venus();
    audio_Venus.play();
  }
})

//Земля
btn_Earth__Mercury.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mercury.object3D.visible = false;
    camera__Mercury.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Earth__Earth.object3D.visible = true;
    buttons_On_Informations__Earth();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mercury.object3D.visible = false;
    camera__Mercury.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Choose_Object__Earth.object3D.visible = true;
    buttons_On_Objects__Earth();
    audio_Earth.play();
  }
})

//Марс
btn_Mars__Mercury.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mercury.object3D.visible = false;
    camera__Mercury.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Mars__Mars.object3D.visible = true;
    buttons_On_Informations__Mars();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mercury.object3D.visible = false;
    camera__Mercury.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Choose_Object__Mars.object3D.visible = true;
    buttons_On_Objects__Mars();
    audio_Mars.play();
  }
})

//Юпитер
btn_Jupiter__Mercury.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mercury.object3D.visible = false;
    camera__Mercury.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Jupiter__Jupiter.object3D.visible = true;
    buttons_On_Informations__Jupiter();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mercury.object3D.visible = false;
    camera__Mercury.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Choose_Object__Jupiter.object3D.visible = true;
    buttons_On_Objects__Jupiter();
    audio_Jupiter.play();
  }
})

//Сатурн
btn_Saturn__Mercury.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mercury.object3D.visible = false;
    camera__Mercury.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Saturn__Saturn.object3D.visible = true;
    buttons_On_Informations__Saturn();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mercury.object3D.visible = false;
    camera__Mercury.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Choose_Object__Saturn.object3D.visible = true;
    buttons_On_Objects__Saturn();
    audio_Saturn.play();
  }
})

//Уран
btn_Uranus__Mercury.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mercury.object3D.visible = false;
    camera__Mercury.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Uranus__Uranus.object3D.visible = true;
    buttons_On_Informations__Uranus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mercury.object3D.visible = false;
    camera__Mercury.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Choose_Object__Uranus.object3D.visible = true;
    buttons_On_Objects__Uranus();
    audio_Uranus.play();
  }
})

//Нептун
btn_Neptune__Mercury.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mercury.object3D.visible = false;
    camera__Mercury.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Neptune__Neptune.object3D.visible = true;
    buttons_On_Informations__Neptune();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mercury.object3D.visible = false;
    camera__Mercury.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Choose_Object__Neptune.object3D.visible = true;
    buttons_On_Objects__Neptune();
    audio_Neptune.play();
  }
})

// Venus
// Солнце
btn_Sun__Venus.addEventListener('click', function(){

  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Venus.object3D.visible = false;
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Sun.setAttribute('camera', 'active', true);
    platform__Sun.object3D.visible = true;
    frame_Sun__Sun.object3D.visible = true;
    buttons_On_Informations__Sun();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Venus.object3D.visible = false;
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Sun.setAttribute('camera', 'active', true);
    platform__Sun.object3D.visible = true;
    frame_Choose_Object__Sun.object3D.visible = true;
    buttons_On_Objects__Sun();
    audio_Sun.play();
  }
})

// Меркурий
btn_Mercury__Venus.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Venus.object3D.visible = false;
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', true);
    platform__Mercury.object3D.visible = true;
    frame_Mercury__Mercury.object3D.visible = true;
    buttons_On_Informations__Mercury();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Venus.object3D.visible = false;
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', true);
    platform__Mercury.object3D.visible = true;
    frame_Choose_Object__Mercury.object3D.visible = true;
    buttons_On_Objects__Mercury();
    audio_Mercury.play();
  }
})

//Венера
btn_Venus__Venus.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Venus.object3D.visible = false;
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Venus__Venus.object3D.visible = true;
    buttons_On_Informations__Venus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Venus.object3D.visible = false;
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Choose_Object__Venus.object3D.visible = true;
    buttons_On_Objects__Venus();
    audio_Venus.play();
  }
})

//Земля
btn_Earth__Venus.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Venus.object3D.visible = false;
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Earth__Earth.object3D.visible = true;
    buttons_On_Informations__Earth();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Venus.object3D.visible = false;
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Choose_Object__Earth.object3D.visible = true;
    buttons_On_Objects__Earth();
    audio_Earth.play();
  }
})

//Марс
btn_Mars__Venus.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Venus.object3D.visible = false;
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Mars__Mars.object3D.visible = true;
    buttons_On_Informations__Mars();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Venus.object3D.visible = false;
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Choose_Object__Mars.object3D.visible = true;
    buttons_On_Objects__Mars();
    audio_Mars.play();
  }
})

//Юпитер
btn_Jupiter__Venus.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Venus.object3D.visible = false;
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Jupiter__Jupiter.object3D.visible = true;
    buttons_On_Informations__Jupiter();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Venus.object3D.visible = false;
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Choose_Object__Jupiter.object3D.visible = true;
    buttons_On_Objects__Jupiter();
    audio_Jupiter.play();
  }
})

//Сатурн
btn_Saturn__Venus.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Venus.object3D.visible = false;
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Saturn__Saturn.object3D.visible = true;
    buttons_On_Informations__Saturn();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Venus.object3D.visible = false;
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Choose_Object__Saturn.object3D.visible = true;
    buttons_On_Objects__Saturn();
    audio_Saturn.play();
  }
})

//Уран
btn_Uranus__Venus.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Venus.object3D.visible = false;
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Uranus__Uranus.object3D.visible = true;
    buttons_On_Informations__Uranus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Venus.object3D.visible = false;
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Choose_Object__Uranus.object3D.visible = true;
    buttons_On_Objects__Uranus();
    audio_Uranus.play();
  }
})

//Нептун
btn_Neptune__Venus.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Venus.object3D.visible = false;
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Neptune__Neptune.object3D.visible = true;
    buttons_On_Informations__Neptune();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Venus.object3D.visible = false;
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Choose_Object__Neptune.object3D.visible = true;
    buttons_On_Objects__Neptune();
    audio_Neptune.play();
  }
})

// Earth
// Солнце
btn_Sun__Earth.addEventListener('click', function(){

  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Earth.object3D.visible = false;
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Sun.setAttribute('camera', 'active', true);
    platform__Sun.object3D.visible = true;
    frame_Sun__Sun.object3D.visible = true;
    buttons_On_Informations__Sun();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Earth.object3D.visible = false;
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Sun.setAttribute('camera', 'active', true);
    platform__Sun.object3D.visible = true;
    frame_Choose_Object__Sun.object3D.visible = true;
    buttons_On_Objects__Sun();
    audio_Sun.play();
  }
})

// Меркурий
btn_Mercury__Earth.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Earth.object3D.visible = false;
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', true);
    platform__Mercury.object3D.visible = true;
    frame_Mercury__Mercury.object3D.visible = true;
    buttons_On_Informations__Mercury();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Earth.object3D.visible = false;
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', true);
    platform__Mercury.object3D.visible = true;
    frame_Choose_Object__Mercury.object3D.visible = true;
    buttons_On_Objects__Mercury();
    audio_Mercury.play();
  }
})

//Венера
btn_Venus__Earth.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Earth.object3D.visible = false;
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Venus__Venus.object3D.visible = true;
    buttons_On_Informations__Venus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Earth.object3D.visible = false;
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Choose_Object__Venus.object3D.visible = true;
    buttons_On_Objects__Venus();
    audio_Venus.play();
  }
})

//Земля
btn_Earth__Earth.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Earth.object3D.visible = false;
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Earth__Earth.object3D.visible = true;
    buttons_On_Informations__Earth();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Earth.object3D.visible = false;
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Choose_Object__Earth.object3D.visible = true;
    buttons_On_Objects__Earth();
    audio_Earth.play();
  }
})

//Марс
btn_Mars__Earth.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Earth.object3D.visible = false;
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Mars__Mars.object3D.visible = true;
    buttons_On_Informations__Mars();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Earth.object3D.visible = false;
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Choose_Object__Mars.object3D.visible = true;
    buttons_On_Objects__Mars();
    audio_Mars.play();
  }
})

//Юпитер
btn_Jupiter__Earth.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Earth.object3D.visible = false;
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Jupiter__Jupiter.object3D.visible = true;
    buttons_On_Informations__Jupiter();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Earth.object3D.visible = false;
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Choose_Object__Jupiter.object3D.visible = true;
    buttons_On_Objects__Jupiter();
    audio_Jupiter.play();
  }
})

//Сатурн
btn_Saturn__Earth.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Earth.object3D.visible = false;
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Saturn__Saturn.object3D.visible = true;
    buttons_On_Informations__Saturn();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Earth.object3D.visible = false;
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Choose_Object__Saturn.object3D.visible = true;
    buttons_On_Objects__Saturn();
    audio_Saturn.play();
  }
})

//Уран
btn_Uranus__Earth.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Earth.object3D.visible = false;
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Uranus__Uranus.object3D.visible = true;
    buttons_On_Informations__Uranus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Earth.object3D.visible = false;
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Choose_Object__Uranus.object3D.visible = true;
    buttons_On_Objects__Uranus();
    audio_Uranus.play();
  }
})

//Нептун
btn_Neptune__Earth.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Earth.object3D.visible = false;
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Neptune__Neptune.object3D.visible = true;
    buttons_On_Informations__Neptune();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Earth.object3D.visible = false;
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Choose_Object__Neptune.object3D.visible = true;
    buttons_On_Objects__Neptune();
    audio_Neptune.play();
  }
})

// Mars
// Солнце
btn_Sun__Mars.addEventListener('click', function(){

  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mars.object3D.visible = false;
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Sun.setAttribute('camera', 'active', true);
    platform__Sun.object3D.visible = true;
    frame_Sun__Sun.object3D.visible = true;
    buttons_On_Informations__Sun();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mars.object3D.visible = false;
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Sun.setAttribute('camera', 'active', true);
    platform__Sun.object3D.visible = true;
    frame_Choose_Object__Sun.object3D.visible = true;
    buttons_On_Objects__Sun();
    audio_Sun.play();
  }
})

// Меркурий
btn_Mercury__Mars.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mars.object3D.visible = false;
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', true);
    platform__Mercury.object3D.visible = true;
    frame_Mercury__Mercury.object3D.visible = true;
    buttons_On_Informations__Mercury();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mars.object3D.visible = false;
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', true);
    platform__Mercury.object3D.visible = true;
    frame_Choose_Object__Mercury.object3D.visible = true;
    buttons_On_Objects__Mercury();
    audio_Mercury.play();
  }
})

//Венера
btn_Venus__Mars.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mars.object3D.visible = false;
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Venus__Venus.object3D.visible = true;
    buttons_On_Informations__Venus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mars.object3D.visible = false;
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Choose_Object__Venus.object3D.visible = true;
    buttons_On_Objects__Venus();
    audio_Venus.play();
  }
})

//Земля
btn_Earth__Mars.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mars.object3D.visible = false;
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Earth__Earth.object3D.visible = true;
    buttons_On_Informations__Earth();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mars.object3D.visible = false;
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Choose_Object__Earth.object3D.visible = true;
    buttons_On_Objects__Earth();
    audio_Earth.play();
  }
})

//Марс
btn_Mars__Mars.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mars.object3D.visible = false;
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Mars__Mars.object3D.visible = true;
    buttons_On_Informations__Mars();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mars.object3D.visible = false;
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Choose_Object__Mars.object3D.visible = true;
    buttons_On_Objects__Mars();
    audio_Mars.play();
  }
})

//Юпитер
btn_Jupiter__Mars.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mars.object3D.visible = false;
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Jupiter__Jupiter.object3D.visible = true;
    buttons_On_Informations__Jupiter();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mars.object3D.visible = false;
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Choose_Object__Jupiter.object3D.visible = true;
    buttons_On_Objects__Jupiter();
    audio_Jupiter.play();
  }
})

//Сатурн
btn_Saturn__Mars.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mars.object3D.visible = false;
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Saturn__Saturn.object3D.visible = true;
    buttons_On_Informations__Saturn();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mars.object3D.visible = false;
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Choose_Object__Saturn.object3D.visible = true;
    buttons_On_Objects__Saturn();
    audio_Saturn.play();
  }
})

//Уран
btn_Uranus__Mars.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mars.object3D.visible = false;
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Uranus__Uranus.object3D.visible = true;
    buttons_On_Informations__Uranus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mars.object3D.visible = false;
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Choose_Object__Uranus.object3D.visible = true;
    buttons_On_Objects__Uranus();
    audio_Uranus.play();
  }
})

//Нептун
btn_Neptune__Mars.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mars.object3D.visible = false;
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Neptune__Neptune.object3D.visible = true;
    buttons_On_Informations__Neptune();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Mars.object3D.visible = false;
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Choose_Object__Neptune.object3D.visible = true;
    buttons_On_Objects__Neptune();
    audio_Neptune.play();
  }
})

// Jupiter
// Солнце
btn_Sun__Jupiter.addEventListener('click', function(){

  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Jupiter.object3D.visible = false;
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Sun.setAttribute('camera', 'active', true);
    platform__Sun.object3D.visible = true;
    frame_Sun__Sun.object3D.visible = true;
    buttons_On_Informations__Sun();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Jupiter.object3D.visible = false;
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Sun.setAttribute('camera', 'active', true);
    platform__Sun.object3D.visible = true;
    frame_Choose_Object__Sun.object3D.visible = true;
    buttons_On_Objects__Sun();
    audio_Sun.play();
  }
})

// Меркурий
btn_Mercury__Jupiter.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Jupiter.object3D.visible = false;
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', true);
    platform__Mercury.object3D.visible = true;
    frame_Mercury__Mercury.object3D.visible = true;
    buttons_On_Informations__Mercury();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Jupiter.object3D.visible = false;
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', true);
    platform__Mercury.object3D.visible = true;
    frame_Choose_Object__Mercury.object3D.visible = true;
    buttons_On_Objects__Mercury();
    audio_Mercury.play();
  }
})

//Венера
btn_Venus__Jupiter.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Jupiter.object3D.visible = false;
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Venus__Venus.object3D.visible = true;
    buttons_On_Informations__Venus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Jupiter.object3D.visible = false;
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Choose_Object__Venus.object3D.visible = true;
    buttons_On_Objects__Venus();
    audio_Venus.play();
  }
})

//Земля
btn_Earth__Jupiter.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Jupiter.object3D.visible = false;
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Earth__Earth.object3D.visible = true;
    buttons_On_Informations__Earth();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Jupiter.object3D.visible = false;
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Choose_Object__Earth.object3D.visible = true;
    buttons_On_Objects__Earth();
    audio_Earth.play();
  }
})

//Марс
btn_Mars__Jupiter.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Jupiter.object3D.visible = false;
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Mars__Mars.object3D.visible = true;
    buttons_On_Informations__Mars();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Jupiter.object3D.visible = false;
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Choose_Object__Mars.object3D.visible = true;
    buttons_On_Objects__Mars();
    audio_Mars.play();
  }
})

//Юпитер
btn_Jupiter__Jupiter.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Jupiter.object3D.visible = false;
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Jupiter__Jupiter.object3D.visible = true;
    buttons_On_Informations__Jupiter();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Jupiter.object3D.visible = false;
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Choose_Object__Jupiter.object3D.visible = true;
    buttons_On_Objects__Jupiter();
    audio_Jupiter.play();
  }
})

//Сатурн
btn_Saturn__Jupiter.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Jupiter.object3D.visible = false;
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Saturn__Saturn.object3D.visible = true;
    buttons_On_Informations__Saturn();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Jupiter.object3D.visible = false;
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Choose_Object__Saturn.object3D.visible = true;
    buttons_On_Objects__Saturn();
    audio_Saturn.play();
  }
})

//Уран
btn_Uranus__Jupiter.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Jupiter.object3D.visible = false;
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Uranus__Uranus.object3D.visible = true;
    buttons_On_Informations__Uranus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Jupiter.object3D.visible = false;
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Choose_Object__Uranus.object3D.visible = true;
    buttons_On_Objects__Uranus();
    audio_Uranus.play();
  }
})

//Нептун
btn_Neptune__Jupiter.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Jupiter.object3D.visible = false;
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Neptune__Neptune.object3D.visible = true;
    buttons_On_Informations__Neptune();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Jupiter.object3D.visible = false;
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Choose_Object__Neptune.object3D.visible = true;
    buttons_On_Objects__Neptune();
    audio_Neptune.play();
  }
})

// Saturn
// Солнце
btn_Sun__Saturn.addEventListener('click', function(){

  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Saturn.object3D.visible = false;
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Sun.setAttribute('camera', 'active', true);
    platform__Sun.object3D.visible = true;
    frame_Sun__Sun.object3D.visible = true;
    buttons_On_Informations__Sun();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Saturn.object3D.visible = false;
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Sun.setAttribute('camera', 'active', true);
    platform__Sun.object3D.visible = true;
    frame_Choose_Object__Sun.object3D.visible = true;
    buttons_On_Objects__Sun();
    audio_Sun.play();
  }
})

// Меркурий
btn_Mercury__Saturn.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Saturn.object3D.visible = false;
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', true);
    platform__Mercury.object3D.visible = true;
    frame_Mercury__Mercury.object3D.visible = true;
    buttons_On_Informations__Mercury();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Saturn.object3D.visible = false;
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', true);
    platform__Mercury.object3D.visible = true;
    frame_Choose_Object__Mercury.object3D.visible = true;
    buttons_On_Objects__Mercury();
    audio_Mercury.play();
  }
})

//Венера
btn_Venus__Saturn.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Saturn.object3D.visible = false;
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Venus__Venus.object3D.visible = true;
    buttons_On_Informations__Venus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Saturn.object3D.visible = false;
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Choose_Object__Venus.object3D.visible = true;
    buttons_On_Objects__Venus();
    audio_Venus.play();
  }
})

//Земля
btn_Earth__Saturn.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Saturn.object3D.visible = false;
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Earth__Earth.object3D.visible = true;
    buttons_On_Informations__Earth();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Saturn.object3D.visible = false;
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Choose_Object__Earth.object3D.visible = true;
    buttons_On_Objects__Earth();
    audio_Earth.play();
  }
})

//Марс
btn_Mars__Saturn.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Saturn.object3D.visible = false;
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Mars__Mars.object3D.visible = true;
    buttons_On_Informations__Mars();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Saturn.object3D.visible = false;
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Choose_Object__Mars.object3D.visible = true;
    buttons_On_Objects__Mars();
    audio_Mars.play();
  }
})

//Юпитер
btn_Jupiter__Saturn.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Saturn.object3D.visible = false;
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Jupiter__Jupiter.object3D.visible = true;
    buttons_On_Informations__Jupiter();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Saturn.object3D.visible = false;
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Choose_Object__Jupiter.object3D.visible = true;
    buttons_On_Objects__Jupiter();
    audio_Jupiter.play();
  }
})

//Сатурн
btn_Saturn__Saturn.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Saturn.object3D.visible = false;
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Saturn__Saturn.object3D.visible = true;
    buttons_On_Informations__Saturn();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Saturn.object3D.visible = false;
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Choose_Object__Saturn.object3D.visible = true;
    buttons_On_Objects__Saturn();
    audio_Saturn.play();
  }
})

//Уран
btn_Uranus__Saturn.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Saturn.object3D.visible = false;
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Uranus__Uranus.object3D.visible = true;
    buttons_On_Informations__Uranus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Saturn.object3D.visible = false;
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Choose_Object__Uranus.object3D.visible = true;
    buttons_On_Objects__Uranus();
    audio_Uranus.play();
  }
})

//Нептун
btn_Neptune__Saturn.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Saturn.object3D.visible = false;
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Neptune__Neptune.object3D.visible = true;
    buttons_On_Informations__Neptune();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Saturn.object3D.visible = false;
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Choose_Object__Neptune.object3D.visible = true;
    buttons_On_Objects__Neptune();
    audio_Neptune.play();
  }
})

// Uranus
// Солнце
btn_Sun__Uranus.addEventListener('click', function(){

  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Uranus.object3D.visible = false;
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Sun.setAttribute('camera', 'active', true);
    platform__Sun.object3D.visible = true;
    frame_Sun__Sun.object3D.visible = true;
    buttons_On_Informations__Sun();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Uranus.object3D.visible = false;
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Sun.setAttribute('camera', 'active', true);
    platform__Sun.object3D.visible = true;
    frame_Choose_Object__Sun.object3D.visible = true;
    buttons_On_Objects__Sun();
    audio_Sun.play();
  }
})

// Меркурий
btn_Mercury__Uranus.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Uranus.object3D.visible = false;
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', true);
    platform__Mercury.object3D.visible = true;
    frame_Mercury__Mercury.object3D.visible = true;
    buttons_On_Informations__Mercury();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Uranus.object3D.visible = false;
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', true);
    platform__Mercury.object3D.visible = true;
    frame_Choose_Object__Mercury.object3D.visible = true;
    buttons_On_Objects__Mercury();
    audio_Mercury.play();
  }
})

//Венера
btn_Venus__Uranus.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Uranus.object3D.visible = false;
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Venus__Venus.object3D.visible = true;
    buttons_On_Informations__Venus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Uranus.object3D.visible = false;
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Choose_Object__Venus.object3D.visible = true;
    buttons_On_Objects__Venus();
    audio_Venus.play();
  }
})

//Земля
btn_Earth__Uranus.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Uranus.object3D.visible = false;
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Earth__Earth.object3D.visible = true;
    buttons_On_Informations__Earth();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Uranus.object3D.visible = false;
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Choose_Object__Earth.object3D.visible = true;
    buttons_On_Objects__Earth();
    audio_Earth.play();
  }
})

//Марс
btn_Mars__Uranus.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Uranus.object3D.visible = false;
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Mars__Mars.object3D.visible = true;
    buttons_On_Informations__Mars();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Uranus.object3D.visible = false;
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Choose_Object__Mars.object3D.visible = true;
    buttons_On_Objects__Mars();
    audio_Mars.play();
  }
})

//Юпитер
btn_Jupiter__Uranus.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Uranus.object3D.visible = false;
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Jupiter__Jupiter.object3D.visible = true;
    buttons_On_Informations__Jupiter();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Uranus.object3D.visible = false;
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Choose_Object__Jupiter.object3D.visible = true;
    buttons_On_Objects__Jupiter();
    audio_Jupiter.play();
  }
})

//Сатурн
btn_Saturn__Uranus.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Uranus.object3D.visible = false;
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Saturn__Saturn.object3D.visible = true;
    buttons_On_Informations__Saturn();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Uranus.object3D.visible = false;
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Choose_Object__Saturn.object3D.visible = true;
    buttons_On_Objects__Saturn();
    audio_Saturn.play();
  }
})

//Уран
btn_Uranus__Uranus.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Uranus.object3D.visible = false;
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Uranus__Uranus.object3D.visible = true;
    buttons_On_Informations__Uranus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Uranus.object3D.visible = false;
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Choose_Object__Uranus.object3D.visible = true;
    buttons_On_Objects__Uranus();
    audio_Uranus.play();
  }
})

//Нептун
btn_Neptune__Uranus.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Uranus.object3D.visible = false;
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Neptune__Neptune.object3D.visible = true;
    buttons_On_Informations__Neptune();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Uranus.object3D.visible = false;
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Choose_Object__Neptune.object3D.visible = true;
    buttons_On_Objects__Neptune();
    audio_Neptune.play();
  }
})

// Neptune
// Солнце
btn_Sun__Neptune.addEventListener('click', function(){

  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Neptune.object3D.visible = false;
    camera__Neptune.setAttribute('camera', 'active', false);
    camera__Sun.setAttribute('camera', 'active', true);
    platform__Sun.object3D.visible = true;
    frame_Sun__Sun.object3D.visible = true;
    buttons_On_Informations__Sun();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Neptune.object3D.visible = false;
    camera__Neptune.setAttribute('camera', 'active', false);
    camera__Sun.setAttribute('camera', 'active', true);
    platform__Sun.object3D.visible = true;
    frame_Choose_Object__Sun.object3D.visible = true;
    buttons_On_Objects__Sun();
    audio_Sun.play();
  }
})

// Меркурий
btn_Mercury__Neptune.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Neptune.object3D.visible = false;
    camera__Neptune.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', true);
    platform__Mercury.object3D.visible = true;
    frame_Mercury__Mercury.object3D.visible = true;
    buttons_On_Informations__Mercury();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Neptune.object3D.visible = false;
    camera__Neptune.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', true);
    platform__Mercury.object3D.visible = true;
    frame_Choose_Object__Mercury.object3D.visible = true;
    buttons_On_Objects__Mercury();
    audio_Mercury.play();
  }
})

//Венера
btn_Venus__Neptune.addEventListener('click', function()
{
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Neptune.object3D.visible = false;
    camera__Neptune.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Venus__Venus.object3D.visible = true;
    buttons_On_Informations__Venus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Neptune.object3D.visible = false;
    camera__Neptune.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', true);
    platform__Venus.object3D.visible = true;
    frame_Choose_Object__Venus.object3D.visible = true;
    buttons_On_Objects__Venus();
    audio_Venus.play();
  }
})

//Земля
btn_Earth__Neptune.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Neptune.object3D.visible = false;
    camera__Neptune.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Earth__Earth.object3D.visible = true;
    buttons_On_Informations__Earth();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Neptune.object3D.visible = false;
    camera__Neptune.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', true);
    platform__Earth.object3D.visible = true;
    frame_Choose_Object__Earth.object3D.visible = true;
    buttons_On_Objects__Earth();
    audio_Earth.play();
  }
})

//Марс
btn_Mars__Neptune.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Neptune.object3D.visible = false;
    camera__Neptune.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Mars__Mars.object3D.visible = true;
    buttons_On_Informations__Mars();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Neptune.object3D.visible = false;
    camera__Neptune.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', true);
    platform__Mars.object3D.visible = true;
    frame_Choose_Object__Mars.object3D.visible = true;
    buttons_On_Objects__Mars();
    audio_Mars.play();
  }
})

//Юпитер
btn_Jupiter__Neptune.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Neptune.object3D.visible = false;
    camera__Neptune.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Jupiter__Jupiter.object3D.visible = true;
    buttons_On_Informations__Jupiter();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Neptune.object3D.visible = false;
    camera__Neptune.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', true);
    platform__Jupiter.object3D.visible = true;
    frame_Choose_Object__Jupiter.object3D.visible = true;
    buttons_On_Objects__Jupiter();
    audio_Jupiter.play();
  }
})

//Сатурн
btn_Saturn__Neptune.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Neptune.object3D.visible = false;
    camera__Neptune.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Saturn__Saturn.object3D.visible = true;
    buttons_On_Informations__Saturn();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Neptune.object3D.visible = false;
    camera__Neptune.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', true);
    platform__Saturn.object3D.visible = true;
    frame_Choose_Object__Saturn.object3D.visible = true;
    buttons_On_Objects__Saturn();
    audio_Saturn.play();
  }
})

//Уран
btn_Uranus__Neptune.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Neptune.object3D.visible = false;
    camera__Neptune.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Uranus__Uranus.object3D.visible = true;
    buttons_On_Informations__Uranus();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Neptune.object3D.visible = false;
    camera__Neptune.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', true);
    platform__Uranus.object3D.visible = true;
    frame_Choose_Object__Uranus.object3D.visible = true;
    buttons_On_Objects__Uranus();
    audio_Uranus.play();
  }
})

//Нептун
btn_Neptune__Neptune.addEventListener('click', function(){
  if (mode == 'text')
  {
    buttons_Off_All();
    visible_Off_Frames();
    platform__Neptune.object3D.visible = false;
    camera__Neptune.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Neptune__Neptune.object3D.visible = true;
    buttons_On_Informations__Neptune();
  }
  else if (mode == 'audio')
  {
    audio_Stop();
    buttons_Off_All();
    visible_Off_Frames();
    platform__Neptune.object3D.visible = false;
    camera__Neptune.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', true);
    platform__Neptune.object3D.visible = true;
    frame_Choose_Object__Neptune.object3D.visible = true;
    buttons_On_Objects__Neptune();
    audio_Neptune.play();
  }
})





// Назад к выбору объекта
// Start
btn_Back__Start.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Start.length; i++)
  {
    frame_Information__Start[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Object__Start.object3D.visible = true;
  buttons_On_Objects__Start();
})

// Sun
btn_Back__Sun.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Sun.length; i++)
  {
    frame_Information__Sun[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Object__Sun.object3D.visible = true;
  buttons_On_Objects__Sun();
})

// Mercury
btn_Back__Mercury.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Mercury.length; i++)
  {
    frame_Information__Mercury[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Object__Mercury.object3D.visible = true;
  buttons_On_Objects__Mercury();
})

// Venus
btn_Back__Venus.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Venus.length; i++)
  {
    frame_Information__Venus[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Object__Venus.object3D.visible = true;
  buttons_On_Objects__Venus();
})

// Earth
btn_Back__Earth.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Earth.length; i++)
  {
    frame_Information__Earth[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Object__Earth.object3D.visible = true;
  buttons_On_Objects__Earth();
})

// Mars
btn_Back__Mars.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Mars.length; i++)
  {
    frame_Information__Mars[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Object__Mars.object3D.visible = true;
  buttons_On_Objects__Mars();
})

// Jupiter
btn_Back__Jupiter.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Jupiter.length; i++)
  {
    frame_Information__Jupiter[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Object__Jupiter.object3D.visible = true;
  buttons_On_Objects__Jupiter();
})

// Saturn
btn_Back__Saturn.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Saturn.length; i++)
  {
    frame_Information__Saturn[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Object__Saturn.object3D.visible = true;
  buttons_On_Objects__Saturn();
})

// Uranus
btn_Back__Uranus.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Uranus.length; i++)
  {
    frame_Information__Uranus[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Object__Uranus.object3D.visible = true;
  buttons_On_Objects__Uranus();
})

// Neptune
btn_Back__Neptune.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Neptune.length; i++)
  {
    frame_Information__Neptune[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Object__Neptune.object3D.visible = true;
  buttons_On_Objects__Neptune();
})



// Настройки из информации
// Start
btn_Setting_Obj__Start.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Start.length; i++)
  {
    frame_Information__Start[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Mode__Start.object3D.visible = true;
  buttons_On_Setting__Start();
})

// Sun
btn_Setting_Obj__Sun.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Sun.length; i++)
  {
    frame_Information__Sun[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Mode__Sun.object3D.visible = true;
  buttons_On_Setting__Sun();
})

// Mercury
btn_Setting_Obj__Mercury.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Mercury.length; i++)
  {
    frame_Information__Mercury[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Mode__Mercury.object3D.visible = true;
  buttons_On_Setting__Mercury();
})

// Venus
btn_Setting_Obj__Venus.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Venus.length; i++)
  {
    frame_Information__Venus[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Mode__Venus.object3D.visible = true;
  buttons_On_Setting__Venus();
})

// Earth
btn_Setting_Obj__Earth.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Earth.length; i++)
  {
    frame_Information__Earth[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Mode__Earth.object3D.visible = true;
  buttons_On_Setting__Earth();
})

// Mars
btn_Setting_Obj__Mars.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Mars.length; i++)
  {
    frame_Information__Mars[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Mode__Mars.object3D.visible = true;
  buttons_On_Setting__Mars();
})

// Jupiter
btn_Setting_Obj__Jupiter.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Jupiter.length; i++)
  {
    frame_Information__Jupiter[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Mode__Jupiter.object3D.visible = true;
  buttons_On_Setting__Jupiter();
})

// Saturn
btn_Setting_Obj__Saturn.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Saturn.length; i++)
  {
    frame_Information__Saturn[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Mode__Saturn.object3D.visible = true;
  buttons_On_Setting__Saturn();
})

// Uranus
btn_Setting_Obj__Uranus.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Uranus.length; i++)
  {
    frame_Information__Uranus[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Mode__Uranus.object3D.visible = true;
  buttons_On_Setting__Uranus();
})

// Neptune
btn_Setting_Obj__Neptune.addEventListener('click', function(){

  for (let i = 0; i < frame_Information__Neptune.length; i++)
  {
    frame_Information__Neptune[i].object3D.visible = false;
  }

  buttons_Off_All();

  frame_Choose_Mode__Neptune.object3D.visible = true;
  buttons_On_Setting__Neptune();
})




function buttons_Off_All()
{
  // Start
  btn_Text__Start.setAttribute('height', "0");
  btn_Audio__Start.setAttribute('height', "0");
  btn_Setting_Choose_Objects__Start.setAttribute('height', "0");
  btn_Sun__Start.setAttribute('height', "0");
  btn_Mercury__Start.setAttribute('height', "0");
  btn_Venus__Start.setAttribute('height', "0");
  btn_Earth__Start.setAttribute('height', "0");
  btn_Mars__Start.setAttribute('height', "0");
  btn_Jupiter__Start.setAttribute('height', "0");
  btn_Saturn__Start.setAttribute('height', "0");
  btn_Uranus__Start.setAttribute('height', "0");
  btn_Neptune__Start.setAttribute('height', "0");
  btn_Above__Start.setAttribute('height', "0");
  btn_Side__Start.setAttribute('height', "0");
  btn_Angle__Start.setAttribute('height', "0");
  btn_Back__Start.setAttribute('height', "0");
  btn_Setting_Obj__Start.setAttribute('height', "0");

  // Sun
  btn_Text__Sun.setAttribute('height', "0");
  btn_Audio__Sun.setAttribute('height', "0");
  btn_Setting_Choose_Objects__Sun.setAttribute('height', "0");
  btn_Sun__Sun.setAttribute('height', "0");
  btn_Mercury__Sun.setAttribute('height', "0");
  btn_Venus__Sun.setAttribute('height', "0");
  btn_Earth__Sun.setAttribute('height', "0");
  btn_Mars__Sun.setAttribute('height', "0");
  btn_Jupiter__Sun.setAttribute('height', "0");
  btn_Saturn__Sun.setAttribute('height', "0");
  btn_Uranus__Sun.setAttribute('height', "0");
  btn_Neptune__Sun.setAttribute('height', "0");
  btn_Above__Sun.setAttribute('height', "0");
  btn_Side__Sun.setAttribute('height', "0");
  btn_Angle__Sun.setAttribute('height', "0");
  btn_Back__Sun.setAttribute('height', "0");
  btn_Setting_Obj__Sun.setAttribute('height', "0");

  // Mercury
  btn_Text__Mercury.setAttribute('height', "0");
  btn_Audio__Mercury.setAttribute('height', "0");
  btn_Setting_Choose_Objects__Mercury.setAttribute('height', "0");
  btn_Sun__Mercury.setAttribute('height', "0");
  btn_Mercury__Mercury.setAttribute('height', "0");
  btn_Venus__Mercury.setAttribute('height', "0");
  btn_Earth__Mercury.setAttribute('height', "0");
  btn_Mars__Mercury.setAttribute('height', "0");
  btn_Jupiter__Mercury.setAttribute('height', "0");
  btn_Saturn__Mercury.setAttribute('height', "0");
  btn_Uranus__Mercury.setAttribute('height', "0");
  btn_Neptune__Mercury.setAttribute('height', "0");
  btn_Above__Mercury.setAttribute('height', "0");
  btn_Side__Mercury.setAttribute('height', "0");
  btn_Angle__Mercury.setAttribute('height', "0");
  btn_Back__Mercury.setAttribute('height', "0");
  btn_Setting_Obj__Mercury.setAttribute('height', "0");

  // Venus
  btn_Text__Venus.setAttribute('height', "0");
  btn_Audio__Venus.setAttribute('height', "0");
  btn_Setting_Choose_Objects__Venus.setAttribute('height', "0");
  btn_Sun__Venus.setAttribute('height', "0");
  btn_Mercury__Venus.setAttribute('height', "0");
  btn_Venus__Venus.setAttribute('height', "0");
  btn_Earth__Venus.setAttribute('height', "0");
  btn_Mars__Venus.setAttribute('height', "0");
  btn_Jupiter__Venus.setAttribute('height', "0");
  btn_Saturn__Venus.setAttribute('height', "0");
  btn_Uranus__Venus.setAttribute('height', "0");
  btn_Neptune__Venus.setAttribute('height', "0");
  btn_Above__Venus.setAttribute('height', "0");
  btn_Side__Venus.setAttribute('height', "0");
  btn_Angle__Venus.setAttribute('height', "0");
  btn_Back__Venus.setAttribute('height', "0");
  btn_Setting_Obj__Venus.setAttribute('height', "0");

  // Earth
  btn_Text__Earth.setAttribute('height', "0");
  btn_Audio__Earth.setAttribute('height', "0");
  btn_Setting_Choose_Objects__Earth.setAttribute('height', "0");
  btn_Sun__Earth.setAttribute('height', "0");
  btn_Mercury__Earth.setAttribute('height', "0");
  btn_Venus__Earth.setAttribute('height', "0");
  btn_Earth__Earth.setAttribute('height', "0");
  btn_Mars__Earth.setAttribute('height', "0");
  btn_Jupiter__Earth.setAttribute('height', "0");
  btn_Saturn__Earth.setAttribute('height', "0");
  btn_Uranus__Earth.setAttribute('height', "0");
  btn_Neptune__Earth.setAttribute('height', "0");
  btn_Above__Earth.setAttribute('height', "0");
  btn_Side__Earth.setAttribute('height', "0");
  btn_Angle__Earth.setAttribute('height', "0");
  btn_Back__Earth.setAttribute('height', "0");
  btn_Setting_Obj__Earth.setAttribute('height', "0");

  // Mars
  btn_Text__Mars.setAttribute('height', "0");
  btn_Audio__Mars.setAttribute('height', "0");
  btn_Setting_Choose_Objects__Mars.setAttribute('height', "0");
  btn_Sun__Mars.setAttribute('height', "0");
  btn_Mercury__Mars.setAttribute('height', "0");
  btn_Venus__Mars.setAttribute('height', "0");
  btn_Earth__Mars.setAttribute('height', "0");
  btn_Mars__Mars.setAttribute('height', "0");
  btn_Jupiter__Mars.setAttribute('height', "0");
  btn_Saturn__Mars.setAttribute('height', "0");
  btn_Uranus__Mars.setAttribute('height', "0");
  btn_Neptune__Mars.setAttribute('height', "0");
  btn_Above__Mars.setAttribute('height', "0");
  btn_Side__Mars.setAttribute('height', "0");
  btn_Angle__Mars.setAttribute('height', "0");
  btn_Back__Mars.setAttribute('height', "0");
  btn_Setting_Obj__Mars.setAttribute('height', "0");

  // Jupiter
  btn_Text__Jupiter.setAttribute('height', "0");
  btn_Audio__Jupiter.setAttribute('height', "0");
  btn_Setting_Choose_Objects__Jupiter.setAttribute('height', "0");
  btn_Sun__Jupiter.setAttribute('height', "0");
  btn_Mercury__Jupiter.setAttribute('height', "0");
  btn_Venus__Jupiter.setAttribute('height', "0");
  btn_Earth__Jupiter.setAttribute('height', "0");
  btn_Mars__Jupiter.setAttribute('height', "0");
  btn_Jupiter__Jupiter.setAttribute('height', "0");
  btn_Saturn__Jupiter.setAttribute('height', "0");
  btn_Uranus__Jupiter.setAttribute('height', "0");
  btn_Neptune__Jupiter.setAttribute('height', "0");
  btn_Above__Jupiter.setAttribute('height', "0");
  btn_Side__Jupiter.setAttribute('height', "0");
  btn_Angle__Jupiter.setAttribute('height', "0");
  btn_Back__Jupiter.setAttribute('height', "0");
  btn_Setting_Obj__Jupiter.setAttribute('height', "0");

  // Saturn
  btn_Text__Saturn.setAttribute('height', "0");
  btn_Audio__Saturn.setAttribute('height', "0");
  btn_Setting_Choose_Objects__Saturn.setAttribute('height', "0");
  btn_Sun__Saturn.setAttribute('height', "0");
  btn_Mercury__Saturn.setAttribute('height', "0");
  btn_Venus__Saturn.setAttribute('height', "0");
  btn_Earth__Saturn.setAttribute('height', "0");
  btn_Mars__Saturn.setAttribute('height', "0");
  btn_Jupiter__Saturn.setAttribute('height', "0");
  btn_Saturn__Saturn.setAttribute('height', "0");
  btn_Uranus__Saturn.setAttribute('height', "0");
  btn_Neptune__Saturn.setAttribute('height', "0");
  btn_Above__Saturn.setAttribute('height', "0");
  btn_Side__Saturn.setAttribute('height', "0");
  btn_Angle__Saturn.setAttribute('height', "0");
  btn_Back__Saturn.setAttribute('height', "0");
  btn_Setting_Obj__Saturn.setAttribute('height', "0");

  // Uranus
  btn_Text__Uranus.setAttribute('height', "0");
  btn_Audio__Uranus.setAttribute('height', "0");
  btn_Setting_Choose_Objects__Uranus.setAttribute('height', "0");
  btn_Sun__Uranus.setAttribute('height', "0");
  btn_Mercury__Uranus.setAttribute('height', "0");
  btn_Venus__Uranus.setAttribute('height', "0");
  btn_Earth__Uranus.setAttribute('height', "0");
  btn_Mars__Uranus.setAttribute('height', "0");
  btn_Jupiter__Uranus.setAttribute('height', "0");
  btn_Saturn__Uranus.setAttribute('height', "0");
  btn_Uranus__Uranus.setAttribute('height', "0");
  btn_Neptune__Uranus.setAttribute('height', "0");
  btn_Above__Uranus.setAttribute('height', "0");
  btn_Side__Uranus.setAttribute('height', "0");
  btn_Angle__Uranus.setAttribute('height', "0");
  btn_Back__Uranus.setAttribute('height', "0");
  btn_Setting_Obj__Uranus.setAttribute('height', "0");

  // Neptune
  btn_Text__Neptune.setAttribute('height', "0");
  btn_Audio__Neptune.setAttribute('height', "0");
  btn_Setting_Choose_Objects__Neptune.setAttribute('height', "0");
  btn_Sun__Neptune.setAttribute('height', "0");
  btn_Mercury__Neptune.setAttribute('height', "0");
  btn_Venus__Neptune.setAttribute('height', "0");
  btn_Earth__Neptune.setAttribute('height', "0");
  btn_Mars__Neptune.setAttribute('height', "0");
  btn_Jupiter__Neptune.setAttribute('height', "0");
  btn_Saturn__Neptune.setAttribute('height', "0");
  btn_Uranus__Neptune.setAttribute('height', "0");
  btn_Neptune__Neptune.setAttribute('height', "0");
  btn_Above__Neptune.setAttribute('height', "0");
  btn_Side__Neptune.setAttribute('height', "0");
  btn_Angle__Neptune.setAttribute('height', "0");
  btn_Back__Neptune.setAttribute('height', "0");
  btn_Setting_Obj__Neptune.setAttribute('height', "0");
}



function buttons_On_Setting__Start()
{
  btn_Text__Start.setAttribute('height', "0.4");
  btn_Audio__Start.setAttribute('height', "0.4");
}

function buttons_On_Setting__Sun()
{
  btn_Text__Sun.setAttribute('height', "0.4");
  btn_Audio__Sun.setAttribute('height', "0.4");
}

function buttons_On_Setting__Mercury()
{
  btn_Text__Mercury.setAttribute('height', "0.4");
  btn_Audio__Mercury.setAttribute('height', "0.4");
}

function buttons_On_Setting__Venus()
{
  btn_Text__Venus.setAttribute('height', "0.4");
  btn_Audio__Venus.setAttribute('height', "0.4");
}

function buttons_On_Setting__Earth()
{
  btn_Text__Earth.setAttribute('height', "0.4");
  btn_Audio__Earth.setAttribute('height', "0.4");
}

function buttons_On_Setting__Mars()
{
  btn_Text__Mars.setAttribute('height', "0.4");
  btn_Audio__Mars.setAttribute('height', "0.4");
}

function buttons_On_Setting__Jupiter()
{
  btn_Text__Jupiter.setAttribute('height', "0.4");
  btn_Audio__Jupiter.setAttribute('height', "0.4");
}

function buttons_On_Setting__Saturn()
{
  btn_Text__Saturn.setAttribute('height', "0.4");
  btn_Audio__Saturn.setAttribute('height', "0.4");
}

function buttons_On_Setting__Uranus()
{
  btn_Text__Uranus.setAttribute('height', "0.4");
  btn_Audio__Uranus.setAttribute('height', "0.4");
}

function buttons_On_Setting__Neptune()
{
  btn_Text__Neptune.setAttribute('height', "0.4");
  btn_Audio__Neptune.setAttribute('height', "0.4");
}



function buttons_On_Objects__Start()
{
  btn_Setting_Choose_Objects__Start.setAttribute('height', "0.4");
  btn_Sun__Start.setAttribute('height', "0.4");
  btn_Mercury__Start.setAttribute('height', "0.4");
  btn_Venus__Start.setAttribute('height', "0.4");
  btn_Earth__Start.setAttribute('height', "0.4");
  btn_Mars__Start.setAttribute('height', "0.4");
  btn_Jupiter__Start.setAttribute('height', "0.4");
  btn_Saturn__Start.setAttribute('height', "0.4");
  btn_Uranus__Start.setAttribute('height', "0.4");
  btn_Neptune__Start.setAttribute('height', "0.4");
  btn_Above__Start.setAttribute('height', "0.4");
  btn_Side__Start.setAttribute('height', "0.4");
  btn_Angle__Start.setAttribute('height', "0.4");
}

function buttons_On_Objects__Sun()
{
  btn_Setting_Choose_Objects__Sun.setAttribute('height', "0.4");
  btn_Sun__Sun.setAttribute('height', "0.4");
  btn_Mercury__Sun.setAttribute('height', "0.4");
  btn_Venus__Sun.setAttribute('height', "0.4");
  btn_Earth__Sun.setAttribute('height', "0.4");
  btn_Mars__Sun.setAttribute('height', "0.4");
  btn_Jupiter__Sun.setAttribute('height', "0.4");
  btn_Saturn__Sun.setAttribute('height', "0.4");
  btn_Uranus__Sun.setAttribute('height', "0.4");
  btn_Neptune__Sun.setAttribute('height', "0.4");
  btn_Above__Sun.setAttribute('height', "0.4");
  btn_Side__Sun.setAttribute('height', "0.4");
  btn_Angle__Sun.setAttribute('height', "0.4");
}

function buttons_On_Objects__Mercury()
{
  btn_Setting_Choose_Objects__Mercury.setAttribute('height', "0.4");
  btn_Sun__Mercury.setAttribute('height', "0.4");
  btn_Mercury__Mercury.setAttribute('height', "0.4");
  btn_Venus__Mercury.setAttribute('height', "0.4");
  btn_Earth__Mercury.setAttribute('height', "0.4");
  btn_Mars__Mercury.setAttribute('height', "0.4");
  btn_Jupiter__Mercury.setAttribute('height', "0.4");
  btn_Saturn__Mercury.setAttribute('height', "0.4");
  btn_Uranus__Mercury.setAttribute('height', "0.4");
  btn_Neptune__Mercury.setAttribute('height', "0.4");
  btn_Above__Mercury.setAttribute('height', "0.4");
  btn_Side__Mercury.setAttribute('height', "0.4");
  btn_Angle__Mercury.setAttribute('height', "0.4");
}

function buttons_On_Objects__Venus()
{
  btn_Setting_Choose_Objects__Venus.setAttribute('height', "0.4");
  btn_Sun__Venus.setAttribute('height', "0.4");
  btn_Mercury__Venus.setAttribute('height', "0.4");
  btn_Venus__Venus.setAttribute('height', "0.4");
  btn_Earth__Venus.setAttribute('height', "0.4");
  btn_Mars__Venus.setAttribute('height', "0.4");
  btn_Jupiter__Venus.setAttribute('height', "0.4");
  btn_Saturn__Venus.setAttribute('height', "0.4");
  btn_Uranus__Venus.setAttribute('height', "0.4");
  btn_Neptune__Venus.setAttribute('height', "0.4");
  btn_Above__Venus.setAttribute('height', "0.4");
  btn_Side__Venus.setAttribute('height', "0.4");
  btn_Angle__Venus.setAttribute('height', "0.4");
}

function buttons_On_Objects__Earth()
{
  btn_Setting_Choose_Objects__Earth.setAttribute('height', "0.4");
  btn_Sun__Earth.setAttribute('height', "0.4");
  btn_Mercury__Earth.setAttribute('height', "0.4");
  btn_Venus__Earth.setAttribute('height', "0.4");
  btn_Earth__Earth.setAttribute('height', "0.4");
  btn_Mars__Earth.setAttribute('height', "0.4");
  btn_Jupiter__Earth.setAttribute('height', "0.4");
  btn_Saturn__Earth.setAttribute('height', "0.4");
  btn_Uranus__Earth.setAttribute('height', "0.4");
  btn_Neptune__Earth.setAttribute('height', "0.4");
  btn_Above__Earth.setAttribute('height', "0.4");
  btn_Side__Earth.setAttribute('height', "0.4");
  btn_Angle__Earth.setAttribute('height', "0.4");
}

function buttons_On_Objects__Mars()
{
  btn_Setting_Choose_Objects__Mars.setAttribute('height', "0.4");
  btn_Sun__Mars.setAttribute('height', "0.4");
  btn_Mercury__Mars.setAttribute('height', "0.4");
  btn_Venus__Mars.setAttribute('height', "0.4");
  btn_Earth__Mars.setAttribute('height', "0.4");
  btn_Mars__Mars.setAttribute('height', "0.4");
  btn_Jupiter__Mars.setAttribute('height', "0.4");
  btn_Saturn__Mars.setAttribute('height', "0.4");
  btn_Uranus__Mars.setAttribute('height', "0.4");
  btn_Neptune__Mars.setAttribute('height', "0.4");
  btn_Above__Mars.setAttribute('height', "0.4");
  btn_Side__Mars.setAttribute('height', "0.4");
  btn_Angle__Mars.setAttribute('height', "0.4");
}

function buttons_On_Objects__Jupiter()
{
  btn_Setting_Choose_Objects__Jupiter.setAttribute('height', "0.4");
  btn_Sun__Jupiter.setAttribute('height', "0.4");
  btn_Mercury__Jupiter.setAttribute('height', "0.4");
  btn_Venus__Jupiter.setAttribute('height', "0.4");
  btn_Earth__Jupiter.setAttribute('height', "0.4");
  btn_Mars__Jupiter.setAttribute('height', "0.4");
  btn_Jupiter__Jupiter.setAttribute('height', "0.4");
  btn_Saturn__Jupiter.setAttribute('height', "0.4");
  btn_Uranus__Jupiter.setAttribute('height', "0.4");
  btn_Neptune__Jupiter.setAttribute('height', "0.4");
  btn_Above__Jupiter.setAttribute('height', "0.4");
  btn_Side__Jupiter.setAttribute('height', "0.4");
  btn_Angle__Jupiter.setAttribute('height', "0.4");
}

function buttons_On_Objects__Saturn()
{
  btn_Setting_Choose_Objects__Saturn.setAttribute('height', "0.4");
  btn_Sun__Saturn.setAttribute('height', "0.4");
  btn_Mercury__Saturn.setAttribute('height', "0.4");
  btn_Venus__Saturn.setAttribute('height', "0.4");
  btn_Earth__Saturn.setAttribute('height', "0.4");
  btn_Mars__Saturn.setAttribute('height', "0.4");
  btn_Jupiter__Saturn.setAttribute('height', "0.4");
  btn_Saturn__Saturn.setAttribute('height', "0.4");
  btn_Uranus__Saturn.setAttribute('height', "0.4");
  btn_Neptune__Saturn.setAttribute('height', "0.4");
  btn_Above__Saturn.setAttribute('height', "0.4");
  btn_Side__Saturn.setAttribute('height', "0.4");
  btn_Angle__Saturn.setAttribute('height', "0.4");
}

function buttons_On_Objects__Uranus()
{
  btn_Setting_Choose_Objects__Uranus.setAttribute('height', "0.4");
  btn_Sun__Uranus.setAttribute('height', "0.4");
  btn_Mercury__Uranus.setAttribute('height', "0.4");
  btn_Venus__Uranus.setAttribute('height', "0.4");
  btn_Earth__Uranus.setAttribute('height', "0.4");
  btn_Mars__Uranus.setAttribute('height', "0.4");
  btn_Jupiter__Uranus.setAttribute('height', "0.4");
  btn_Saturn__Uranus.setAttribute('height', "0.4");
  btn_Uranus__Uranus.setAttribute('height', "0.4");
  btn_Neptune__Uranus.setAttribute('height', "0.4");
  btn_Above__Uranus.setAttribute('height', "0.4");
  btn_Side__Uranus.setAttribute('height', "0.4");
  btn_Angle__Uranus.setAttribute('height', "0.4");
}

function buttons_On_Objects__Neptune()
{
  btn_Setting_Choose_Objects__Neptune.setAttribute('height', "0.4");
  btn_Sun__Neptune.setAttribute('height', "0.4");
  btn_Mercury__Neptune.setAttribute('height', "0.4");
  btn_Venus__Neptune.setAttribute('height', "0.4");
  btn_Earth__Neptune.setAttribute('height', "0.4");
  btn_Mars__Neptune.setAttribute('height', "0.4");
  btn_Jupiter__Neptune.setAttribute('height', "0.4");
  btn_Saturn__Neptune.setAttribute('height', "0.4");
  btn_Uranus__Neptune.setAttribute('height', "0.4");
  btn_Neptune__Neptune.setAttribute('height', "0.4");
  btn_Above__Neptune.setAttribute('height', "0.4");
  btn_Side__Neptune.setAttribute('height', "0.4");
  btn_Angle__Neptune.setAttribute('height', "0.4");
}



function buttons_On_Informations__Start()
{
  btn_Back__Start.setAttribute('height', "0.4");
  btn_Setting_Obj__Start.setAttribute('height', "0.4");
}

function buttons_On_Informations__Sun()
{
  btn_Back__Sun.setAttribute('height', "0.4");
  btn_Setting_Obj__Sun.setAttribute('height', "0.4");
}

function buttons_On_Informations__Mercury()
{
  btn_Back__Mercury.setAttribute('height', "0.4");
  btn_Setting_Obj__Mercury.setAttribute('height', "0.4");
}

function buttons_On_Informations__Venus()
{
  btn_Back__Venus.setAttribute('height', "0.4");
  btn_Setting_Obj__Venus.setAttribute('height', "0.4");
}

function buttons_On_Informations__Earth()
{
  btn_Back__Earth.setAttribute('height', "0.4");
  btn_Setting_Obj__Earth.setAttribute('height', "0.4");
}

function buttons_On_Informations__Mars()
{
  btn_Back__Mars.setAttribute('height', "0.4");
  btn_Setting_Obj__Mars.setAttribute('height', "0.4");
}

function buttons_On_Informations__Jupiter()
{
  btn_Back__Jupiter.setAttribute('height', "0.4");
  btn_Setting_Obj__Jupiter.setAttribute('height', "0.4");
}

function buttons_On_Informations__Saturn()
{
  btn_Back__Saturn.setAttribute('height', "0.4");
  btn_Setting_Obj__Saturn.setAttribute('height', "0.4");
}

function buttons_On_Informations__Uranus()
{
  btn_Back__Uranus.setAttribute('height', "0.4");
  btn_Setting_Obj__Uranus.setAttribute('height', "0.4");
}

function buttons_On_Informations__Neptune()
{
  btn_Back__Neptune.setAttribute('height', "0.4");
  btn_Setting_Obj__Neptune.setAttribute('height', "0.4");
}


function visible_Off_Frames()
{
  // Start
  frame_Choose_Mode__Start.object3D.visible = false;
  frame_Choose_Object__Start.object3D.visible = false;

  for (let i = 0; i < frame_Information__Start.length; i++)
  {
    frame_Information__Start[i].object3D.visible = false;
  }

  // Sun
  frame_Choose_Mode__Sun.object3D.visible = false;
  frame_Choose_Object__Sun.object3D.visible = false;

  for (let i = 0; i < frame_Information__Sun.length; i++)
  {
    frame_Information__Sun[i].object3D.visible = false;
  }

  // Mercury
  frame_Choose_Mode__Mercury.object3D.visible = false;
  frame_Choose_Object__Mercury.object3D.visible = false;

  for (let i = 0; i < frame_Information__Mercury.length; i++)
  {
    frame_Information__Mercury[i].object3D.visible = false;
  }

  // Venus
  frame_Choose_Mode__Venus.object3D.visible = false;
  frame_Choose_Object__Venus.object3D.visible = false;

  for (let i = 0; i < frame_Information__Venus.length; i++)
  {
    frame_Information__Venus[i].object3D.visible = false;
  }

  // Earth
  frame_Choose_Mode__Earth.object3D.visible = false;
  frame_Choose_Object__Earth.object3D.visible = false;

  for (let i = 0; i < frame_Information__Earth.length; i++)
  {
    frame_Information__Earth[i].object3D.visible = false;
  }

  // Mars
  frame_Choose_Mode__Mars.object3D.visible = false;
  frame_Choose_Object__Mars.object3D.visible = false;

  for (let i = 0; i < frame_Information__Mars.length; i++)
  {
    frame_Information__Mars[i].object3D.visible = false;
  }

  // Jupiter
  frame_Choose_Mode__Jupiter.object3D.visible = false;
  frame_Choose_Object__Jupiter.object3D.visible = false;

  for (let i = 0; i < frame_Information__Jupiter.length; i++)
  {
    frame_Information__Jupiter[i].object3D.visible = false;
  }

  // Saturn
  frame_Choose_Mode__Saturn.object3D.visible = false;
  frame_Choose_Object__Saturn.object3D.visible = false;

  for (let i = 0; i < frame_Information__Saturn.length; i++)
  {
    frame_Information__Saturn[i].object3D.visible = false;
  }

  // Uranus
  frame_Choose_Mode__Uranus.object3D.visible = false;
  frame_Choose_Object__Uranus.object3D.visible = false;

  for (let i = 0; i < frame_Information__Uranus.length; i++)
  {
    frame_Information__Uranus[i].object3D.visible = false;
  }

  // Neptune
  frame_Choose_Mode__Neptune.object3D.visible = false;
  frame_Choose_Object__Neptune.object3D.visible = false;

  for (let i = 0; i < frame_Information__Neptune.length; i++)
  {
    frame_Information__Neptune[i].object3D.visible = false;
  }
}



function choose_Mode_Function__Start(value)
{
  if (value == 'text')
  {
    mode = 'text';
  }
  else if (value == 'audio')
  {
    mode = 'audio';
  }

  frame_Choose_Mode__Start.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Object__Start.object3D.visible = true;
  buttons_On_Objects__Start();
}

function choose_Mode_Function__Sun(value)
{
  if (value == 'text')
  {
    mode = 'text';
  }
  else if (value == 'audio')
  {
    mode = 'audio';
  }

  frame_Choose_Mode__Sun.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Object__Sun.object3D.visible = true;
  buttons_On_Objects__Sun();
}

function choose_Mode_Function__Mercury(value)
{
  if (value == 'text')
  {
    mode = 'text';
  }
  else if (value == 'audio')
  {
    mode = 'audio';
  }

  frame_Choose_Mode__Mercury.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Object__Mercury.object3D.visible = true;
  buttons_On_Objects__Mercury();
}

function choose_Mode_Function__Venus(value)
{
  if (value == 'text')
  {
    mode = 'text';
  }
  else if (value == 'audio')
  {
    mode = 'audio';
  }

  frame_Choose_Mode__Venus.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Object__Venus.object3D.visible = true;
  buttons_On_Objects__Venus();
}

function choose_Mode_Function__Earth(value)
{
  if (value == 'text')
  {
    mode = 'text';
  }
  else if (value == 'audio')
  {
    mode = 'audio';
  }

  frame_Choose_Mode__Venus.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Object__Venus.object3D.visible = true;
  buttons_On_Objects__Venus();
}

function choose_Mode_Function__Mars(value)
{
  if (value == 'text')
  {
    mode = 'text';
  }
  else if (value == 'audio')
  {
    mode = 'audio';
  }

  frame_Choose_Mode__Mars.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Object__Mars.object3D.visible = true;
  buttons_On_Objects__Mars();
}

function choose_Mode_Function__Jupiter(value)
{
  if (value == 'text')
  {
    mode = 'text';
  }
  else if (value == 'audio')
  {
    mode = 'audio';
  }

  frame_Choose_Mode__Jupiter.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Object__Jupiter.object3D.visible = true;
  buttons_On_Objects__Jupiter();
}

function choose_Mode_Function__Saturn(value)
{
  if (value == 'text')
  {
    mode = 'text';
  }
  else if (value == 'audio')
  {
    mode = 'audio';
  }

  frame_Choose_Mode__Saturn.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Object__Saturn.object3D.visible = true;
  buttons_On_Objects__Saturn();
}

function choose_Mode_Function__Uranus(value)
{
  if (value == 'text')
  {
    mode = 'text';
  }
  else if (value == 'audio')
  {
    mode = 'audio';
  }

  frame_Choose_Mode__Uranus.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Object__Uranus.object3D.visible = true;
  buttons_On_Objects__Uranus();
}

function choose_Mode_Function__Neptune(value)
{
  if (value == 'text')
  {
    mode = 'text';
  }
  else if (value == 'audio')
  {
    mode = 'audio';
  }

  frame_Choose_Mode__Neptune.object3D.visible = false;
  buttons_Off_All();

  frame_Choose_Object__Neptune.object3D.visible = true;
  buttons_On_Objects__Neptune();
}



function audio_Stop()
{
  for (let i = 0; i < audio.length; i++)
  {
    audio[i].pause();
    audio[i].currentTime = 0.0;
  }
}



function camera_Change_Position__Start(value, check)
{
  audio_Stop();

  if (check == true)
  {
    buttons_Off_All();
    visible_Off_Frames();

    platform__Sun.object3D.visible = false;
    platform__Mercury.object3D.visible = false;
    platform__Venus.object3D.visible = false;
    platform__Earth.object3D.visible = false;
    platform__Mars.object3D.visible = false;
    platform__Jupiter.object3D.visible = false;
    platform__Saturn.object3D.visible = false;
    platform__Uranus.object3D.visible = false;
    platform__Neptune.object3D.visible = false;

    camera__Sun.setAttribute('camera', 'active', false);
    camera__Mercury.setAttribute('camera', 'active', false);
    camera__Venus.setAttribute('camera', 'active', false);
    camera__Earth.setAttribute('camera', 'active', false);
    camera__Mars.setAttribute('camera', 'active', false);
    camera__Jupiter.setAttribute('camera', 'active', false);
    camera__Saturn.setAttribute('camera', 'active', false);
    camera__Uranus.setAttribute('camera', 'active', false);
    camera__Neptune.setAttribute('camera', 'active', false);

    camera__Start.setAttribute('camera', 'active', true);
    platform__Start.object3D.visible = true;
    frame_Choose_Object__Start.object3D.visible = true;
    buttons_On_Objects__Start();
  }

  if (value == 'above')
  {
    platform__Start.object3D.rotation.x = 0;
    platform__Start.object3D.position.y = 400;
    platform__Start.object3D.position.z = 0;

    platform__Start.object3D.rotation.x = -90;
    platform__Start.object3D.rotation.y = 0;
    platform__Start.object3D.rotation.z = 0;
  }
  else if (value == 'side')
  {
    platform__Start.object3D.rotation.x = 0;
    platform__Start.object3D.position.y = 0;
    platform__Start.object3D.position.z = 200;

    platform__Start.object3D.rotation.x = 0;
    platform__Start.object3D.rotation.y = 0;
    platform__Start.object3D.rotation.z = 0;
  }
  else if (value == 'angle')
  {
    platform__Start.object3D.rotation.x = 0;
    platform__Start.object3D.position.y = 150;
    platform__Start.object3D.position.z = 200;

    platform__Start.object3D.rotation.x = -45;
    platform__Start.object3D.rotation.y = 0;
    platform__Start.object3D.rotation.z = 0;
  }
}
