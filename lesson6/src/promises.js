function getData() {
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => processData(data))
        .catch(error => console.log(error));
}
function processData(data) {
    console.log('received JSON:', data);
}
getData();
