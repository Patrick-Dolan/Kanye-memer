export default class GiphyService {
  static getGif(keyword) {
    return fetch(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_KEY}&tag=${keyword}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch((error) => {
        return error;
      });
  }
}