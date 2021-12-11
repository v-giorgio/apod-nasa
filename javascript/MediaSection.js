export default class MediaSection {
  constructor(media) {
    this.mediaSection = media;
  }

  /* method: reset the media section for the next request */
  resetSection() {
    this.mediaSection.html("");
  }

  /* method: create the image section */
  createImage(responseImgTitle, imageUrl, imgExplanation) {
    this.mediaSection.removeClass("invisible");
    const imageTitle = $(`<h1>${responseImgTitle}</h1>`);
    const imageDescription = $(`<p>${imgExplanation}</p>`);
    const picture = $(`<img src="${imageUrl}">`);
    picture.css({
      maxWidth: "60%",
      maxHeight: "60%",
      borderRadius: "10px",
      boxShadow: "10px 10px 2px #000",
    });
    this.mediaSection.append(imageTitle);
    this.mediaSection.append(picture);
    this.mediaSection.append(imageDescription);
  }

  /* method: create the video section */
  createVideo(responseVideoTitle, videoUrl, videoExplanation) {
    this.mediaSection.removeClass("invisible");
    const videoTitle = $(`<h1>${responseVideoTitle}</h1>`);
    const videoDescription = $(`<p>${videoExplanation}</p>`);
    const video = $(
      `<iframe src="${videoUrl} width="60%" height="60%" frameborder="0" allowfullscreen></iframe>`
    );
    video.css({
      border: "none",
      borderRadius: "10px",
      boxShadow: "10px 10px 2px #000",
    });
    this.mediaSection.append(videoTitle);
    this.mediaSection.append(video);
    this.mediaSection.append(videoDescription);
  }
}
