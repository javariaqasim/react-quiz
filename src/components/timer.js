import { useState, useEffect } from "react";
import React from "react";


const Timer = ({ showResult, setShowResult }) => {
  let x = 1;
  const timeLimit = 10;
  let timeLapse = 0;
  const start = Date.now();
  const [sec, setSec] = useState(timeLimit);
  var timer;

  useEffect(() => {
    timer = setInterval(() => {

      timeLapse = Date.now() - start;
      timeLapse = Math.floor(timeLapse / 1000);
      if (timeLimit - timeLapse == -1) {
        timeLapse = 0;
        setShowResult(true);
      }
      setSec(timeLimit-timeLapse);

    }, 1000);
    return () => clearInterval(timer);

  }, [showResult]);

  return (
    <>
      <Grid
        container
        sx={{
          color: "secondary",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "400",
            }}
          >
            <TimerOutlinedIcon
              fontSize="large"
              sx={{
                color: pink[500],
              }}
            />

            {sec}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Timer;