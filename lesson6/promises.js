function getData() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => processData(data))
        .catch(error => console.log(error));
}
function processData(data) {
    console.log('received JSON:', data);
}
getData();
