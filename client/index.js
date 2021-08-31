const { response } = require("express");

document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/getAll')
    .then(response => response.json())
    .then(data => console.log(data));
    loadHTMLTable([]);
});

function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');
    let tableHTML = "";
    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>"
    }
}