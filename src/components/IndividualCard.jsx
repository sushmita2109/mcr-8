import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const IndividualCard = ({ indiviualmeet }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          padding: "8px",
          gap: "5px",
          flexWrap: "wrap",
        }}
      >
        <Card sx={{ width: "500px" }}>
          <Typography variant="h3">{indiviualmeet.title}</Typography>
          <Typography variant="caption">
            Hosted By: {indiviualmeet.hostedBy}
          </Typography>
          <CardMedia
            image={indiviualmeet.eventThumbnail}
            title="thumbnail"
            sx={{
              width: "200px",
              height: "200px",
            }}
          />
          <Typography variant="h6">Details</Typography>
          <Typography variant="body1">
            {indiviualmeet.eventDescription}
          </Typography>
          <Typography variant="h6"> Additional Information</Typography>
          <Typography variant="body1">
            {" "}
            Dress Code:{indiviualmeet.additionalInformation.dressCode}
          </Typography>
          <Typography variant="h6">Event Tags</Typography>
          {indiviualmeet?.eventTags?.map((tag, idx) => (
            <Typography key={idx}>{tag}</Typography>
          ))}
        </Card>
        <Box>
          <Card sx={{ width: "500px" }}>
            {indiviualmeet?.isPaid ? (
              <Typography>Price: {indiviualmeet.price}</Typography>
            ) : (
              <Typography>Free To Attend</Typography>
            )}
          </Card>
          <Card>
            {indiviualmeet?.speakers?.map((speaker, idx) => (
              <Card key={idx}>
                <Avatar alt="Remy Sharp" src={speaker?.image} />
                <Typography>{speaker?.name}</Typography>
                <Typography>{speaker?.designation}</Typography>
              </Card>
            ))}
          </Card>
          <Button onClick={() => handleOpen()} variant="contained">
            RSVP
          </Button>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField variant="outlined" placeholder="email" />
            <TextField variant="outlined" placeholder="password" />
            {indiviualmeet.isPaid && (
              <Typography>You have to make the payment at the venue</Typography>
            )}
            <Button onClick={() => handleClose()}>Submit</Button>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};
