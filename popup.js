document.getElementById('apply').addEventListener('click', function() {
  var color1 = document.getElementById('color1').value;
  var color2 = document.getElementById('color2').value;
  applyColors(color1, color2);
});

function applyColors(color1, color2) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {task:"apply",color1: color1, color2: color2});
  });
}

document.getElementById('palette1').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "addClass1"});
    });
});

document.getElementById('palette2').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "addClass2"});
    });
});

document.getElementById('palette3').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "addClass3"});
    });
});

document.getElementById('palette4').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "addClass4"});
    });
});

document.getElementById('palette5').addEventListener('click', function() {
    console.log("elements[i].classList");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "addClass5"});
    });
});


// apply background
document.getElementById('bgpalette1').addEventListener('click', function() {
    console.log("elements[i].classListbg");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "addBgClass1"});
    });
});

  

// document.getElementById('applyBG').addEventListener('click', function() {
//     var bgcolor = document.getElementById('bgcolor').value;
//     applyBgColor(bgcolor);
//   });

//   function applyBgColor(bgcolor) {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, {bgcolor: bgcolor});
//     });
//   }