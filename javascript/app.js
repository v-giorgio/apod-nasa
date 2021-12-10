import pageService from "./PageService.js";

const inputDate = $("#selected-date");
const submitBtn = $(".submit-button");
const mediaSection = $(".media-section");
const errorDate = $(".error-date");
const errorAPI = $(".error-api");

/* Onclick submit button event */
submitBtn.bind("click", () => {
  const currentDate = new Date();
  const inputSelectedDate = new Date(inputDate.val());
  /* check if the date is ahead from now */
  const compareDates = inputSelectedDate.getTime() > currentDate.getTime();
  /* check form errors:
    - empty input
    - date is ahead from now
  */
  if (inputDate.val() == "" || compareDates) {
    errorDate.removeClass("invisible");
  } else {
    if (errorDate.hasClass("invisible")) {
      pageService(inputDate, mediaSection, errorAPI);
    } else {
      errorDate.addClass("invisible");
      pageService(inputDate, mediaSection, errorAPI);
    }
  }
});
