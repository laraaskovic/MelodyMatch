// frontend/src/components/SpotifyPlayer.js

import React, { useState } from 'react';
import axios from 'axios';

const SpotifyPlayer = () => {
  const [albumData, setAlbumData] = useState(null);

  const fetchAlbumData = async () => {
    try {
      const response = await axios.get('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy', {
        headers: {
          'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Replace with your access token
        },
      });
      setAlbumData(response.data);
    } catch (error) {
      console.error('Error fetching album data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchAlbumData}>Fetch Album Data</button>
      {albumData && (
        <div>
          <h2>{albumData.name}</h2>
          <img src={albumData.images[0].url} alt="Album Cover" />
          <audio controls>
            <source src={albumData.tracks.items[0].preview_url} type="audio/mpeg" />
          </audio>
        </div>
      )}
    </div>
  );
};

export default SpotifyPlayer;
