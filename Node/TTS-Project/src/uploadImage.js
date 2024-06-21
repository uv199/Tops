/*
const ffmpeg = require("fluent-ffmpeg");
const ffmpegStatic = require("ffmpeg-static");
const path = require("path");
// Set the path to the FFmpeg binary
ffmpeg.setFfmpegPath(ffmpegStatic);

// Function to extract audio from video
function extractAudioFromVideo(inputVideoPath, outputAudioPath) {
  return new Promise((resolve, reject) => {
    ffmpeg(inputVideoPath)
      .output(outputAudioPath)
      .noVideo()
      .on("end", () => {
        console.log("Audio extraction complete");
        resolve();
      })
      .on("error", (err) => {
        console.error("Error extracting audio:", err);
        reject(err);
      })
      .run();
  });
}

// Example usage
const inputVideoPath = path.join(__dirname, "./video/video.mp4");
const outputAudioPath = path.join(__dirname, "./video/output-audio.mp3");

extractAudioFromVideo(inputVideoPath, outputAudioPath)
  .then(() => console.log("Audio extracted successfully"))
  .catch((error) => console.error("Failed to extract audio:", error));

  */
const fs = require("fs");
const path = require("path");
const { IamAuthenticator } = require("ibm-watson/auth");
const SpeechToTextV1 = require("ibm-watson/speech-to-text/v1");
require("dotenv").config();

const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.IBM_API_KEY,
  }),
  serviceUrl: process.env.IBM_URL,
});

// Function to convert audio to text
async function audioToText(audioFilePath) {
  const params = {
    audio: fs.createReadStream(audioFilePath),
    contentType: "./video/output-audio.mp3", // Update this if your audio file is in a different format
  };

  try {
    const { result } = await speechToText.recognize(params);
    const transcription = result.results
      .map((result) => result.alternatives[0].transcript)
      .join("\n");
    console.log(`Transcription: ${transcription}`);
    return transcription;
  } catch (err) {
    console.error("ERROR:", err);
  }
}

// Example usage
const audioFilePath = path.join(__dirname, "output-audio.mp3");

audioToText(audioFilePath)
  .then((transcription) => {
    console.log("Transcription complete:", transcription);
  })
  .catch((err) => {
    console.error("Failed to transcribe audio:", err);
  });

