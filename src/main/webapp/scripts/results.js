"use strict";

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.scss';
import * as urlParams from './urlparams.js';
import $ from 'jquery';

(function($) {
    function addRunnerResultToTable(position, runnerName, finalTime) {
        $("#results").append("<tr><td>" + position + "</td><td>" + runnerName + "</td><td>" + finalTime + "</td>");
    }

    function getYearFromUrl() {
        return urlParams.getUrlParam("year");
    }

    function showResults(show) {
        if (show) {
            $('#resultsNotAvailable').hide();
            $('#results').show();
        }
        else {
            $('#resultsNotAvailable').show();
            $('#results').hide();
        }
    }

    window.onload = (function() {
        const year = getYearFromUrl();
        if (year === "2017") {
            [{position: 1, runner: "Thomas Faster", time: "2:08:14"},
                {position: 2, runner: "Adam Gorecki", time: "2:09:02"},
                {position: 3, runner: "Nick Alwayslast", time: "2:09:33"}
            ].forEach(r => addRunnerResultToTable(r.position, r.runner, r.time));

            showResults(true);
        }
        else {
            showResults(false);
        }
    });
})($);
