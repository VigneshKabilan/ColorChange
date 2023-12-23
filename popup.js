document.getElementById('apply').addEventListener('click', function() {
  var color1 = document.getElementById('color1').value;
  var color2 = document.getElementById('color2').value;
  applyColors(color1, color2);
});

document.getElementById('palette1').addEventListener('click', function() {
  applyColors('#00539C', '#EEA47F'); // replace with your colors
});

document.getElementById('palette2').addEventListener('click', function() {
  applyColors('#CCF381', '#4831D4'); // replace with your colors
});

document.getElementById('palette3').addEventListener('click', function() {
  applyColors('#00008B', '#ADD8E6'); // replace with your colors
});

document.getElementById('palette4').addEventListener('click', function() {
  applyColors('#515e51', '#3f303f'); // replace with your colors
});

function applyColors(color1, color2) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {color1: color1, color2: color2});
  });
}
