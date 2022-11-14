async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');
  const sharp = require('sharp');

  // Creates a client
  const client = new vision.ImageAnnotatorClient({
    keyFilename: "./keymain.json",
  });

  await sharp('./testPdf5-1.png').grayscale(true).normalise().sharpen({
    sigma: 2,
    m1: 0,
    m2: 3,
    x1: 3,
    y2: 15,
    y3: 15,
  }).toFile('./testPdf5-11.png');

const detectText = async () => {
  let text1 = await client.textDetection("./testPdf5-11.png");
  let result = text1[0].fullTextAnnotation.text;
  console.log(result.split('\n'));
}
detectText();
}
quickstart();