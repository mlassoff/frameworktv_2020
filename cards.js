
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

function populatePage(){
    let out = "";
    for(x in cat_new_releases){
        const imageURL = cat_new_releases[x].id + ".png";
        const title = cat_new_releases[x].title;
        out += "<div class='card'>";
        out += "<img src = 'img/" + imageURL + "' alt='" + title + "'/>";
        out += "<p>" + title + "</p>";
        out += "</div>";
    }
    console.log(out);
    document.getElementById('new_releases').innerHTML = out;
}
