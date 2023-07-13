import { createContext, useContext, useEffect, useReducer } from "react";
import { intialState, meetReducer } from "../reducers/meetReducer";
import { meetups } from "../data/data";

export const MeetupContext = createContext();

export const MeetupProvider = ({ children }) => {
  const [meetState, meetDispatch] = useReducer(meetReducer, intialState);
  const getData = () => {
    meetDispatch({ type: "GET_ALL_MEET", payload: meetups });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <MeetupContext.Provider value={{ meetState, meetDispatch }}>
      {children}
    </MeetupContext.Provider>
  );
};

export const useMeetup = () => useContext(MeetupContext);
