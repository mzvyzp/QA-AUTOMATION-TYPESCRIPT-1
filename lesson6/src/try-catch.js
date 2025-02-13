async function getData() {
    const primaryUrl = 'https://dontexist.com/data';
    const backupUrl = 'https://dog.ceo/api/breeds/image/random';

    try {
        const response = await fetch(primaryUrl);
        if (!response) throw new Error();
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Primary request failed, trying backupUrl...', error);
        try {
            const backupResponse = await fetch(backupUrl);
            if (!backupResponse.ok) throw new Error();
            const backupData = await backupResponse.json();
            return backupData;
        } catch (downApiError) {
            throw new Error('Both primary and backup requests failed');
        }
    }
}
async function processData() {
    const data = await getData();
    console.log('received JSON:', data);
}

(async() => {
    await processData();
    console.log('done');
})();
