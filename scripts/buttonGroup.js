// JavaScript code

// Function to hide all sections of the menu

window.onload = function() {
    hideAllSections();
    showSection('salads_section')

    // Add event listeners to the buttons
   document.getElementById('btnSalads').onclick = function() {
       showSection('salads_section');
   }
    document.getElementById('btnPaninis').onclick = function() {
        showSection('paninis_section');
    }
    document.getElementById('btnMorning').onclick = function() {
        showSection('morning_section');
    }
    document.getElementById('btnSoups').onclick = function() {
        showSection('soups_section');
    }

}
function hideAllSections() {
    document.getElementById('morning_section').style.display = 'none';
    document.getElementById('paninis_section').style.display = 'none';
    document.getElementById('soups_section').style.display = 'none';
    document.getElementById('salads_section').style.display = 'none';
}

function showSection(id) {
    hideAllSections();
    document.getElementById(id).style.display = 'block';
}


