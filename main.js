function crearAudio(frecuencia) {
    //var audioContexto = new (window.AudioContext || window.webkitAudioContext)();
    var _audioContexto = new (window.AudioContext);
    var _oscilador=_audioContexto.createOscillator();
    _oscilador.type="square";
    _oscilador.frequency=frecuencia;
    _oscilador.connect(_audioContexto.destination);
    _oscilador.start();
}