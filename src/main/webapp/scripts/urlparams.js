"use strict";

var urlparams = (function() {

    function getUrlParam(param) {
        const url = new URL(window.location.href);
        return url.searchParams.get(param);
    }

    return {
        getUrlParam: getUrlParam
    }

})();

module.exports = {
    getUrlParam: urlparams.getUrlParam
};

