import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { MeetUpCard } from "./MeetUpCard";
import { useMeetup } from "../context/MeetupContext";

export const MeetUps = () => {
  const { meetState, meetDispatch } = useMeetup();

  const [eventType, setEventType] = useState("");

  const handleChange = (event) => {
    setEventType(event.target.value);
    const filterData = meetState?.allmeetups?.filter(
      (data) => data.eventType == eventType
    );
    meetDispatch({ type: "DATA_EVENT_TYPE", payload: filterData });
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "8px",
        }}
      >
        <Typography variant="h3">MeetUp Events</Typography>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Select Event Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={eventType}
              label="Select Event Type"
              onChange={handleChange}
            >
              <MenuItem value={"Online"}>Online</MenuItem>
              <MenuItem value={"Offline"}>Offline</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", padding: "8px" }}>
        {meetState?.filteredData?.map((meetup) => (
          <MeetUpCard key={meetup.id} meetup={meetup} />
        ))}
      </Box>
    </Box>
  );
};
