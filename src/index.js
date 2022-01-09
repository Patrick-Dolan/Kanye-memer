import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import KanyeService from "./js/KanyeService";
import GiphyService from "./js/GiphyService";
// import getLongestWord from "./js/searchQuote";

$(document).ready(() => {
  $("#generateMeme").click(() => {
    KanyeService.getQuote()
      .then((response) => {
        if (response.quote) {
          $("#showQuote").text(`${response.quote}`);
        } else {
          $("#showError").text(response.message);
        }
      })
      .then(() => {
        GiphyService.getGif("Kanye West")
          .then((response) => {
            if (response.data) {
              $("#showGif").html(`<img src="${response.data.images.original.url}">`);
            } else {
              $("#showError").text(response.message);
            }
          });
      });
  });
});