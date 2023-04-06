import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID sUsD6Wul7I7Vzus4mazn3gSIepEBmEExi5y2Xxh71Wo",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
