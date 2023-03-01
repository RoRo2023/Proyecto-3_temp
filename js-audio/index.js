
//El siguiente código permitira hacer comandos de voz si es que nos alcanza el tiempo, de lo contrario solo dara un mensaje de bienvenida con voz
document.addEventListener("DOMContentLoaded", function() {
    //11111111111  En esta sección da el mensaje de bienvenida de nuestra aplicación 11111111111111111
        var voz;
        voz = window.speechSynthesis.getVoices();
        var confvoz = new SpeechSynthesisUtterance();
        confvoz.rate = 1;
        confvoz.pitch = 0.5;
        confvoz.lang = 'es-MX';
        confvoz.text = 'Bienvenido a Nuestra aplicación de API';
        confvoz.voice = voz[0];
        window.speechSynthesis.speak(confvoz);
    //11111111111Aqui finaliza la parte del mensaje de bienvenida de voz de nuestra aplicación11111111111111111
        })