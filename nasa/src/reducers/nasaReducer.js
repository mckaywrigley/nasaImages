import { IMAGE_DATA } from "../actions/types";

const initialState = {
  images: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case IMAGE_DATA:
      return {
        ...state,
        images: action.payload
      };

    default:
      return state;
  }
}
