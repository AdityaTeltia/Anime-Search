
document.getElementById('search-input').addEventListener('keyup', search);

clearOutput();

async function search(e){

    const input = document.getElementById('search-input').value.split(' ');
    let query = '';
    input.forEach(word => {
        query +=`${word}%20`
    })
    let name = query.slice(0,-3);
    const response = await fetch(  `https://jikan1.p.rapidapi.com/search/anime?q=${name}`, {
	    "method": "GET",
	    "headers": {
	        "x-rapidapi-host": "jikan1.p.rapidapi.com",
		    "x-rapidapi-key": "798b15dc97msh72d7aa3ed0d34bdp19e335jsncbbcbc0ed592"
         }
    })
    const resData = await response.json();
    const ul =document.querySelector('.list-group');
    resData.results.forEach((object,index) => {
        const front = ul.innerHTML += `
        <li class = "list-item">
            <div class = "card" id ="${index}">
                <img src = "${object.image_url}">
                <div class = "title"><a href = "${object.url}" target = "_blank">${object.title}</a></div>
                <div class = "episodes">Episodes: ${object.episodes}</div>
            </div>
        </li>
    `
    })
    e.preventDefault();
}


function clearOutput(){
    if(document.getElementById('search-input').value === ''){
        document.querySelector('.list-group').innerHTML = '';
    }
    
}



