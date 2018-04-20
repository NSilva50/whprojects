var characterUl = document.querySelector('ul');
var homeUrl = 'https://rickandmortyapi.com/api/character/';
// function getReq(url, func){
//    var req = new XMLHttpRequest();
//    req.open('Get','https://rickandmortyapi.com/api/character/');
//    req.onload = function(){
//        if(req.readyState === 4 && req.status === 200){
//            console.log('success!', req.statusText);
//            func(JSON.parse(req.responseText));
//        }
//        else {
//            console.log('error.', req.statusText);
//        }
//    }

//    req.send(null);
// }

function ajaxReq(url, func){
    $.ajax({
        url: url,
    }).done(func);
}
getReq(homeUrl, getCharacters);

var characterURL;

$('body > ul').on('click', 'li', function(evt){
   if(this.dataset.url){
       characterURL = this.dataset.url;
       characterUl.innerHTML = '';
       getReq(characterURL, getCharacter);
   }
});

function getCharacter(character){
    console.log(character);
}

function getCharacter(character){
    console.log(character);
    var character = `
        <li data-url="${character.url}">
            img src="${character.image}" alt=${character.name}">
            <div>
                <h3>${character.name}</h3>
                <ul>
                    <li><b>Gender:</b>${character.gender}</li>
                    <li><b>Species:</b>${character.species}</li>
                    <li><b>Status:</b>${character.status}</li>
               </ul>
           </div>
           
       </li>
    `
}

function getCharacters(characters){
    var characterArr = characters;
   for(var i = 0; i < characterArr.results.length; i++){
       console.log(characterArr.results[i]);
       var character = `
       <li>
           <li data-url="${characterArr.results[i].url}">
           <img src="${characterArr.results[i].image}" alt="[image]">
           <div>
               <h3>${characterArr.results[i].name}</h3>
               <ul>
                   <li><b>Species:</b>${characterArr.results[i].species}</li>
                   <li><b>Gender:</b>${characterArr.results[i].gender}</li>
                   <li><b>Status:</b>${characterArr.results[i].status}</li>
               </ul>
           </div>
           
       </li>
       `;
       characterUl.innerHTML += character;
   }
}