const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("ffmpeg-static");

ffmpeg.setFfmpegPath(ffmpegPath);

function convertToMp4(input, output) {
  return new Promise((resolve, reject) => {
    ffmpeg(input)
      .output(output)
      .videoCodec("libx264")
      .format("mp4")
      .on("end", resolve)
      .on("error", reject)
      .run();
  });
}

module.exports = {
  convertToMp4
};
