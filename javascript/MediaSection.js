export default class MediaSection {
  constructor(media) {
    this.mediaSection = media;
  }

  /* method: reset the media section for the next request */
  resetSection() {
    this.mediaSection.html("");
  }

  /* method: create the image section */
  createImage(responseImgTitle, imageUrl) {
    this.mediaSection.removeClass("invisible");
    const imageTitle = $(`<h1>${responseImgTitle}</h1>`);
    const picture = $(`<img src="${imageUrl}">`);
    picture.css({
      maxWidth: "80%",
      maxHeight: "80%",
      borderRadius: "10px",
      boxShadow: "10px 10px 2px #000",
    });
    this.mediaSection.append(imageTitle);
    this.mediaSection.append(picture);
  }

  /* method: create the video section */
  createVideo(responseVideoTitle, videoUrl) {
    this.mediaSection.removeClass("invisible");
    const videoTitle = $(`<h1>${responseVideoTitle}</h1>`);
    const video = $(
      `<iframe src="${videoUrl} width="90%" height="80%" frameborder="0" allowfullscreen></iframe>`
    );
    video.css({
      border: "none",
      borderRadius: "10px",
      boxShadow: "10px 10px 2px #000",
    });
    this.mediaSection.append(videoTitle);
    this.mediaSection.append(video);
  }
}
