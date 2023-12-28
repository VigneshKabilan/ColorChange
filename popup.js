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

//colors for Dark Mode

document.getElementById('palette1').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "addClass1"});
    });
    // Store the last selected color option
    chrome.storage.sync.set({lastColorOption: 'addClass1'});
});

document.getElementById('palette2').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "addClass2"});
    });
    chrome.storage.sync.set({lastColorOption: 'addClass2'});
});

document.getElementById('palette3').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "addClass3"});
    });
    chrome.storage.sync.set({lastColorOption: 'addClass3'});
});

document.getElementById('palette4').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "addClass4"});
    });
    chrome.storage.sync.set({lastColorOption: 'addClass4'});
});

document.getElementById('palette5').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "addClass5"});
    });
    chrome.storage.sync.set({lastColorOption: 'addClass5'});
});

document.getElementById('palette11').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "addClass11"});
    });
    chrome.storage.sync.set({lastColorOption: 'addClass6'});
});

//Colors for Light Mode

document.getElementById('palette6').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "addClass6"});
    });
});

document.getElementById('palette7').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "addClass7"});
    });
});

document.getElementById('palette8').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "addClass8"});
    });
});

document.getElementById('palette9').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "addClass9"});
    });
});

document.getElementById('palette10').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "addClass10"});
    });
});

// For Font style

document.getElementById('font1').addEventListener('click', function(tabs) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "f1"});
    });
    chrome.storage.sync.set({lastFontOption: 'Inter, cursive'});
})

document.getElementById('font2').addEventListener('click', function(tabs) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "f2"});
    });
    chrome.storage.sync.set({lastFontOption: 'JetBrains Mono, monospace'});
})

document.getElementById('font3').addEventListener('click', function(tabs) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "f3"});
    });
    chrome.storage.sync.set({lastFontOption: 'Montserrat, sans-serif'});
})

document.getElementById('font4').addEventListener('click', function(tabs) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "f4"});
    });
    chrome.storage.sync.set({lastFontOption: 'cursive'});
})

document.getElementById('font5').addEventListener('click', function(tabs) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "f5"});
    });
    chrome.storage.sync.set({lastFontOption: 'Rosario, sans-serif'});
})

document.getElementById('font6').addEventListener('click', function(tabs) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {task: "f6"});
    });
    chrome.storage.sync.set({lastFontOption: 'Macondo, cursive'});
})
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


// This code for combination according to system Theme

let combinDiv = document.getElementById("combinDiv");

const el = document.querySelector('#theme-indicator');

const darkTheme = window.matchMedia("(prefers-color-scheme: dark");

const darkThemeDiv = document.getElementById('darkTheme');
const lightThemeDiv = document.getElementById('lightTheme');

darkTheme.matches ? (darkThemeDiv.style.display = 'grid') : (lightThemeDiv.style.display = 'grid');