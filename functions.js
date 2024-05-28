async function callMessage() {
    try {
        const response = await fetch('http://localhost:8000/hello_ud'); //Add the port number
        const data = await response.text();
        const result = document.getElementById('result');
        result.innerContent = data;

    } catch (error) {
        console.error('Error:', error);
    }
}

//The function was named incorrectly, because from the html the callTable() function is called, not callWebServices().
async function callTable() {
    try {
        const response = await fetch('http://localhost/data');
        const data = await response.json();
        
        let table = '<table>';
        table += '<tr><th>ID</th><th>Name</th><th>Description</th></tr>';
        
        data.forEach(item => {
            table += `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.description}</td></tr>`;
        });
        
        table += '</table>';
        
        document.getElementById('result').innerHTML = table;
    } catch (error) {
        console.error('Error:', error);
    }
}