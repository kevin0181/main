let loadJsFile = () => {
    const jquery = document.createElement("script");
    jquery.src = "/public/assets/js/jquery.min.js";
    jquery.async = true;
    document.body.appendChild(jquery);

    const util = document.createElement("script");
    util.src = "/public/assets/js/util.js";
    util.async = true;
    document.body.appendChild(util);

    const main = document.createElement("script");
    main.src = "/public/assets/js/main.js";
    main.async = true;
    document.body.appendChild(main);


    const browser = document.createElement("script");
    browser.src = "/public/assets/js/browser.min.js";
    browser.async = true;
    document.body.appendChild(browser);


    const breakPoints = document.createElement("script");
    breakPoints.src = "/public/assets/js/breakpoints.min.js";
    breakPoints.async = true;
    document.body.appendChild(breakPoints);
}

export default loadJsFile;