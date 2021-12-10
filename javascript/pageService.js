import MediaSection from "./MediaSection.js";

const pageService = (inputDate, mediaSection, errorAPI) => {
  const media = new MediaSection(mediaSection);
  media.resetSection();

  const date = inputDate.val();

  $.ajax({
    method: "GET",
    url: `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`,
    /* create the media section upon successful request */
    success: function (response) {
      //console.log(response);
      if (response.media_type == "image") {
        if (!errorAPI.hasClass("invisible")) {
          errorAPI.addClass("invisible");
        }
        media.createImage(response.title, response.url);
      } else {
        if (!errorAPI.hasClass("invisible")) {
          errorAPI.addClass("invisible");
        }
        media.createVideo(response.title, response.url);
      }
    },
    /* request error handling - message to the user */
    error: function (request) {
      console.log(request.responseText);
      if (errorAPI.hasClass("invisible")) {
        errorAPI.removeClass("invisible");
      }
    },
  });
};

export default pageService;
