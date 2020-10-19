const bySel    = x => document.querySelector(x),
      byId     = x => document.getElementById(x),
      byClass  = x => document.getElementsByClassName(x),
      bySelAll = x => document.querySelectorAll(x);

const deleteThis = (x, y) => setTimeout( () => x.remove(), y),
      createEle  = x      => document.createElement(x);

const byTag = (x, y) => document.getElementsByTagName(x)[y || 0];

const tfs = x => openFullscreen(body);

const thisHeight = x =>  x.clientHeight,
      thisWidth  = x =>  x.clientWidth;

const myHeight = function(){ 
            var bodyHeight = Math.max( body.scrollHeight, body.offsetHeight );
            return bodyHeight
      };
      myWidth  = function(){ 
            var bodyWidth = Math.max( body.scrollWidth, body.offsetWidth );
            return bodyWidth
      };

const make = (x, where) => x.className = x.className + where;

const makeCollide = x => make(x, '_collide'),
      makeLeft    = x => make(x, '_left'),
      makeCenter  = x => make(x, '_center'),
      makeRight   = x => make(x, '_right'),
      makeFade    = x => make(x, '_fade'),
      makeFull    = x => make(x, '_full'),
      makeLock    = x => make(x, '_locked');

const take = (x, where) => x.className = x.className.split(where)[0];

const takeLeft   = x => take(x, '_left'),
      takeCenter = x => take(x, '_center'), 
      takeRight  = x => take(x, '_right'),  
      takeFade   = x => take(x, '_fade'),   
      takeFull   = x => take(x, '_full');
      takeLock   = x => take(x, '_locked');

function openFullscreen(x,y) { return function() { x.disabled = true, y.disabled = false; if (document.body.requestFullscreen) {return document.body.requestFullscreen();} else if (document.body.mozRequestFullScreen) { /* Firefox */document.body.mozRequestFullScreen();} else if (document.body.webkitRequestFullscreen) { /* Chrome, Safari & Opera */document.body.webkitRequestFullscreen();} else if (document.body.msRequestFullscreen) { /* IE/Edge */document.body.msRequestFullscreen();} }}
function closeFullScreen(x,y) { return function(){ x.disabled = true, y.disabled = false; if (document.exitFullscreen) {document.exitFullscreen();} else if (document.mozCancelFullScreen) { /* Firefox */document.mozCancelFullScreen();} else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */document.webkitExitFullscreen();} else if (document.msExitFullscreen) { /* IE/Edge */document.msExitFullscreen();} }};
function currentTime(){ return Math.round(new Date().getTime()/1000) };
function runTimer(x){ return setTimeout(function(){ x.innerHTML = currentTime(); runTimer(x); },900) };
function inputValidate(x,y){ return function(){ var d = x.value.trim(); if (d.length === 0) { return false } else { x.value = ""; /*work in progress*/ } } };

/* local storage */
function saveLS(x, y) { return localStorage.setItem(x, JSON.stringify(y)) };
function loadLS(x) { return localStorage.getItem(x) };
function parseLS(x) { var y = loadLS(x), z = JSON.parse(y); return z };
function clearLS() { return localStorage.clear() };
function removeLSitem(x) { return localStorage.removeItem(x) };
function LSinit(x,y) {var keyname = localStorage.getItem(x);if (!keyname || keyname === null) {localStorage.setItem(x, JSON.stringify(y));};};

/* session storage */
function saveSS(x, y) { return sessionStorage.setItem(x, JSON.stringify(y)) };
function loadSS(x) { return sessionStorage.getItem(x) };
function parseSS(x) { var y = loadSS(x), z = JSON.parse(y); return z };
function clearSS() { return sessionStorage.clear() };
function removeSSitem(x) { return sessionStorage.removeItem(x) };
function SSinit(x,y) {var keyname = sessionStorage.getItem(x);if (!keyname || keyname === null) {sessionStorage.setItem(x, JSON.stringify(y));} else {var k = x.split("user_");var g = +k[1];g++;var i = x.split(k[1]);var z = i[0] + g;}};