import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { useMeetup } from "../context/MeetupContext";
import { IndividualCard } from "../components/IndividualCard";
export const DetailPage = () => {
  const { meetId } = useParams();
  console.log("🚀 ~ file: DetailPage.jsx:7 ~ DetailPage ~ meetId:", meetId);
  const { meetState } = useMeetup();
  console.log(
    "🚀 ~ file: DetailPage.jsx:9 ~ DetailPage ~ meetState:",
    meetState
  );

  const indiviualmeet = meetState?.allmeetups?.find(
    (meet) => meet.id == meetId
  );
  console.log(
    "🚀 ~ file: DetailPage.jsx:11 ~ DetailPage ~ indiviualmeet:",
    indiviualmeet
  );
  return (
    <Box>
      <IndividualCard indiviualmeet={indiviualmeet} />
    </Box>
  );
};
