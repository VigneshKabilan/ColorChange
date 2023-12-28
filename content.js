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
    if (result.lastColorOption && window.location.hostname.includes('google.com')) {
        // Apply the last selected color option
        if (result.lastColorOption === 'addClass1') {
            let classesToRemove = ["NE2", "NE3", "NE4", "NE5", "NE6", "NE7", "NE8", "NE9", "NE10"];
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].classList.remove(...classesToRemove);
            sitenames[i].classList.remove(...classesToRemove);
            elements1[i].classList.add('NE1');
            sitenames[i].classList.add('NE1');
            elements2[i].style.color = '#fff6a9';
        }
        } else if (result.lastColorOption === 'addClass2') {
            // Apply 'addClass2'
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

    if (request.task == "addClass1") {
        // array of links to be injected
        let classesToRemove = ["NE2", "NE3", "NE4", "NE5", "NE6", "NE7", "NE8", "NE9", "NE10"];
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].classList.remove(...classesToRemove);
            sitenames[i].classList.remove(...classesToRemove);
            elements1[i].classList.add('NE1');
            sitenames[i].classList.add('NE1');
            elements2[i].style.color = '#fff6a9';
        }
    } else if (request.task == 'addClass2') {
        let classesToRemove = ["NE1", "NE3", "NE4", "NE5", "NE6", "NE7", "NE8", "NE9", "NE10"];
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].classList.remove(...classesToRemove);
            elements1[i].classList.add('NE2');
            sitenames[i].classList.remove(...classesToRemove);
            sitenames[i].classList.add('NE2');
            elements2[i].style.color = '#ffbbf8';
        }
    } else if (request.task == 'addClass3') {
        let classesToRemove = ["NE2", "NE1", "NE4", "NE5", "NE6", "NE7", "NE8", "NE9", "NE10"];
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].classList.remove(...classesToRemove);
            elements1[i].classList.add('NE3');
            sitenames[i].classList.remove(...classesToRemove);
            sitenames[i].classList.add('NE3');
            elements2[i].style.color = '#d6ffff'
        }
    } else if (request.task == 'addClass4') {
        let classesToRemove = ["NE2", "NE3", "NE1", "NE5", "NE6", "NE7", "NE8", "NE9", "NE10"];
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].classList.remove(...classesToRemove);
            elements1[i].classList.add('NE4');
            sitenames[i].classList.remove(...classesToRemove);
            sitenames[i].classList.add('NE4');
            elements2[i].style.color = '#cffccf'
        }
    } else if (request.task == 'addClass5') {
        let classesToRemove = ["NE2", "NE3", "NE4", "NE1", "NE6", "NE7", "NE8", "NE9", "NE10"];
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].classList.remove(...classesToRemove);
            elements1[i].classList.add('NE5');
            sitenames[i].classList.remove(...classesToRemove);
            sitenames[i].classList.add('NE5');
            elements2[i].style.color = '#ffcbd2';
        }

    } else if (request.task == 'addClass6') {
        let classesToRemove = ["NE2", "NE3", "NE4", "NE5", "NE1", "NE7", "NE8", "NE9", "NE10"];
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].classList.remove(...classesToRemove);
            elements1[i].classList.add('NE6');
        }
    } else if (request.task == 'addClass7') {
        let classesToRemove = ["NE2", "NE3", "NE4", "NE5", "NE6", "NE1", "NE8", "NE9", "NE10"];
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].classList.remove(...classesToRemove);
            elements1[i].classList.add('NE7');
        }
    } else if (request.task == 'addClass8') {
        let classesToRemove = ["NE2", "NE3", "NE4", "NE5", "NE6", "NE7", "NE1", "NE9", "NE10"];
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].classList.remove(...classesToRemove);
            elements1[i].classList.add('NE8');
        }
    } else if (request.task == 'addClass9') {
        let classesToRemove = ["NE2", "NE3", "NE4", "NE5", "NE6", "NE7", "NE8", "NE1", "NE10"];
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].classList.remove(...classesToRemove);
            elements1[i].classList.add('NE9');
        }
    } else if (request.task == 'addClass10') {
        let classesToRemove = ["NE2", "NE3", "NE4", "NE5", "NE6", "NE7", "NE8", "NE9", "NE1"];
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].classList.remove(...classesToRemove);
            elements1[i].classList.add('NE10');
        }
    } else if (request.task === 'f1') {
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].style.fontFamily = 'Inter, cursive';
        }
        for (let i = 0; i < elements2.length; i++) {
            elements2[i].style.fontFamily = 'Inter, cursive';
        }
    } else if (request.task === 'f2') {
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].style.fontFamily = 'JetBrains Mono, monospace';
        }
        for (let i = 0; i < elements2.length; i++) {
            elements2[i].style.fontFamily = 'JetBrains Mono, monospace';
        }
    } else if (request.task === 'f3') {
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].style.fontFamily = 'Montserrat, sans-serif';
        }
        for (let i = 0; i < elements2.length; i++) {
            elements2[i].style.fontFamily = 'Montserrat, sans-serif';
        }
    } else if (request.task === 'f4') {
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].style.fontFamily = 'cursive';
        }
        for (let i = 0; i < elements2.length; i++) {
            elements2[i].style.fontFamily = 'cursive';
        }
    } else if (request.task === 'f5') {
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].style.fontFamily = 'Rosario, sans-serif';
        }
        for (let i = 0; i < elements2.length; i++) {
            elements2[i].style.fontFamily = 'Rosario, sans-serif';
        }
    } else if (request.task === 'f6') {
        for (let i = 0; i < elements1.length; i++) {
            elements1[i].style.fontFamily = 'Macondo, cursive'
        }
        for (let i = 0; i < elements2.length; i++) {
            elements2[i].style.fontFamily = 'Macondo, cursive'
        }
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
