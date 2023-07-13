import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Moment from "moment";
import { useNavigate } from "react-router-dom";

export const MeetUpCard = ({ meetup }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        padding: "8px",
      }}
    >
      <Card sx={{ width: "500px" }} onClick={() => navigate(`/${meetup.id}`)}>
        <Button>{meetup.eventType}</Button>
        <CardMedia
          image={meetup.eventThumbnail}
          sx={{ height: "200px" }}
          title="meeting"
        />
        <CardContent>
          <Typography variant="body2">{meetup.eventStartTime}</Typography>
          <Typography variant="caption">{meetup.title}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
