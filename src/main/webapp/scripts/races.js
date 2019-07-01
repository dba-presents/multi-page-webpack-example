"use strict";

import '../styles/main.scss';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/dialog';

(function($) {
    function addRace(year) {
        const hlink = "results.html?year=" + year;
        $("#races").append("<li><a href='" + hlink + "'>" + year + "</a> <button type = \"button\" class = \"btn btn-info race-info-btn\">Info</button></li>");
    }

    window.onload = (function () {
        addRace("2018");
        addRace("2017");

        $(".race-info-btn").click(function() {
            $("#raceInfoDiv").dialog({
                resizable: false,
                height: "auto",
                width: 500,
                modal: true,
                buttons: []
            });
        });
    });

})($);