window.typewriter = {
    init: function () {
        "use strict";
        if (!document.body.classList.contains("page__home")) {
            return;
        }
        var i = 0;
        var j = 10;
        var txt = document.querySelector(".lead").textContent;
        var txts = txt.split('/');

        var k= 0;
        var j = 0;
        document.querySelector(".lead").innerHTML = "";
        var typeWriterWrite = function () {
            if (i < txts[k].length) {
                document.querySelector(".lead").innerHTML;
                document.querySelector(".lead").innerHTML = document.querySelector(".lead").innerHTML + txts[k].charAt(i);
                i++;
                setTimeout(typeWriterWrite, 75);
            }  else {
                console.log('oui');
                //setTimeout(typeWriterWrite, 10000);
                if (j <= txts[k].length) {
                    console.log(txts[k].length);
                    document.querySelector(".lead").innerHTML = "";
                    document.querySelector(".lead").innerHTML += txts[k].slice(0, txts[k].length-j);
                    document.querySelector(".lead").innerHTML += "_";
                    j++;
                    setTimeout(typeWriterWrite, 75);
                } else {
                    console.log(k);
                    k += 1;
                    i = 0;
                    j = 0;
                    if (k > txts.length-1){
                        k=0;
                    }
                    setTimeout(typeWriterWrite, 75);
                }
            }
        };
        typeWriterWrite();
    },

    invoke: function () {
        "use strict";
        return {
            init: this.init.bind(this)
        };
    }
}.invoke();

window.typewriter.init();
