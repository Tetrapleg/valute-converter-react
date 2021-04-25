import { Button, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import styled from "styled-components";

const VisualQuotation = styled.span`
  margin-left: auto;
  position: relative;
  font-weight: 500;
  font-size: 16px;
  padding-left: 20px;
  &::before {
    position: absolute;
    content: ">";
    left: 7px;
    top: 0;
  }
  &.quotationUp {
    color: #4DD14D;
    &::before {
    transform: rotate(-90deg);
    }
  }
  &.quotationDown {
    color: red;
    &::before {
    transform: rotate(90deg);
    }
  }
`;

const useStyles = makeStyles({
  container: {
    padding: "20px",
  },
  titleTypography: {
    marginBottom: "5px",
    color: "#B0B0B0",
  },
  button: {
    width: "30px",
    height: "30px",
    padding: "0",
    minWidth: "30px",
    borderRadius: "50%",
    margin: "0 10px",
  },
  visualTypography: {
    flexGrow: "1",
  },
})

export const OutputBlock = () => {
  const userValute = useSelector(state => state.valutes.userValute, shallowEqual);
  const styles = useStyles();
  const [invert, setInvert] = useState(false);
  const [quotation, setQuotation] = useState(null);

  useEffect(() => {
    if(invert) {
      setQuotation(Math.round((1 * userValute.Nominal / userValute.Value - 1 * userValute.Nominal / userValute.Previous) * 10000) / 10000);
    } else {
      setQuotation(Math.round((userValute.Value / userValute.Nominal - userValute.Previous / userValute.Nominal) * 10000) / 10000);
    }
  }, [invert, userValute.Value, userValute.Previous, userValute.Nominal])

  return (
    <Container
      className={styles.container}
      fixed
      maxWidth="xs"
    >
      <Typography 
        className={styles.titleTypography}
        align="left"
      >{userValute.Name}</Typography>
      <Grid container alignItems="center">
        <Typography >{
          invert ? 
          "1 RUB" :
          `1 ${userValute.CharCode}`
        }</Typography>
        <Button 
          className={styles.button}
          variant="outlined"
          color="primary"
          onClick={() => setInvert(!invert)}
        >{`<-->`}</Button>
        <Typography >{
          invert ?
          `${Math.round(10000 * userValute.Nominal / userValute.Value) / 10000} ${userValute.CharCode}` :
          `${Math.round(10000 * userValute.Value / userValute.Nominal) / 10000} RUB`
        }</Typography>
        <VisualQuotation 
          className={quotation > 0 ? "quotationUp" : "quotationDown"}
        >
          {quotation > 0 ? `${quotation}` : `${-quotation}`}
        </VisualQuotation>
      </Grid>
    </Container>
  )
};