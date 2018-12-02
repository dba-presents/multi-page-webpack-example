"use strict";

(function() {
    function addRace(year) {
        var list = document.getElementById("races");
        var item = document.createElement("li");
        var link = document.createElement("a");
        link.href = "results.html?year=" + year;
        link.appendChild(document.createTextNode(year));
        item.appendChild(link);
        list.appendChild(item);
    }

    window.onload = (function () {
        addRace("2018");
        addRace("2017");
    });

})();