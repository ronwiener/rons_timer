import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const RenderTime = ({ remainingTime }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const minutes = Math.floor(remainingTime / 60);
  const seconds = ("0" + (remainingTime % 60)).slice(-2);

  if (remainingTime === 0) {
    return (
      <div>
        <Typography
          style={{
            color: "red",
            fontSize: "2rem",
            fontWeight: "bold",
            letterSpacing: "0.1em",
          }}
        >
          BREATHE
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          color: "#b00c22",
          fontSize: matchesSM ? "1.75rem" : "2rem",
          fontWeight: "bold",
          letterSpacing: "0.1em",
        }}
      >
        {remainingTime > 30 ? "RECOVER" : "SPRINT!!!"}
      </div>
      <div
        style={{
          fontSize: matchesSM ? "1.95rem" : "2.75rem",
          fontWeight: "bold",
        }}
      >
        {minutes}:{seconds}
      </div>
    </div>
  );
};
const useStyles = makeStyles({
  bike: {
    marginTop: 0,
    backgroundImage: `url("https://res.cloudinary.com/ron7602/image/upload/o_79/v1636639431/bike.jpg")`,
    height: "100vh",
    textAlign: "center",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
});

function App() {
  const [key, setKey] = useState(0);
  const [play, setPlay] = useState(false);
  const [loopCount, setLoopCount] = useState(0);
  const theme = useTheme();
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  let One = [
    "One down 7 to go",
    "You got this",
    "Whew, 7 more",
    "Ok, not so bad",
    "Workin' it 😬",
  ];
  const Quote1 = One[Math.floor(Math.random() * One.length)];

  let Two = [
    "That's 2, good job",
    "Keep it going!",
    "Hang in there",
    "Yes, keep it up",
    "Starting to sweat 😰",
  ];
  const Quote2 = Two[Math.floor(Math.random() * Two.length)];

  let Three = [
    "You can do this",
    "No pain, no gain",
    "Hit your goal",
    "Stay tough",
    "Dig down, Deep breaths",
  ];
  const Quote3 = Three[Math.floor(Math.random() * Three.length)];

  let Four = ["Stay motivated", "Stay strong", "Four to go", "Bring it"];
  const Quote4 = Four[Math.floor(Math.random() * Four.length)];

  let Five = [
    "More than half way there",
    "Stay steady 🚴‍♀️",
    "Keep the pace",
    "Work it, work hard",
    "Tough it out",
  ];
  const Quote5 = Five[Math.floor(Math.random() * Five.length)];

  let Six = [
    "Focus, focus, focus!!!",
    "Do not give up",
    "Almost there",
    "Push on",
    "Fight the pain",
  ];
  const Quote6 = Six[Math.floor(Math.random() * Six.length)];

  let Seven = [
    "Just one more",
    "You are a beast",
    "Push it to the limit",
    "Try or Die",
    "Adrenaline rush",
    "Here we go, last one",
  ];
  const Quote7 = Seven[Math.floor(Math.random() * Seven.length)];

  const encouragement = (loopCount) => {
    if (loopCount === 1) {
      return Quote1;
    } else if (loopCount === 2) {
      return Quote2;
    } else if (loopCount === 3) {
      return Quote3;
    } else if (loopCount === 4) {
      return Quote4;
    } else if (loopCount === 5) {
      return Quote5;
    } else if (loopCount === 6) {
      return Quote6;
    } else if (loopCount === 7) {
      return Quote7;
    } else if (loopCount === 8) {
      return "YOU DID IT!!";
    } else return;
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <Grid item container className={classes.bike}>
          <Grid item container justifyContent="center" direction="row">
            <Typography
              style={{
                textAlign: matchesSM ? "center" : "center",
                paddingTop: matchesSM ? 10 : 14,
                fontSize: matchesSM ? 30 : 44,
                color: "darkblue",
              }}
            >
              Countdown Timer
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            style={{ marginTop: matchesSM ? 0 : 30 }}
          >
            <Grid item container justifyContent="center">
              <CountdownCircleTimer
                //key={loopCount}
                key={key}
                isPlaying={play}
                size={matchesSM ? 190 : 260}
                trailColor={"#adada9"}
                trailStrokeWidth={0}
                strokeWidth={matchesSM ? 10 : 18}
                duration={120}
                initialRemainingTime={30}
                colors={[["#004777", 0.33], ["#07804b", 0.33], ["#A30000"]]}
                onComplete={() => [
                  true,
                  1100,
                  setLoopCount((loopCount) => loopCount + 1),
                ]}
              >
                <RenderTime />
              </CountdownCircleTimer>
            </Grid>

            <Grid
              item
              container
              justifyContent="center"
              style={{
                marginBottom: matchesSM ? 40 : 60,
                marginTop: matchesSM ? 10 : 25,
              }}
            >
              <Typography
                variant="h4"
                style={{
                  fontSize: matchesSM ? "1.35rem" : "2.5rem",
                  letterSpacing: "0.10rem",
                  fontWeight: "bold",
                  color: "#051293",
                  marginTop: matchesSM ? 90 : 30,
                  marginRight: matchesSM ? 15 : null,
                }}
              >
                Completed: {loopCount}
                <div>
                  <span style={{ color: "#770FF0" }}>
                    {encouragement(loopCount)}
                  </span>
                </div>
              </Typography>
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{
                marginTop: matchesSM ? 10 : 40,
                marginBottom: matchesSM ? 20 : 30,
              }}
            >
              <Button
                style={{
                  height: 35,
                  backgroundColor: "#07804b",
                  padding: 5,
                  alignItems: "center",
                  marginBottom: 5,
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "gray",
                  borderRadius: 5,
                  width: matchesSM ? 170 : 300,
                }}
                variant="contained"
                onClick={() => setPlay((play) => !play)}
              >
                <Typography
                  style={{
                    color: "white",
                    fontSize: matchesSM ? 12 : 16,
                    fontWeight: "bold",
                    textAlign: "center",
                    letterSpacing: 1.5,
                  }}
                >
                  Start/Stop Timer
                </Typography>
              </Button>
            </Grid>
            <Grid item container justifyContent="center">
              <Button
                style={{
                  height: 35,
                  backgroundColor: "#96082b",
                  padding: 5,
                  alignItems: "center",
                  marginBottom: 10,
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "grey",
                  borderRadius: 5,
                  width: matchesSM ? 170 : 300,
                }}
                variant="contained"
                onClick={() => setKey((prevKey) => prevKey + 1)}
              >
                <Typography
                  style={{
                    color: "white",
                    fontSize: matchesSM ? 12 : 16,
                    fontWeight: "bold",
                    textAlign: "center",
                    letterSpacing: 1.5,
                  }}
                >
                  Reset Timer
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
