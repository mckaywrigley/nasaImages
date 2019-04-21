import axios from "axios";

import { IMAGE_DATA } from "./types";

const url = "https://images-api.nasa.gov";

export const getImages = searchTerm => dispatch => {
  axios
    .get(`${url}/search/${searchTerm}`)
    .then(res => {
      dispatch({
        type: IMAGE_DATA,
        payload: res.data
      });
      console.log(res);
    })
    .catch(err => console.log(err));
};
