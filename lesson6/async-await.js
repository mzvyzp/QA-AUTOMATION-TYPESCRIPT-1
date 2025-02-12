async function getData() {
    const resp = await fetch('https://dog.ceo/api/breeds/image/random');
    const json = await resp.json();
    return json;
}
async function processData() {
    const data = await getData();
    console.log('received JSON:', data);
}
(async() => {
    await processData();
    console.log('done');
})();

