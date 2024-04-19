window.typewriter = {
    init: function () {
        "use strict";
        if (!document.body.classList.contains("page__home")) return;

        var i = 0;
        var j = 10;
        var txt = document.querySelector(".lead").textContent;
        var txts = txt.split('/');

        var k = 0;
        document.querySelector(".lead").innerHTML = "";
        //style.display="inline";

        function typeWriterWrite() {
            var leadElement = document.querySelector(".lead");
            if (i < txts[k].length) {
                leadElement.textContent += txts[k].charAt(i);
                i++;
                setTimeout(typeWriterWrite, 75);
            } else {
                if (j <= txts[k].length) {
                    leadElement.textContent = txts[k].slice(0, txts[k].length - j);
                    j++;
                    setTimeout(typeWriterWrite, 30);
                } else {
                    k = (k + 1) % txts.length;
                    i = 0;
                    j = 0;
                    setTimeout(typeWriterWrite, 75);
                }
            }
        }

        typeWriterWrite();
    }
};

window.typewriter.init();

