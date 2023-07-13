export const intialState = {
  allmeetups: [],
  filteredData: [],
};
export const meetReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_MEET": {
      return {
        ...state,
        allmeetups: action.payload,
        filteredData: action.payload,
      };
    }

    case "DATA_EVENT_TYPE": {
      return {
        ...state,
        filteredData: action.payload,
      };
    }
    case "SEARCH_TERM_FILTER": {
      return {
        ...state,
        filteredData: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
