const links = [
    {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''},
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Gruppo&family=Inter:wght@400&family=JetBrains+Mono&family=Macondo&family=Montserrat:wght@300&family=Rosario&display=swap'
    }
];

// function to inject links
function injectLink(link) {
    let linkElement = document.createElement('link');
    linkElement.rel = link.rel;
    linkElement.href = link.href;
    if (link.crossorigin !== undefined) {
        linkElement.crossorigin = link.crossorigin;
    }
    document.head.appendChild(linkElement);
}

// iterate over links and inject each one
links.forEach(injectLink);

let elements1 = document.getElementsByClassName('DKV0Md');
let elements2 = document.getElementsByClassName('r025kc');
let sitenames = document.getElementsByClassName('VuuXrf');

chrome.storage.sync.get(['lastColorOption'], function(result) {

    function changeInTextColorRefresh(clr, text) {
        let classesToRemove = ["NE1", "NE2", "NE3", "NE4", "NE5", "NE6", "NE7", "NE8", "NE9", "NE10", "NE11", "NE12"];
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].classList.remove(...classesToRemove);
            sitenames[i].classList.remove(...classesToRemove);
            elements1[i].classList.add(clr);
            sitenames[i].classList.add(clr);
            elements2[i].style.color = text;
        }
    }

    if (result.lastColorOption && window.location.hostname.includes('google.com')) {
        // Apply the last selected color option
        if (result.lastColorOption === 'addClass1') {
            changeInTextColorRefresh('NE1', '#e4ae35');
            
        } else if (result.lastColorOption === 'addClass2') {
            changeInTextColorRefresh('NE2', '#eed59f');
        
        } else if (result.lastColorOption === 'addClass3') {
            changeInTextColorRefresh('NE3', '#dfc7ab');
        
        } else if (result.lastColorOption === 'addClass4') {
            changeInTextColorRefresh('NE4', '#dfc7ab');
        
        } else if (result.lastColorOption === 'addClass5') {
            changeInTextColorRefresh('NE5', '#d0c9be');
        
        } else if (result.lastColorOption === 'addClass6') {
            changeInTextColorRefresh('NE6', '#10F057');
        
        } else if (result.lastColorOption === 'addClass7') {
            changeInTextColorRefresh('NE7', '#10F057');
        
        } else if (result.lastColorOption === 'addClass8') {
            changeInTextColorRefresh('NE8', '#10F057');
        
        } else if (result.lastColorOption === 'addClass9') {
            changeInTextColorRefresh('NE9', '#10F057');
        
        } else if (result.lastColorOption === 'addClass10') {
            changeInTextColorRefresh('NE10', '#10F057');
        
        } else if (result.lastColorOption === 'addClass11') {
            changeInTextColorRefresh('NE11', '#10F057');
        
        } else if (result.lastColorOption === 'addClass12') {
            changeInTextColorRefresh('NE12', '#10F057');
        
        }
        // Add more conditions for other color options
    }
});


chrome.runtime.onMessage.addListener(function (request) {
    if (request.task === "apply") {
        let classesToRemove = ["NE1", "NE2", "NE3", "NE4", "NE5"];
        for (var i = 0; i < elements1.length; i++) {
            elements1[i].classList.remove(...classesToRemove);
            elements1[i].style.color = request.color1;
        }
        for (var i = 0; i < elements2.length; i++) {
            elements2[i].style.color = request.color2;
        }
    }

    let htmlBody = document.getElementsByClassName('BToiNc');
    let topBar = document.getElementById('extabar');
    let toppBar = document.getElementsByClassName('sfbg');
    let googleSearchBg = document.getElementsByClassName('yuRUbf');
    let googleSearchBgSmall = document.getElementsByClassName('Hdw6tb');

    function changeInTextColor(clr, text) {
        let classesToRemove = ["NE1", "NE2", "NE3", "NE4", "NE5", "NE6", "NE7", "NE8", "NE9", "NE10", "NE11", "NE12"];
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].classList.remove(...classesToRemove);
            sitenames[i].classList.remove(...classesToRemove);
            elements1[i].classList.add(clr);
            sitenames[i].classList.add(clr);
            elements2[i].style.color = text;
        }
    }

    function changeTextFamily(family) {
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].style.fontFamily = family;
        }
        for (let i = 0; i < elements2.length; i++) {
            elements2[i].style.fontFamily = family;
        }
    }

    if (request.task == "addClass1") {
        // array of links to be injected
        changeInTextColor('NE1', '#e4ae35');

    } else if (request.task == 'addClass2') {
        changeInTextColor('NE2', '#eed59f');

    } else if (request.task == 'addClass3') {
        changeInTextColor('NE3', '#dfc7ab');
        
    } else if (request.task == 'addClass4') {
        changeInTextColor('NE4', '#dfc7ab');
    
    } else if (request.task == 'addClass5') {
        changeInTextColor('NE5', '#d0c9be');
        
    } else if (request.task == 'addClass11') {
        changeInTextColor('NE11', '#10F057');
    
    } else if (request.task == 'addClass6') {
        changeInTextColor('NE6', '#10F057');

    } else if (request.task == 'addClass7') {
        changeInTextColor('NE7', '#10F057');

    } else if (request.task == 'addClass8') {
        changeInTextColor('NE8', '#10F057');

    } else if (request.task == 'addClass9') {
        changeInTextColor('NE9', '#10F057');

    } else if (request.task == 'addClass10') {
        changeInTextColor('NE10', '#10F057');

    } else if (request.text == 'addClass12') {
        changeInTextColor('NE12', '#10F057');

    } else if (request.task === 'f1') {
        changeTextFamily('Inter, cursive');

    } else if (request.task === 'f2') {
        changeTextFamily('JetBrains Mono, monospace');
        
    } else if (request.task === 'f3') {
        changeTextFamily('Montserrat, sans-serif');
    
    } else if (request.task === 'f4') {
        changeTextFamily('cursive');
        
    } else if (request.task === 'f5') {
        changeTextFamily('Rosario, sans-serif');
        
    } else if (request.task === 'f6') {
        changeTextFamily('Macondo, cursive');
        
    }

// bg add
    else if (request.task == 'addBgClass1') {
        document.body.style.backgroundColor = '#b0d4d4';
        toppBar[0].style.backgroundColor = "#b0d4d4";
        for (let i = 0; i < googleSearchBg.length; i++) {
            googleSearchBg[i].style.backgroundColor = "#b0d4d4";
        }
        for (let i = 0; i < googleSearchBgSmall.length; i++) {
            googleSearchBgSmall[i].style.backgroundColor = "#b0d4d4";
        }
    }
});
