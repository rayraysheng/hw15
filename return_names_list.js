
// Populate the dropdown menu with options
// Each option is a sample name returned from /name
Plotly.d3.json("/names", function(error, data){
    if (error) return console.warn(error);

    for (i = 0; i < data.length; i++){
        
        var optionEl = document.createElement("option");
        optionEl.text = data[i];
        optionEl.value = data[i];
        
        var selectEl = document.getElementById("dropDown")
        selectEl.appendChild(optionEl)
    }   
})