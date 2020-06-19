import { createClient } from "contentful";

import createDataContext from "./createDataContext";

const initialState = {
  media: [],
  interaction: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_MEDIA": {
      return {
        ...state,
        media: action.payload,
      };
    }
    case "SET_INTERACTION": {
      return {
        ...state,
        interaction: action.payload,
      };
    }
    default:
      throw new Error("Bad Action Type");
  }
}

const fetchInteraction = (dispatch) => {
  return () => {
    const client = createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    });
    client
      .getEntries({
        'content_type': 'interaction'
      })
      .then((response) =>
        dispatch({
          type: "SET_INTERACTION",
          payload: response.items,
        })
      )
      .catch(console.error);
};
}



export const { Context, Provider } = createDataContext(
  reducer,
  {
    fetchInteraction
  },
  initialState
);
