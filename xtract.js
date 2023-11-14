// xtract.js;
//


import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const output = await replicate.run(
  "nateraw/whisper-large-v3:e13f98aa561f28e01abc92a01a4d48d792bea2d8d1a4f9e858098d794f4fe63f",
  {
    input: {
      filepath: "https://replicate.delivery/pbxt/JqgoueglbGSq0ReVQXgzmiqzt0INVT3u5Z8qK4Ocr4mKeucA/Donald_Trump_voice.ogg",
      translate: false,
      return_timestamps: true
    }
  }
);

