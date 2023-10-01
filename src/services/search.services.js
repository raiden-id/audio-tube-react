import axios from "axios";

export const searchServices = async (data, callback) => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/v1/search/" + data
    );
    callback(response.data.response.vitems);
  } catch (err) {
    console.error(err);
  }
};
