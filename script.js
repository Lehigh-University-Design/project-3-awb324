function showStats() {
    var dropdown = document.getElementById("stats-dropdown");
    var selectedValue = dropdown.value;
    var statsTable = document.getElementById("stats-table");

    
    statsTable.innerHTML = "";

    
    if (selectedValue == "1") {
        
        statsTable.innerHTML = "<table><tr><th>Appearances</th><th>Goals</th><th>Assists</th></tr><tr><td>25</td><td>10</td><td>8</td></tr></table>";
    } else if (selectedValue == "2") {
        
        statsTable.innerHTML = "<table><tr><th>Appearances</th><th>Goals</th><th>Assists</th></tr><tr><td>30</td><td>15</td><td>12</td></tr></table>";
    }
  
}