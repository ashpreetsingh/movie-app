import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function Booking() {
  return (
    <React.Fragment>
      <CssBaseline />
{/* trailer */}
      <Container maxWidth="lg">
        <iframe
          src="https://www.youtube.com/embed/HZ7PAyCDwEg"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          width="100%"
          height="350vh"
        />
      </Container>
{/* trailer ends*/}

    </React.Fragment>
  );
}

export default Booking;
