import axios from "axios";

export const searchServices = async (data, callback) => {
  try {
    const response = await axios.get(
      "https://y2mate-hudaxcode.vercel.app/api/v1/search/" + data
    );
    callback(response.data.response.vitems);
  } catch (err) {
    console.error(err);
  }
};
