document.getElementById('spotifyForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const url = document.getElementById('spotifyUrl').value;
    const songId = url.split('/').pop().split('?')[0];

    if (!songId) {
        alert("Please enter a valid Spotify song URL.");
        return;
    }

    fetchSpotifySongInfo(songId);
});

async function fetchSpotifySongInfo(songId) {
    const apiKey = 'YOUR_RAPIDAPI_KEY'; // Replace with your RapidAPI key
    const url = `https://spotify23.p.rapidapi.com/track/${songId}/`;
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (data && data.track) {
            displaySongInfo(data.track);
        } else {
            throw new Error('Song not found.');
        }
    } catch (error) {
        document.getElementById('errorMessage').style.display = 'block';
        console.error('Error fetching song info:', error);
    }
}

function displaySongInfo(track) {
    document.getElementById('songTitle').textContent = track.name;
    document.getElementById('songArtist').textContent = track.artists[0].name;
    document.getElementById('songAlbum').textContent = track.album.name;

    document.getElementById('songInfo').style.display = 'block';
    document.getElementById('errorMessage').style.display = 'none';
}
