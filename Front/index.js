
function getCharacter() {
    const input = document.getElementById('character');
    const container = document.querySelector('.searchInfo');
    container.innerHTML = ''

    const searchName = input.value.toLowerCase();

    fetch(`http://localhost:3002/characters/${searchName}`)
    .then(response => response.json())
    .then(data => {
        let charName;
        container.innerHTML += `<h3>${data.length} characters found.</h3>`
        data.map(item => {
            charName = item.name
            let imgUrl
            const { status, species, gender, origin: {name}, image} = item
            let length = image.length
            if(image[length - 1] == '/') {
                imgUrl = image.replace('/', '')
            } else {
                imgUrl = image
            }
            console.log(imgUrl)
            container.innerHTML += `
            <div class='card'>
                <img src=${imgUrl}/>
                <p><b>Name: </b><b></b>${charName}</p>
                <p><b>Status: </b>${status}</p>
                <p><b>Species: </b>${species}</p>
                <p><b>Gender: </b>${gender}</p>
                <p><b>Origin: </b>${name}</p>
            </div>
            `
        })
    })
    .catch(error => container.innerHTML = `<p>No such character found!</p>`)
}