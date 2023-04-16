const axios = require('axios');
const awsServerlessExpress = require('aws-serverless-express');
const app = require('express')();
app.use(require('body-parser').json());

app.post('/findFamousSong', async (req, res) => {
  const artist = req.body.queryResult.parameters.artist;
  const famousSong = await getFamousSong(artist);
  res.send({
    fulfillmentText: `The most famous song by ${artist} is ${famousSong}.`
  });
});

const server = awsServerlessExpress.createServer(app);
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);

async function getFamousSong(artist) {
  const spotifyAccessToken = await getSpotifyAccessToken(); // Implement getSpotifyAccessToken function
  const artistId = await getArtistId(artist, spotifyAccessToken);
  const famousSong = await getTopTrack(artistId, spotifyAccessToken);
  return famousSong;
}


async function getSpotifyAccessToken() {
    const clientId = 'ENTER YOUR CLIENT ID';
    const clientSecret = 'ENTER YOUR CLIENT SECRET';
    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
      params: {
        grant_type: 'client_credentials'
      },
      headers: {
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  
    return response.data.access_token;
  }
  
  async function getTopTrack(artistId, accessToken) {
    const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks`, {
      params: {
        country: 'US'
      },
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  
    if (response.data.tracks.length === 0) {
      throw new Error('No top tracks found');
    }
  
    return response.data.tracks[0].name;
  }
  