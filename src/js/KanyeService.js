export default class KanyeService {
  static getQuote() {
    return fetch(`https://api.kanye.rest/`)
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