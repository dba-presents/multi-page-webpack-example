"use strict";

import '../styles/main.scss';

(function() {
    function addRunnerResultToTable(position, runnerName, finalTime) {
        const table = document.getElementById("results");
        const row = table.insertRow(position);
        row.insertCell(0).innerHTML = position;
        row.insertCell(1).innerHTML = runnerName;
        row.insertCell(2).innerHTML = finalTime;
    }

    function getYearFromUrl() {
        const url = new URL(window.location.href);
        return url.searchParams.get("year");
    }

    function showResults(show) {
        if (show) {
            document.getElementById("resultsNotAvailable").style.display = "none";
            document.getElementById("results").style.display = "block";
        }
        else {
            document.getElementById("resultsNotAvailable").style.display = "block";
            document.getElementById("results").style.display = "none";
        }
    }

    window.onload = (function() {
        const year = getYearFromUrl();
        if (year === "2017") {
            addRunnerResultToTable(1, "Thomas Faster", "2:08:14");
            addRunnerResultToTable(2, "Adam Gorecki", "2:09:02");
            addRunnerResultToTable(3, "Nick Alwayslast", "2:09:33");
            showResults(true);
        }
        else {
            showResults(false);
        }
    });
})();
