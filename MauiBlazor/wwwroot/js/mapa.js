var mapBing;

function loadBingMap() {
    setTimeout(mapaDemo, 500);
}

function mapaDemo() {
    mapBing = new Microsoft.Maps.Map(document.getElementById('map'), {});
}