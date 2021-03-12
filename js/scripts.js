document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.output');
    const  urlPhoto = 'https://jsonplaceholder.typicode.com/photos';
    getData(urlPhoto)
        .then(output)
        .catch((error) => console.error(error) );

    function output(data) {
        const rnd = Math.floor(Math.random()*data.length);
        let obj = data[rnd];
        container.innerHTML = `<h2>${obj.title}</h2>
                            <img src="${obj.url}" alt="${obj.title}">`
        console.log(data);
    }



    function getData(url) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('GET', url);
            request.addEventListener('readystatechange', () =>{
                if(request.readyState !== 4){
                    return;
                }
                if(request.status === 200){
                    const response = JSON.parse(request.responseText);
                    resolve(response);
                } else {
                    reject(request.statusText);
                }
            });
            request.send();
        })

    }
});
