ymaps.ready(['AnimatedLine']).then(init);

function init(ymaps) {
    // Создаем карту.
    var myMap = new ymaps.Map("map", {
        center: [53.427145, 49.505180],
        zoom: 12
    }, {
        searchControlProvider: 'yandex#search'
    });
    

    // Создаем ломаные линии.
    var firstAnimatedLine = new ymaps.AnimatedLine([
        [53.425223, 49.480375],
        [53.419981, 49.480890],
        [53.416315, 49.482156],
        [53.415031, 49.482188],
        [53.414916, 49.482504],
        [53.414805, 49.482772],
        [53.414671, 49.483008],
        [53.414381, 49.483306],
        [53.413640, 49.483569],
        [53.413333, 49.483502],
        [53.413107, 49.483529],
        [53.410636, 49.486232],
        [53.410466, 49.486662],
        [53.410491, 49.487241],
        [53.410463, 49.487439],
        [53.408770, 49.489381],
        [53.408626, 49.489612],
        [53.407812, 49.491420],
        [53.407341, 49.494000],
        [53.406715, 49.495888],
        [53.404754, 49.499107],
        [53.404263, 49.501526],
        [53.404221, 49.503538],
        [53.404265, 49.503940],
        [53.404353, 49.504262],
        [53.404528, 49.504681],
        [53.405308, 49.505917],
        [53.405550, 49.506483],
        [53.405735, 49.507250],
        [53.405783, 49.507363],
        [53.405903, 49.507489],
        [53.406558, 49.507443],
        [53.406832, 49.507524],
        [53.407033, 49.507682],
        [53.407209, 49.507907],
        [53.407942, 49.509710],
        [53.408030, 49.509986],
        [53.408067, 49.510190],
        [53.408123, 49.511400],
        [53.408139, 49.511617],
        [53.408206, 49.511781],
        [53.411600, 49.515852],
        [53.412831, 49.517059],
        [53.413469, 49.517832],
        [53.413806, 49.518089],
        [53.413806, 49.518089],
        [53.414914, 49.518218],
        [53.415258, 49.518486],
        [53.415594, 49.519237],
        [53.416027, 49.522788],
        [53.416030, 49.523276],
        [53.415536, 49.525658]
    ], {}, {
        // Задаем цвет.
        strokeColor: "#ED4543",
        // Задаем ширину линии.
        strokeWidth: 5,
        // Задаем длительность анимации.
        animationTime: 8000
    });
    var secondAnimatedLine = new ymaps.AnimatedLine([
        [53.415536, 49.525658],
        [53.415712, 49.525782],
    ], {}, {
        strokeColor: "#1E98FF",
        strokeWidth: 5,
        animationTime: 2000
    });
    // Добавляем линии на карту.
    myMap.geoObjects.add(firstAnimatedLine);
    myMap.geoObjects.add(secondAnimatedLine);
    // Создаем метки.
    var firstPoint = new ymaps.Placemark([55.7602953585417, 37.57705113964169], {}, {
        preset: 'islands#redRapidTransitCircleIcon'
    });
    var secondPoint = new ymaps.Placemark([55.76127880650197, 37.57839413202077], {}, {
        preset: 'islands#blueMoneyCircleIcon'
    });
    var thirdPoint = new ymaps.Placemark([55.763105418792314, 37.57724573612205], {}, {
        preset: 'islands#blackZooIcon'
    });
    // Функция анимации пути.
    function playAnimation() {
        // Убираем вторую линию.
        secondAnimatedLine.reset();
        // Добавляем первую метку на карту.
        myMap.geoObjects.add(firstPoint);
        // Анимируем первую линию.
        firstAnimatedLine.animate()
            // После окончания анимации первой линии добавляем вторую метку на карту и анимируем вторую линию.
            .then(function () {
                myMap.geoObjects.add(secondPoint);
                return secondAnimatedLine.animate();
            })
            // После окончания анимации второй линии добавляем третью метку на карту.
            .then(function () {
                myMap.geoObjects.add(thirdPoint);
                // Добавляем паузу после анимации.
                return ymaps.vow.delay(null, 2000);
            })
            // После паузы перезапускаем анимацию.
            .then(function () {
                // Удаляем метки с карты.
                myMap.geoObjects.remove(firstPoint);
                myMap.geoObjects.remove(secondPoint);
                myMap.geoObjects.remove(thirdPoint);
                // Убираем вторую линию.
                secondAnimatedLine.reset();
                // Перезапускаем анимацию.
                playAnimation();
            });
    }
    // Запускаем анимацию пути.
    playAnimation();    
}

