import axios from "axios";

export const searchServices = async (data, callback) => {
  try {
    const datax = {
      k_query: data,
      k_page: "home",
      hl: "en",
      q_auto: 0,
    };

    const res = await axios.post(
      "https://www.y2mate.com/mates/en853/analyzeV2/ajax",
      datax
    );
    //console.log(response);
    callback(res);
  } catch (err) {
    console.error(err);
  }
};
