window.typewriter = {
    init: function () {
        "use strict";
        if (!document.body.classList.contains("page__home")) {
            return;
        }
        var i = 0;
        var txt = 'Sufficiencylab';
        var speed = 50;

        function typeWriter() {
            if (i < txt.length) {
                document.querySelector(".hero-text h1").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    },



    invoke: function () {
        "use strict";
        return {
            init: this.init.bind(this)
        };
    }
}.invoke();

window.typewriter.init();
