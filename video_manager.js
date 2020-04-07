let videoList = [];
let selectedVideo = null;

window.onload = function(){
    fetch('library.js')
          .then(data => {
            return data.json();
    }).then(data => {
        parseVideos(data.movies);
    }).catch(error => {
        console.log(error)
    });

    $("#btnCancel").on('click', function(){
        window.location.href="#master";
    });
    
    $("#btnSave").on('click',saveData);
}

function parseVideos(videos){
    for(x in videos){
        const id = videos[x].id;
        const title = videos[x].title;
        const shortDescription = videos[x].shortDescription;
        const thumbURL = videos[x].thumbnail;
        const releaseDate = videos[x].releaseDate;
        const tags = videos[x].tags;
        const content = videos[x].content;
        const dateAdded = content.dateAdded;
        const duration = content.duration;
        const video = content.videos[0];
        const videoURL = video.url;
        const quality = video.quality;
        const type = video.videoType;
        const bitrate = video.bitrate;
        
        const thisVideo = new Video(id, title, shortDescription, thumbURL, releaseDate, tags, dateAdded, duration, videoURL, quality, type, bitrate);
        videoList.push(thisVideo);
    }
    displayVideos(videoList);
}

function displayVideos(videoList){
    let out = "";
    for(x in videoList){
        out += "<li id='" + videoList[x].id + "'><a href='#detail'>";
        out += "<img src ='" + videoList[x].thumbURL + "'/>";
        out += "<strong>" + videoList[x].title + "</strong>";
        out += "<br/>ID: " + videoList[x].id;
        out += "<br/><span style='white-space:normal !important; font-weight: normal;'>" + videoList[x].shortDescription;
        out += "</a></li>";
    }
    $('#listview').html(out);
    $('#listview').listview().listview('refresh');
    
    $('#listview').on('click', 'li', function() {
        populateDetail(this.id, videoList);
    });
}

function populateDetail(id, videoList){
    for(x in videoList){
        if(videoList[x].id == id){
            selectedVideo = videoList[x];
            $('#videoImage').attr("src", selectedVideo.thumbURL );
            $('#id').val(selectedVideo.id);
            $('#title').val(selectedVideo.title);
            $('#description').html(selectedVideo.shortDescription);
            
            //Get the tags
            let out = "";
            const numTags = selectedVideo.tags.length;
            for(x in selectedVideo.tags){
                out += selectedVideo.tags[x];
                if(x < numTags-1){
                    out += ",";
            }
            $('#tags').val(out);
                    
        }
    }
}
}

function saveData(){
    console.log("Before");
    console.log(selectedVideo);
    const id = $('#id').val();
    const title = $('#title').val();
    const description = $('#description').val();
    const tags = $('#tags').val()
    selectedVideo.id = id;
    selectedVideo.title = title;
    selectedVideo.shortDescription = description;
    selectedVideo.tags = tags.split(',');
    console.log("After");
    console.log(selectedVideo);
    
}
