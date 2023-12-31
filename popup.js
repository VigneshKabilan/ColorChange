function reloadCurrentTab() {
  // Query for the currently active tab in the current window
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    // Get the first tab from the result
    var currentTab = tabs[0];

    // Check if a tab is found
    if (currentTab) {
      // Reload the current tab
      chrome.tabs.reload(currentTab.id);
    }
  });
}

document.getElementById('apply').addEventListener('click', function() {
  var color1 = document.getElementById('color1').value;
  var color2 = document.getElementById('color2').value;
  applyColors(color1, color2);
});

function applyColors(color1, color2) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {task:"apply",color1: color1, color2: color2});
  });
  chrome.storage.sync.set({lastColorOption: 'addClass0',primary:color1,secondary : color2});
  reloadCurrentTab();
}

// light and dark mode switch

const checkbox = document.getElementById('theme');

let isChecked = false; 
// false = light
// true = dark

checkbox.addEventListener('change', function() {
    
    isChecked = this.checked;
    
    console.log('Checkbox state:', isChecked);
    if (this.checked) {
        applyDarkMode();
    } else {
        applyLightMode();
    }
});

// Function to apply dark mode styles
function applyDarkMode() {
    document.body.style.color = '#fff';
    document.body.style.background = '#333';
    document.querySelector('.heading-div').style.textShadow = '0px 4px 4px hsl(98, 100%, 29%)';
    document.querySelectorAll('.palette1').forEach(text => {
        text.style.color = 'White'
    });
    document.getElementById('darkTheme').style.display = 'grid';
    document.getElementById('darkTheme').style.visibility = 'visible';
    document.getElementById('lightTheme').style.display = 'none';
    document.getElementById('lightTheme').style.visibility = 'hidden';
    document.getElementsByClassName('power-switch')[0].style.setProperty('--color-invert', '#00ff00');
    
}

// Function to apply light mode styles
function applyLightMode() {
    document.body.style.color = '#333';
    document.body.style.background = '#fff';
    document.querySelector('.heading-div').style.textShadow = 'none';
    document.querySelectorAll('.palette1').forEach(text => {
        text.style.color = 'Black'
    });
    document.getElementById('lightTheme').style.display = 'grid';
    document.getElementById('lightTheme').style.visibility = 'visible';
    document.getElementById('darkTheme').style.display = 'none';
    document.getElementById('darkTheme').style.visibility = 'hidden';
    document.getElementsByClassName('power-switch')[0].style.setProperty('--color-invert', '#000000');
}

//colors for Dark Mode

    document.getElementById('palette1').addEventListener('click', function() {
        setBorder('palette1');
        chrome.storage.sync.set({lastColorOption: 'addClass1'});
        reloadCurrentTab();
    });
    
    document.getElementById('palette2').addEventListener('click', function() {
        setBorder('palette2');
        chrome.storage.sync.set({lastColorOption: 'addClass2'});
        reloadCurrentTab();
    });
    
    document.getElementById('palette3').addEventListener('click', function() {
        setBorder('palette3');
        chrome.storage.sync.set({lastColorOption: 'addClass3'});
        reloadCurrentTab();
    });
    
    document.getElementById('palette4').addEventListener('click', function() {
        setBorder('palette4');
        chrome.storage.sync.set({lastColorOption: 'addClass4'});
        reloadCurrentTab();
    });
    
    document.getElementById('palette5').addEventListener('click', function() {
        setBorder('palette5');
        chrome.storage.sync.set({lastColorOption: 'addClass5'});
        reloadCurrentTab();
    });
    
    document.getElementById('palette11').addEventListener('click', function() {
        setBorder('palette11');
        chrome.storage.sync.set({lastColorOption: 'addClass11'});
        reloadCurrentTab();
    });

//Colors for Light Mode
    document.getElementById('palette6').addEventListener('click', function() {
        setBorder('palette6');
        chrome.storage.sync.set({lastColorOption: 'addClass6'});
        reloadCurrentTab();
    });
    
    document.getElementById('palette7').addEventListener('click', function() {
        setBorder('palette7');
        chrome.storage.sync.set({lastColorOption: 'addClass7'});
        reloadCurrentTab();
    });
    
    document.getElementById('palette8').addEventListener('click', function() {
        setBorder('palette8');
        chrome.storage.sync.set({lastColorOption: 'addClass8'});
        reloadCurrentTab();
    });
    
    document.getElementById('palette9').addEventListener('click', function() {
        setBorder('palette9');
        chrome.storage.sync.set({lastColorOption: 'addClass9'});
        reloadCurrentTab();
    });
    
    document.getElementById('palette10').addEventListener('click', function() {
        setBorder('palette10');
        chrome.storage.sync.set({lastColorOption: 'addClass10'});
        reloadCurrentTab();
    });
    document.getElementById('palette12').addEventListener('click', function() {
        setBorder('palette12');
        chrome.storage.sync.set({lastColorOption: 'addClass12'});
        reloadCurrentTab();
    });

    // set border for combinations "retained"
    chrome.storage.sync.get(['lastColorOption'], function(result) {
        if (result.lastColorOption === 'addClass1') {
            document.getElementById('palette1').classList.add('border-combo');
        } else if (result.lastColorOption === 'addClass2') {
            document.getElementById('palette2').classList.add('border-combo');
        } else if (result.lastColorOption === 'addClass3') {
            document.getElementById('palette3').classList.add('border-combo');
        } else if (result.lastColorOption === 'addClass4') {
            document.getElementById('palette4').classList.add('border-combo');
        } else if (result.lastColorOption === 'addClass5') {
            document.getElementById('palette5').classList.add('border-combo');
        } else if (result.lastColorOption === 'addClass6') {
            document.getElementById('palette6').classList.add('border-combo');
        } else if (result.lastColorOption === 'addClass7') {
            document.getElementById('palette7').classList.add('border-combo');
        } else if (result.lastColorOption === 'addClass8') {
            document.getElementById('palette8').classList.add('border-combo');
        } else if (result.lastColorOption === 'addClass9') {
            document.getElementById('palette9').classList.add('border-combo');
        } else if (result.lastColorOption === 'addClass10') {
            document.getElementById('palette10').classList.add('border-combo');
        } else if (result.lastColorOption === 'addClass11') {
            document.getElementById('palette11').classList.add('border-combo');
        } else if (result.lastColorOption === 'addClass12') {
            document.getElementById('palette12').classList.add('border-combo');
        }
    });
    
// For Font style

document.getElementById('font1').addEventListener('click', function(tabs) {
    setFontFixedColor('font1');
    chrome.storage.sync.set({lastFontOption: 'Inter, cursive'});
    reloadCurrentTab();
})

document.getElementById('font2').addEventListener('click', function(tabs) {
    setFontFixedColor('font2');
    chrome.storage.sync.set({lastFontOption: 'JetBrains Mono, monospace'});
    reloadCurrentTab();
})

document.getElementById('font3').addEventListener('click', function(tabs) {
    setFontFixedColor('font3');
    chrome.storage.sync.set({lastFontOption: 'Montserrat, sans-serif'});
    reloadCurrentTab();
})

document.getElementById('font4').addEventListener('click', function(tabs) {
    setFontFixedColor('font4');
    chrome.storage.sync.set({lastFontOption: 'cursive'});
    reloadCurrentTab();
})

document.getElementById('font5').addEventListener('click', function(tabs) {
    setFontFixedColor('font5');
    chrome.storage.sync.set({lastFontOption: 'Rosario, sans-serif'});
    reloadCurrentTab();
})

document.getElementById('font6').addEventListener('click', function(tabs) {
    setFontFixedColor('font6');
    chrome.storage.sync.set({lastFontOption: 'Macondo, cursive'});
    reloadCurrentTab();
})


chrome.storage.sync.get(['lastFontOption'], function(result) {
    if (result.lastFontOption === 'Inter, cursive') {
        document.getElementById('font1').classList.add('font-fixed');
    } else if (result.lastFontOption === 'JetBrains Mono, monospace') {
        document.getElementById('font2').classList.add('font-fixed');
    } else if (result.lastFontOption === 'Montserrat, sans-serif') {
        document.getElementById('font3').classList.add('font-fixed');
    } else if (result.lastFontOption === 'cursive') {
        document.getElementById('font4').classList.add('font-fixed');
    } else if (result.lastFontOption === 'Rosario, sans-serif') {
        document.getElementById('font5').classList.add('font-fixed');
    } else if (result.lastFontOption === 'Macondo, cursive') {
        document.getElementById('font6').classList.add('font-fixed');
    }
});




// set border "on click"
var availablePalettes = [
    'palette1',
    'palette2',
    'palette3',
    'palette4',
    'palette5',
    'palette6',
    'palette7',
    'palette8',
    'palette9',
    'palette10',
    'palette11',
    'palette12'
];

function setBorder(toAddElement){
    availablePalettes.forEach(element => {
        document.getElementById(element).classList.remove('border-combo');
    });
    document.getElementById(toAddElement).classList.add('border-combo');
}

// set font color "on click"
var availableFonts = [
    'font1',
    'font2',
    'font3',
    'font4',
    'font5',
    'font6'
];
function setFontFixedColor(toAddElement){
    availableFonts.forEach(element => {
        document.getElementById(element).classList.remove('font-fixed');
    });
    document.getElementById(toAddElement).classList.add('font-fixed');
}

// on/off button
document.getElementById('on-off').addEventListener('click', function(){
console.log("clicked");
});