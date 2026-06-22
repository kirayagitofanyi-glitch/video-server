const fs = require("fs");

async function uploadToCloudflare(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error("File not found");
  }

  return {
    success: true,
    url: `https://cdn.yourdomain.com/${Date.now()}.mp4`
  };
}

module.exports = {
  uploadToCloudflare
};
