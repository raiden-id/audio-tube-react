import axios from "axios";

export const getRawAudio = async (data, callback) => {
  try {
    const response = await axios.get(
      //"http://127.0.0.1:5000/api/video_id/dEgTl5H5U6Y",
      "https://pytube-api.raiden-id.repl.co/api/video_id/" + data,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    callback(response.data.results.stream.mp3);
  } catch (err) {
    console.error(err);
  }
};
