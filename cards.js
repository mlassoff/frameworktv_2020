
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


let cat_new_releases = [];
let cat_coding = [];
let cat_design = [];
const categories = [cat_new_releases, cat_coding, cat_design];
const cat_names = ["cat_new_releases", "cat_coding", "cat_design"];


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
                    case "design":
                        cat_design.push(videos[x]);
                        break;
                }
            }
        }
    populateCategories();
}

function populateCategories(){
    for(z in cat_names){
        console.log(cat_names[z]);
        out = populatePage(categories[z]);
        document.getElementById(cat_names[z]).innerHTML = out;
    }
}

function populatePage(category) {
    let out = "";
    console.log(category);
    shuffle(category)
    for(x=0; x < 4; x++){
        const imageURL = category[x].id + ".png";
        const title = category[x].title;
        out += "<div class='card'>";
        out += "<img src = 'img/" + imageURL + "' alt='" + title + "'/>";
        out += "<p>" + title + "</p>";
        out += "</div>";
    }
    return(out);
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
