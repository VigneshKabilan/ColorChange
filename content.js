chrome.runtime.onMessage.addListener(function(request) {
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
});
