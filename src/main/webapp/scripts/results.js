"use strict";

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
            addRunnerResultToTable(1, "Thomas Faster", "2:08:14");
            addRunnerResultToTable(2, "Adam Gorecki", "2:09:02");
            addRunnerResultToTable(3, "Nick Alwayslast", "2:09:33");
            showResults(true);
        }
        else {
            showResults(false);
        }
    });
})($);
