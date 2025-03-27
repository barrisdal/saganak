// JSON dosyasını yükle
fetch('https://raw.githubusercontent.com/barrisdal/saganak/main/SAHNE%20YAG%CC%86MUR.json')
    .then(response => response.json())
    .then(data => {
        const songs = data.Songs;
        const songSelect = document.getElementById("songSelect");

        songs.forEach((song, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = song.Name;
            songSelect.appendChild(option);
        });

        loadSong();
    })
    .catch(error => console.error('Error loading JSON:', error));

function loadSong() {
    const songSelect = document.getElementById("songSelect");
    const selectedSong = songs[songSelect.value];

    document.getElementById("songTitle").textContent = selectedSong.Name;
    document.getElementById("htmlContent").innerHTML = selectedSong.Html;
}
