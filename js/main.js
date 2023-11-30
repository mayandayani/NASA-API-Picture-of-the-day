document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
    const choice = document.querySelector('input').value;
    console.log(choice);

    const url = `https://api.nasa.gov/planetary/apod?api_key=lTCvV7G0aLZJoGgeDRkA7NamwIjtZUQSSrmRi4VG&date=${choice}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            // Get references to elements
            const imgElement = document.querySelector('img');
            let iframeElement = document.querySelector('iframe');

            if (data.media_type === 'image') {
                imgElement.src = data.hdurl;
                iframeElement.src = '';
                iframeElement.style.display = 'none';
            } else if (data.media_type === 'video') {
                imgElement.src = ''; 
                iframeElement.style.display = 'inline'; // or 'inline', 'inline-block', etc.
                iframeElement.src = data.url;
            }

            document.querySelector('h3').innerText = data.explanation;
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
}

function showAlert() {
  window.alert("Created by Mayan")
}
