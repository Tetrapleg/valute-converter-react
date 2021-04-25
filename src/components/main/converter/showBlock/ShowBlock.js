import { Grid, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { setConvertValute } from "../../../../reducers/vaiutesReduser";
import { SelectUserValute } from "../../layoutComponents/SelectUserValute";

const useStyles = makeStyles({
  value: {
    marginBottom: "13px",
  },
  title: {
    paddingTop: "5px",
    color: "#B0B0B0"
  }
});

export const ShowBlock = () => {
  const userValute = useSelector(state => state.valutes.userValute, shallowEqual);
  const convertValute = useSelector(state => state.valutes.convertValute, shallowEqual);
  const numOfConvert = useSelector(state => state.valutes.numOfConvert, shallowEqual);
  const [convertedValue, setConvertedValue] = useState("конвертированная сумма")
  const abbreviationIsRevealed = false;
  const styles = useStyles();

  useEffect(() => {
    const convertValue = ((userValute.Value * convertValute.Nominal) / (convertValute.Value * userValute.Nominal) * numOfConvert);
    const roundedValue = Math.floor(convertValue * 100) / 100;
    
    setConvertedValue(roundedValue);
  }, [userValute, convertValute, numOfConvert]);

  return (
    <>
      <Grid item zeroMinWidth>
        <SelectUserValute
          userValute={convertValute}
          setUserValute={setConvertValute}
          abbreviationIsRevealed={abbreviationIsRevealed}
        />
      </Grid>
      <Grid item zeroMinWidth>
        <Typography
          className={styles.value}
        >{convertedValue}</Typography>
      </Grid>
    </>
  );
};