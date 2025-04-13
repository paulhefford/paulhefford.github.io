function getCookieByName(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

/* Handle website themes */
function getSiteTheme() {
    return getCookieByName('SiteTheme');
}

function saveSiteTheme(themeName) {
    document.cookie = 'SiteTheme=' + themeName + '; max-age=31536000; path=/';
}

function deleteSiteTheme() {
    document.cookie = 'SiteTheme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

function setSiteTheme(themeName) {
    var mainStyle = document.getElementById('mainstyle');
    if (mainStyle == null) {
        var stylesheet = document.createElement('link');
        stylesheet.id = 'mainstyle';
        stylesheet.rel = 'stylesheet';
        stylesheet.type = 'text/css';
        stylesheet.href = '/includes/style.css';
        document.getElementsByTagName('head')[0].appendChild(stylesheet);
    }

    var secondaryStyle = document.getElementById('secondarystyle');
    if (secondaryStyle != null) {
        secondaryStyle.remove();
    }

    switch (themeName) {
        case 'british':
        case 'matrix':
        case 'wacky':
        case 'white':
            var stylesheet = document.createElement('link');
            stylesheet.id = 'secondarystyle';
            stylesheet.rel = 'stylesheet';
            stylesheet.type = 'text/css';
            stylesheet.href = '/includes/style-' + themeName + '.css';
            document.getElementsByTagName('head')[0].appendChild(stylesheet);

            saveSiteTheme(themeName);
            break;
        case 'none':
            var mainStyle = document.getElementById('mainstyle');
            if (mainStyle != null) {
                mainStyle.remove();
            }

            saveSiteTheme(themeName);
            break;
        case 'default':
            deleteSiteTheme();
        default:
    }
}

(function () {
    var professionalStyle = document.getElementById('professionalstyle');
    if (professionalStyle == null) {
        setSiteTheme(getSiteTheme());
    }
})();

/* Adds the Google Analytics code to the page */
(function () {
    var gaScriptNode = document.createElement('script');
    var documentTargetNode = document.getElementsByTagName('script')[0];
    gaScriptNode.src = 'https://www.googletagmanager.com/gtag/js?id=G-B4H56GBEH1';
    gaScriptNode.async = 1;
    documentTargetNode.parentNode.insertBefore(gaScriptNode, documentTargetNode)
})();

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

gtag('js', new Date());
gtag('config', 'G-B4H56GBEH1');