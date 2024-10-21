window.typewriter = {
    init: function () {
        "use strict";
        if (!document.body.classList.contains("page__home")) return;

        var i = 0;
        var j = 10;
        var leadText = document.querySelector(".hero hgroup > p");
        var txt = leadText.innerHTML;
        var txts = txt.split("/");

        var k = 0;
        var l = 0;
        leadText.innerHTML = "";
        leadText.style.display="inline";

        function typeWriterWrite() {
            var leadElement = leadText;
            if (i < txts[k].length) {
                leadElement.textContent += txts[k].charAt(i);
                i++;
                if (i <= txts[k].length-1){
                    l=90;
                }
                else{
                    l=2000;
                }
                setTimeout(typeWriterWrite, l);
            } 
            
            else {
                if (j <= txts[k].length) {
                    leadElement.textContent = txts[k].slice(0, txts[k].length - j);
                    j++;
                    setTimeout(typeWriterWrite, 30);
                } else {
                    k = (k + 1) % txts.length;
                    i = 0;
                    j = 0;
                    setTimeout(typeWriterWrite, 500);
                }
            }
        }

        typeWriterWrite();
    }
};

window.typewriter.init();

