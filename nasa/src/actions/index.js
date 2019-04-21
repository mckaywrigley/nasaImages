import axios from "axios";

import { IMAGE_DATA } from "./types";

const url = "https://api.unsplash.com";

export const getImages = searchTerm => dispatch => {
  axios
    .get(
      `${url}/search/photos?client_id=899e9f3093d193dab9b2b84879e0522d33f639c098550a874f92560e492679c4`,
      { params: { query: searchTerm } }
    )
    .then(res => {
      dispatch({
        type: IMAGE_DATA,
        payload: res.data
      });
      console.log(res);
    })
    .catch(err => console.log(err));
};
