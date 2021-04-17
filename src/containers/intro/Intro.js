import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import pic from "./pic.png"

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    marginTop: "250px",
    /* top: "40%", */
    /* left: "50%", */
   /*  transform: "translate(-50%,-50%)", */
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Intro = () => {
  const classes = useStyles();

  return (<div className="body-intro">
    <Box className={classes.typedContainer} id="body-intro">
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={pic} alt="Diego Jarauta" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Diego Jarauta"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "Backend Developer",
            "Full Stack Developer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
    </div>
  );
};

export default Intro;
