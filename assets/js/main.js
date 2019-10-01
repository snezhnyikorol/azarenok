$(window).scroll(function(){
    checkMap()
});

var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 100
    }, 500);

    return false;
});

let menuState = false;

$('.menu_btn').click(function () {
  menuState = !menuState;
  if (menuState) {
    $('.map_wrapper').animate({right: '0px'}, 500, function () {
      $('.substrate').animate({opacity: '0.5'}, 200)
    })
  }
})

$('.map_close').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.substrate').animate({opacity: '0'}, 200, function () {
      $('.map_wrapper').animate({right: '-3000px'}, 500)
    })
  }
})

$('.substrate').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.substrate').animate({opacity: '0'}, 200, function () {
      $('.map_wrapper').animate({right: '-3000px'}, 500)
    })
  }
})

$('.map_item').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.substrate').animate({opacity: '0'}, 200, function () {
      $('.map_wrapper').animate({right: '-3000px'}, 500)
    })  
  }
})


var spinner = $('.ymap-container').children('.loader');

var check_if_load = false;

var myMapTemp, myPlacemarkTemp;
 

function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [53.933601, 27.650822], 
    zoom: 16, 
    controls: ['zoomControl', 'fullscreenControl'],
  });
  myMapTemp.behaviors.disable('scrollZoom');
  var myPlacemarkTemp = new ymaps.Placemark([53.933601, 27.650822], {
    balloonContent: 'Кинотеатр VOKA CINEMA by Silver Screen в ТРЦ Dana Mall, улица Петра Мстиславца 11, Минск'
    }, {
        preset: 'islands#blackHomeIcon'
    })

  myMapTemp.geoObjects.add(myPlacemarkTemp)
 
  
  var layer = myMapTemp.layers.get(0).get(0);
 
 
  waitForTilesLoad(layer).then(function() {
 
    spinner.removeClass('is-active');
  });
}
 

function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 

function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 

function checkMap() {
  if (document.getElementById('contacts').getBoundingClientRect().y < document.documentElement.clientHeight) {
    
    if (!check_if_load) { 
 
	  	
        check_if_load = true; 
 
		
        spinner.addClass('is-active');
 
	
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
  
           ymaps.load(init);
        });                
      }
  }
}

$("input[name='phone']").mask("+375 (99) 999-99-99");

$('#submit').click((e) => {
  $('#form').submit()
  e.preventDefault()
})

$('#modalSubmit').click((e) => {
  $('#modalForm').submit()
  e.preventDefault()
})

$('#book').on('show.bs.modal', function() {
    $('html').addClass('noscroll');
})

$('#book').on('hide.bs.modal', function() {
    $('html').removeClass('noscroll');
})