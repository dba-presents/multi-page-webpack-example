module.exports = {
    entry: {
        races: "./main/webapp/scripts/races.js",
        results: "./main/webapp/scripts/results.js",
    },
    output: {
        path: __dirname + "/main/webapp/dist/",
        filename: "scripts/[name].bundle.js"
    }
};