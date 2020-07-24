import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Paper, Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import mastercard from "../Images/mastercard.png";
import paypal from "../Images/paypal.png";
import visa from "../Images/visa.jpg";
import cardimg from "../Images/cardimg.png";

const useStyles = makeStyles((theme) => ({
  textRoot: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  PapperSection1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  donation: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#363445",
    color: "white",
    width: "100%",
    fontWeight: "bolder",
    height: 80,
  },
  amount: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  radio: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 50,
  },
  payment: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default function Donation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container fixed className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Paper className={classes.PapperSection1} elevation={3}>
            <div className={classes.donation}>
              <span style={{ fontSize: 20 }}>Donation</span>
              <span>
                Giving is not just about make a donationm it's about making a
                difference
              </span>
              <span>Build Africa for the future Leaders</span>
            </div>
            <div className={classes.amount}>
              <h1>Amount</h1>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="amount"
                  name="amount"
                  value={value}
                  onChange={handleChange}
                  className={classes.radio}
                >
                  <FormControlLabel value="50" control={<Radio />} label="50" />
                  <FormControlLabel
                    value="100"
                    control={<Radio />}
                    label="100"
                  />
                  <FormControlLabel
                    value="500"
                    control={<Radio />}
                    label="500"
                  />
                  <FormControlLabel
                    value="1000"
                    control={<Radio />}
                    label="1000"
                  />

                  <TextField
                    id="filled-basic"
                    label="Other amount"
                    variant="filled"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <div className={classes.payment}>
              <h3>Payment Method</h3>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="amount"
                  name="amount"
                  value={value}
                  onChange={handleChange}
                  className={classes.radio}
                >
                  <img
                    src={visa}
                    alt="money"
                    style={{ width: 120, height: 80 }}
                  />
                  <FormControlLabel control={<Radio />} />
                  <img
                    src={mastercard}
                    alt="money"
                    style={{ width: 120, height: 80 }}
                  />
                  <FormControlLabel control={<Radio />} />
                  <img
                    src={paypal}
                    alt="money"
                    style={{ width: 80, height: 80 }}
                  />
                  <FormControlLabel control={<Radio />} />
                </RadioGroup>
              </FormControl>
            </div>
            <div className={classes.amount}>
              <img
                src={cardimg}
                alt="cardimg"
                style={{ width: 200, height: 120 }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  id="outlined-helperText"
                  label="card info"
                  defaultValue="Credit card number"
                  helperText="Please do not enter spaces or dashes"
                  variant="outlined"
                  style={{ width: 600 }}
                />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <TextField
                    id="outlined-helperText"
                    label="cvv"
                    variant="outlined"
                    style={{ width: 100, marginRight: 50 }}
                  />
                  <h3 style={{ marginRight: 30 }}>Expiration</h3>
                  <TextField
                    id="standard-number"
                    variant="filled"
                    label="month"
                    style={{ marginRight: 30 }}
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="standard-number"
                    variant="filled"
                    label="year"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    width: 200,
                    backgroundColor: "#363445",
                    marginBottom: 30,
                    fontWeight: "bolder",
                    marginTop: 30,
                  }}
                >
                  DONATE
                </Button>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
