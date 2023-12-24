chrome.runtime.onMessage.addListener(function(request) {
    let htmlBody = document.getElementsByClassName('BToiNc');
    let topBar = document.getElementById('extabar');
    let toppBar = document.getElementById('pTwnEc');
    let googleSearchBg = document.getElementsByClassName('sfbg');
    let elements = document.getElementsByClassName('DKV0Md');
    if (request.task == "addClass1") {
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
    document.body.classList.add('BG1');
    topBar.classList.add('BG1');
    toppBar.style.background = "#b0d4d4";
    for (let i = 0; i < htmlBody.length; i++) {
        htmlBody[i].style.backgroundColor = "#b0d4d4";
    googleSearchBg[i].style.background = "#b0d4d4";
    }
}
});
