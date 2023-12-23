chrome.runtime.onMessage.addListener(function(request) {
    var elements1 = document.getElementsByClassName('DKV0Md');
    for (var i = 0; i < elements1.length; i++) {
        elements1[i].style.color = request.color1;
    }

    var elements2 = document.getElementsByClassName('r025kc');
    for (var i = 0; i < elements2.length; i++) {
        elements2[i].style.color = request.color2;
    }
});

// Check if the current page is a Google search results page
if (window.location.href.includes('www.google.com/search')) {
    var elements3 = document.getElementsByTagName('h3');
    for (var i = 0; i < elements3.length; i++) {
        elements3[i].classList.add('GoogleSearchH3');
    }
}
