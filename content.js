const links = [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Gruppo&family=Inter:wght@400&family=JetBrains+Mono&family=Macondo&family=Montserrat:wght@300&family=Rosario&display=swap' }
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

chrome.runtime.onMessage.addListener(function(request) {

    if (request.task==="apply"){
        let classesToRemove = ["NE1","NE2", "NE3", "NE4", "NE5"];
        var elements1 = document.getElementsByClassName('DKV0Md');
    for (var i = 0; i < elements1.length; i++) {
        elements1[i].classList.remove(...classesToRemove);
        elements1[i].style.color = request.color1;
    }

    var elements2 = document.getElementsByClassName('r025kc');
    for (var i = 0; i < elements2.length; i++) {
        elements2[i].style.color = request.color2;
    }
    }

    let htmlBody = document.getElementsByClassName('BToiNc');
    let topBar = document.getElementById('extabar');
    let toppBar = document.getElementsByClassName('sfbg');
    let googleSearchBg = document.getElementsByClassName('yuRUbf');
    let googleSearchBgSmall = document.getElementsByClassName('Hdw6tb');
    let elements = document.getElementsByClassName('DKV0Md');
    if (request.task == "addClass1") {
        // array of links to be injected
        let classesToRemove = ["NE2", "NE3", "NE4", "NE5"];
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove(...classesToRemove);
            elements[i].classList.add('NE1');
        }
    }
    else if (request.task == 'addClass2') {
        let classesToRemove = ["NE1", "NE3", "NE4", "NE5"];
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove(...classesToRemove);
            elements[i].classList.add('NE2');
        }
    }
    else if (request.task == 'addClass3') {
        let classesToRemove = ["NE1", "NE2", "NE4", "NE5"];
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove(...classesToRemove);
            elements[i].classList.add('NE3');
        }
    }
    else if (request.task == 'addClass4') {
        let classesToRemove = ["NE1", "NE3", "NE2", "NE5"];
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove(...classesToRemove);
            elements[i].classList.add('NE4');
        }
    }
    else if (request.task == 'addClass5') {
        let classesToRemove = ["NE1", "NE3", "NE4", "NE2"];
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove(...classesToRemove);
            elements[i].classList.add('NE5');
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
