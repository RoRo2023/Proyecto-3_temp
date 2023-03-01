document.addEventListener("DOMContentLoaded", function() {
    
        var voz;
        voz = window.speechSynthesis.getVoices();
        var confvoz = new SpeechSynthesisUtterance();
        confvoz.rate = 1;
        confvoz.pitch = 0.5;
        confvoz.lang = 'es-MX';
        confvoz.text = 'Bienvenido a Nuestra aplicación de API';
        

        confvoz.voice = voz[2];
        window.speechSynthesis.speak(confvoz);
        })