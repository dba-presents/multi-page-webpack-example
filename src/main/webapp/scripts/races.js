"use strict";

import '../styles/main.scss';
import $ from 'jquery';

(function($) {
    function addRace(year) {
        const hlink = "results.html?year=" + year;
        $("#races").append("<li><a href='" + hlink + "'>" + year + "</a></li>")
    }

    window.onload = (function () {
        addRace("2018");
        addRace("2017");
    });

})($);