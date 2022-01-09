import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import KanyeService from "./js/KanyeService";

$(document).ready(() => {
  $("#generateMeme").click(() => {
    KanyeService.getQuote()
      .then((response) => {
        if (response.quote) {
          $("#showQuote").text(`${response.quote}`);
        } else {
          $("#showError").text(response.message);
        }
      });
  });
});