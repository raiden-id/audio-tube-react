import axios from "axios";

export const getRawAudio = async (data, callback) => {
  try {
    const response = await axios.get(
      "https://y2mate-hudaxcode.vercel.app/api/v1/data/" + data
    );
    callback(response.data.response.dlink);
  } catch (err) {
    console.error(err);
  }
};
