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
        var speed = 75;
        var txtvide = "";
        document.querySelector(".lead").innerHTML = txtvide;
        function typeWriterWrite() {
              
            
            if (i < txt.length) {
                
                document.querySelector(".lead").innerHTML;
                document.querySelector(".lead").innerHTML = document.querySelector(".lead").innerHTML + txt.charAt(i);
                i++;
                setTimeout(typeWriterWrite, speed);
            } 
            else {

                setTimeout(typeWriterWrite, 10000);
                if (j <= txt.length) {
                    document.querySelector(".lead").innerHTML = txtvide;
                    document.querySelector(".lead").innerHTML += txt.slice(0, txt.length-j);
                    j++;
                    setTimeout(typeWriterWrite, 50);
                }
           
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
