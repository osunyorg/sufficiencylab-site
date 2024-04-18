window.typewriter = {
    init: function () {
        "use strict";
        if (!document.body.classList.contains("page__home")) {
            return;
        }
        var i = 0;
        var j = 10;
        var txt = document.querySelector(".lead").textContent;
        var j = 0;
        var speed = 100;

        function typeWriterWrite() {
            if (i < txt.length) {
                document.querySelector(".hero-text h1").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriterWrite, speed);
            }

        }
        function typeWriterUnWrite() {
            if (j < txt.length) {
                document.querySelector(".hero-text h1").innerHTML += txt.slice(0, txt.length-j);
                j++;
                setTimeout(typeWriterUnWrite, speed);
            }

        }

        typeWriterWrite();
        //typeWriterUnWrite();
    },



    invoke: function () {
        "use strict";
        return {
            init: this.init.bind(this)
        };
    }
}.invoke();

window.typewriter.init();
