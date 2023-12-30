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
let gpttexts = document.getElementsByClassName('prose');
let ourtexts = document.getElementsByClassName('flex flex-1 text-base mx-auto gap-3 md:px-5 lg:px-1 xl:px-5 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] group');

//Function to change clr to texts
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

//Function to change font to texts
function changeTextFamily(family) {
    for (let i = 0; i < elements1.length; i++) {
        elements1[i].style.fontFamily = family;
    }
    for (let i = 0; i < elements2.length; i++) {
        elements2[i].style.fontFamily = family;
    }
}

function changeTextColorGpt(col1, col2) {
    for(let i = 0; i < gpttexts.length; i++) {
        gpttexts[i].style.color = col1;
        gpttexts[i].style.textShadow = '0 0 5px ' + col2; 
    }
}

function changeTextColorGptOur(colo) {
    for(let i = 0;i < ourtexts.length; i++) {
        ourtexts[i].style.color = colo;
    }
}

// Select the node that will be observed for mutations
const targetNode = document.body;
// Options for the observer (which mutations to observe)
const config = {attributes: true, childList: true, subtree: true};

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            chrome.storage.sync.get(['lastColorOption'], function (result) {

                if (result.lastColorOption && (window.location.hostname.includes('google.com') || window.location.hostname.includes('chat.openai.com'))) {
                    // Apply the last selected color option
                    if (result.lastColorOption === 'addClass1') {
                        changeInTextColor('NE1', '#e4ae35');
                        changeTextColorGpt('#fff6a9', '#ffa500');
                        changeTextColorGptOur('#e4ae35');

                    } else if (result.lastColorOption === 'addClass2') {
                        changeInTextColor('NE2', '#c5afff');
                        changeTextColorGpt('#ffbbf8', '#ff1493');
                        changeTextColorGptOur('#c5afff');

                    } else if (result.lastColorOption === 'addClass3') {
                        changeInTextColor('NE3', '#4eb7ff');
                        changeTextColorGpt('#cbfcff', '#cbfcff');
                        changeTextColorGptOur('#4eb7ff');

                    } else if (result.lastColorOption === 'addClass4') {
                        changeInTextColor('NE4', '#e1fe7b');
                        changeTextColorGpt('#ccfecc', '#008000');
                        changeTextColorGptOur('#e1fe7b');

                    } else if (result.lastColorOption === 'addClass5') {
                        changeInTextColor('NE5', '#ff85dc');
                        changeTextColorGpt('#ffcbd2', '#FF0000');
                        changeTextColorGptOur('#ff85dc');

                    } else if (result.lastColorOption === 'addClass6') {
                        changeInTextColor('NE6', '#212060');
                        changeTextColorGpt('#60bd5c', '#38ac34');
                        changeTextColorGptOur('#212060');

                    } else if (result.lastColorOption === 'addClass7') {
                        changeInTextColor('NE7', '#ED1D26');
                        changeTextColorGpt('#F6D162', '#fdda71');
                        changeTextColorGptOur('#ED1D26');

                    } else if (result.lastColorOption === 'addClass8') {
                        changeInTextColor('NE8', '#472875');
                        changeTextColorGpt('#A07BB9', '#b884db');
                        changeTextColorGptOur('#472875');

                    } else if (result.lastColorOption === 'addClass9') {
                        changeInTextColor('NE9', '#104374');
                        changeTextColorGpt('#62CBE7', '#7bcfe7');
                        changeTextColorGptOur('#104374');

                    } else if (result.lastColorOption === 'addClass10') {
                       changeInTextColor('NE10', '#39A43C');
                        changeTextColorGpt('#E8BC8D', '#ffcd98');
                        changeTextColorGptOur('#39A43C');

                    } else if (result.lastColorOption === 'addClass11') {
                        changeInTextColor('NE11', '#10F057');
                        changeTextColorGpt('#dabbff', '#9114ff');
                        changeTextColorGptOur('#10F057');

                    } else if (result.lastColorOption === 'addClass12') {
                        changeInTextColor('NE12', '#000');
                        changeTextColorGpt('#808080', '#808080');
                        changeTextColorGptOur('#000');
                    }
                    // Add more conditions for other color options
                }
            });
            chrome.storage.sync.get(['lastFontOption'], function (result) {


                if (result.lastFontOption && window.location.hostname.includes('google.com')) {
                    // Apply the last selected font option
                    changeTextFamily(result.lastFontOption);
                    // Add more conditions for other color options
                }
            });
        }
    }
};
// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);


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
        for (let i = 0; i < gpttexts.length; i++) {
            gpttexts[i].style.color = request.color1;
        }
        for (let i = 0; i < ourtexts.length; i++) {
            ourtexts[i].style.color = request.color2;
        }
    }

    let htmlBody = document.getElementsByClassName('BToiNc');
    let topBar = document.getElementById('extabar');
    let toppBar = document.getElementsByClassName('sfbg');
    let googleSearchBg = document.getElementsByClassName('yuRUbf');
    let googleSearchBgSmall = document.getElementsByClassName('Hdw6tb');


    if (request.task === "addClass1") {
        // array of links to be injected
        changeInTextColor('NE1', '#e4ae35');
        changeTextColorGpt('#fff6a9', '#ffa500');
        changeTextColorGptOur('#e4ae35');

    } else if (request.task === 'addClass2') {
        changeInTextColor('NE2', '#c5afff');
        changeTextColorGpt('#ffbbf8', '#ff1493');
        changeTextColorGptOur('#c5afff');

    } else if (request.task === 'addClass3') {
        changeInTextColor('NE3', '#4eb7ff');
        changeTextColorGpt('#cbfcff', '#cbfcff');
        changeTextColorGptOur('#4eb7ff');

    } else if (request.task === 'addClass4') {
        changeInTextColor('NE4', '#e1fe7b');
        changeTextColorGpt('#ccfecc', '#008000');
        changeTextColorGptOur('#e1fe7b');

    } else if (request.task === 'addClass5') {
        changeInTextColor('NE5', '#ff85dc');
        changeTextColorGpt('#ffcbd2', '#FF0000');
        changeTextColorGptOur('#ff85dc');

    } else if (request.task === 'addClass11') {
        changeInTextColor('NE11', '#10F057');
        changeTextColorGpt('#dabbff', '#9114ff');
        changeTextColorGptOur('#10F057');

    } else if (request.task === 'addClass6') {
        changeInTextColor('NE6', '#212060');
        changeTextColorGpt('#60bd5c', '#38ac34');
        changeTextColorGptOur('#212060');

    } else if (request.task === 'addClass7') {
        changeInTextColor('NE7', '#ED1D26');
        changeTextColorGpt('#F6D162', '#fdda71');
        changeTextColorGptOur('#ED1D26');

    } else if (request.task === 'addClass8') {
        changeInTextColor('NE8', '#472875');
        changeTextColorGpt('#A07BB9', '#b884db');
        changeTextColorGptOur('#472875');

    } else if (request.task === 'addClass9') {
        changeInTextColor('NE9', '#104374');
        changeTextColorGpt('#62CBE7', '#7bcfe7');
        changeTextColorGptOur('#104374');

    } else if (request.task === 'addClass10') {
        changeInTextColor('NE10', '#39A43C');
        changeTextColorGpt('#E8BC8D', '#ffcd98');
        changeTextColorGptOur('#39A43C');

    } else if (request.task === 'addClass12') {
        changeInTextColor('NE12', '#000');
        changeTextColorGpt('#808080', '#808080');
        changeTextColorGptOur('#000');

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
