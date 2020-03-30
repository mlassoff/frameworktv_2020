
/*
*       Categories:
*       new                 New Releases
*       coding              Coding
*       design              Digital Design
*       tool_school         Tool School
*       coding_projects     Coding Projects
*       design_projects     Design Projects
*       code_lab            Code Lab
*/

let cat_coding = [];
let cat_coding_projects = [];
let cat_new_releases = [];
const categories = [cat_new_releases, cat_codeing, cat_coding_projects];


window.onload = function(){
    fetch('library.js')
          .then(data => {
            return data.json();
    }).then(data => {
        parseVideos(data.movies);
    }).catch(error => {
        console.log(error)
    });
}

function parseVideos(videos){
    
        for(x in videos){
            let tags = videos[x].tags;
            for(y in tags){
                switch(tags[y]){
                    case "new": 
                        cat_new_releases.push(videos[x]);
                        break;
                    case "coding":
                        cat_coding.push(videos[x]);
                        break;
                    case "coding_projects":
                        cat_coding_projects.push(videos[x]);
                        break;
                }
            }
        }
    populatePage();
}

function populatePage() {
    let out = "";
    console.log(cat_new_releases);
    shuffle(cat_new_releases)
    for(x=0; x < 4; x++){
        const imageURL = cat_new_releases[x].id + ".png";
        const title = cat_new_releases[x].title;
        out += "<div class='card'>";
        out += "<img src = 'img/" + imageURL + "' alt='" + title + "'/>";
        out += "<p>" + title + "</p>";
        out += "</div>";
    }
    document.getElementById('new_releases').innerHTML = out;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
