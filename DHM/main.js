(() => {
    var map = L.map('map', {tap: false})
    .setView([44.65937791848819, -63.57625976513644], 14);

    L.tileLayer('https://api.mapbox.com/styles/v1/cassandrathalia/cl0lhm5k9002j14mjs0q6t7vz/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiY2Fzc2FuZHJhdGhhbGlhIiwiYSI6ImNsMGNqanBqeDBnbGQzY3BsaWpvY3YzbXEifQ.SW6zwmSWhUFdnHNYT6rDQA'
    }).addTo(map);

    //----------------------------------- ICONS ----------------------------------------- 
    var greenIcon = new L.Icon({
        iconUrl: 'images/green-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [41, 41],
        iconAnchor: [12, 41],
        popupAnchor: [8, -34],
        shadowSize: [60, 41]
    });

    var redIcon = new L.Icon({
        iconUrl: 'images/red-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [41, 41],
        iconAnchor: [12, 41],
        popupAnchor: [8, -34],
        shadowSize: [60, 41]
    });

    var violetIcon = new L.Icon({
        iconUrl: 'images/violet-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [41, 41],
        iconAnchor: [12, 41],
        popupAnchor: [8, -34],
        shadowSize: [60, 41]
    });

    var expIcon = new L.Icon({
        iconUrl: 'images/exp2.png',
        iconSize: [80, 80],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    var houseIcon = new L.Icon({
        iconUrl: 'images/house.png',
        iconSize: [35, 35],
        iconAnchor: [20, 30],
        popupAnchor: [1, -34],
    });

    //----------------------------------- LISTENING MARKERS AND POPUPS ----------------------------------------- 
    let markerGroup = L.featureGroup().addTo(map);

    let popUpSetUp = (title, img, imgTitle, year, ivr, about, media) => {
        return '<h1>' + title + '</h1> \
            <img src="' + img + '" alt="' + imgTitle + '" /> \
            <div id="desc"> \
                <h4> ' + ivr + '</h4> \
                <i>' + year + '</i> \
                <p>' + about + '</p> \
                <small id="caption">' + imgTitle + '</small> \
            </div> \
            <div id="player">' + media + '</div>'
    }

    let popUpStyle = { className: "popUpStyle" };

    let langilleMarker = L.marker([44.66964336000262, -63.55930055991591], {icon: violetIcon})
    .bindPopup(popUpSetUp("Walden Langille",
        "images/hawthorne-school.png", "Hawthorne School damaged by explosion. 2009.038.002",
        "1992",
        "Interviewed by James Candow",
        "Walden Langille was at Hawthorne School at the time of the explosion. He particularly recalls the effect of the event on local Dartmouth industries.",
        createMediaPlayer("audio/Langille.mp3")), popUpStyle)
    .addTo(markerGroup);

    let gentlesMarker = L.marker([44.658917, -63.571400], {icon: violetIcon})
    .bindPopup(popUpSetUp("Verna Gentles",
        "images/Gentles.png", "Image of Verna Gentles. 1994.014.001",
        "1990",
        "Interviewed by Lois Richards",
        "Verna Gentles owned and opperated The Hat Shop in downtown Dartmouth. She was on the ferry at the time of the explosion.",
        createMediaPlayer("audio/Gentles.mp3")), popUpStyle)
    .addTo(markerGroup);

    let ardleyMarker = L.marker([44.6693319810874, -63.56489863108046], {icon: violetIcon})
    .bindPopup(popUpSetUp("Mabel Ardley",
        "images/greenvale-school.png", "Image of Greenvale School. 1988.038.117",
        "1992",
        "Interviewed by Lois Richards",
        "Mabel Ardley, nee Livingstone, was at Greenvale School at the time of the explosion.",
        createMediaPlayer("audio/Ardley.mp3")), popUpStyle)
    .addTo(markerGroup);

    let morashMarker = L.marker([44.67163177762183, -63.584244984874076], {icon: redIcon})
    .bindPopup(popUpSetUp("Ethel Morash",
        "images/placeholder.png", "",
        "1989",
        "Interviewed by Lois Richards",
        "Ethel Morash, nee Mitchell, was at home on Hester street at the time of the explosion. She became a popular local musician.",
        createMediaPlayer("audio/Morash.mp3")), popUpStyle)
    .addTo(markerGroup);

    let dillmanMarker = L.marker([44.671336002053174, -63.58072735706985], {icon: redIcon})
    .bindPopup(popUpSetUp("Leighton Dillman",
        "images/Dillman.png", "Image of Leighton Dillman taken in 1985. 1988.035.003",
        "1981",
        "Interviewed by Janet Kitz",
        "Leighton Dillman, namesake of the Dartmouth commons, was at work at the Consumer Cordage Rope Company on Wyse Road at the time of the explosion.",
        createMediaPlayer("audio/Dillman.mp3")), popUpStyle)
    .addTo(markerGroup);

    let robinsonMarker = L.marker([44.665919, -63.570708], {icon: redIcon})
    .bindPopup(popUpSetUp("Charles Robinson",
        "images/park-school.png", "Image of Park School with explosion damage. 1986.036.023",
        "1991",
        "Interviewed by Lois Richards",
        "Charles Robinson was at home on Water Street, now Alderny Drive, at the time of the explosion. His sister was hurt on her way to Park School.",
        createMediaPlayer("audio/Robinsons.mp3")), popUpStyle)
    .addTo(markerGroup);

    let campbellMarker = L.marker([44.64575930956331, -63.57620007341009], {icon: violetIcon})
    .bindPopup(popUpSetUp("Campbell Sisters", 
        "images/placeholder.png", "",
        "1992",
        "Interviewed by Lois Richards",
        "The Cambpell sisters, both nee Kuhn, were at school at the Halifax Academy at the time of the explosion.",
        createMediaPlayer("audio/Campbells.mp3")), popUpStyle)
    .addTo(markerGroup);

    let forbesMarker = L.marker([44.94250699610419, -63.99674375712727], {icon: violetIcon})
    .bindPopup(popUpSetUp("Mollie Forbes",
        "images/Forbes.png", "Mollie Forbes, foreground, with Dr. Helen Creighton. 1989.061.001",
        "1991",
        "Interviewed by Lois Richards",
        "Mollie Forbes was on her way home by train from the Annapolis Valley at the time of the explosion. She was just outside Windsor when the blast occured.",
        createMediaPlayer("audio/Forbes.mp3")), popUpStyle)
    .addTo(markerGroup)

    let harrisonMarker = L.marker([44.667192676727396, -63.56099803184092], {icon: redIcon})
    .bindPopup(popUpSetUp("L. Dorothy Harrison",
        "images/Harrison.png", "Image of Mr and Mrs Harrison in front of their home at 7 Newcastle St, Dartmouth. 2011.144.001.034",
        "1975",
        "Interviewed by Patricia J. Harrison",
        "Dorothy Harrison was 29 years old at the time of the explosion. She was at home with her young baby when the blast occured.",
        createMediaPlayer("audio/Harrison.mp3")), popUpStyle)
    .addTo(markerGroup)

    let creightonMarker = L.marker([44.667579635922564, -63.562993538011625], {icon: redIcon})
    .bindPopup(popUpSetUp("Dr. Helen Creighton",
        "images/Creighton.png", "Image of Helen Creighton standing in front of her greenhouse, which was damaged in the explosion. 1995.031.191",
        "1975",
        "Interviewed by Patricia J. Harrison",
        "Dr Helen Creighton, renound folklorist and recipiant of the Order of Canada, was at home on Portland Street at the time of the explosion.",
        createMediaPlayer("audio/Creighton.mp3")), popUpStyle)
    .addTo(markerGroup)

    L.marker([44.6667507965406, -63.55981269669883], {icon: greenIcon})
    .addTo(markerGroup);

    L.marker([44.66836058364493, -63.59571100224489], {icon: expIcon})
    .addTo(markerGroup);

    //----------------------------------- HOME MARKERS FUNCTIONALITY ----------------------------------------- 
    let tempHomeMarker;
    markerGroup.on("mouseover", function (event) {
        var clickedMarker = event.layer;
        if (clickedMarker === campbellMarker){
            tempHomeMarker = L.marker([44.67918740780488, -63.59255763043874], {icon: houseIcon}).addTo(markerGroup)
        }
        else if (clickedMarker === ardleyMarker){
            tempHomeMarker = L.marker([44.667299104121, -63.5761565224546], {icon: houseIcon}).addTo(markerGroup)
        }
        else if (clickedMarker === langilleMarker){
            tempHomeMarker = L.marker([44.666030630524254, -63.56797954232895], {icon: houseIcon}).addTo(markerGroup)
        }
    });
    markerGroup.on("mouseout", function (event) {
        map.removeLayer(tempHomeMarker);
    });

    //----------------------------------- BLAST RADIUS FUNCTIONALITY ----------------------------------------- 
    let blastRadius = L.circle([44.66836058364493, -63.59571100224489], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.3,
        radius: 2400,
    });
    let blastRadBtnTxt = document.querySelector("#radBtn");
    let blastRadBool = false
    function showBlastRad() { 
        if (blastRadBool === false){
            blastRadius.addTo(map);
            blastRadBool = true;
            blastRadBtnTxt.innerText = "HIDE BLAST RADIUS"
        }
        else if (blastRadBool === true){
            map.removeLayer(blastRadius);
            blastRadBool = false;
            blastRadBtnTxt.innerText = "SHOW BLAST RADIUS"
        }
    }
    const radBtn = document.querySelector("#radBtn");
    radBtn.addEventListener("click", showBlastRad)


    //----------------------------------- MEDIA PLAYER ----------------------------------------- 
    function createMediaPlayer(url){
        return '<audio class="audio_volume_only" \
                    controls preload \
                    src=' + url + '> \
                    Your browser does not support the \
                    <code>audio</code> element. \
                </audio>';
    }
    
})();