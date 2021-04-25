import { Grid, Input, makeStyles, } from "@material-ui/core";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setUserValute, setNumOfConvert } from "../../../../reducers/vaiutesReduser";
import { SelectUserValute } from "../../layoutComponents/SelectUserValute";

const useStyles = makeStyles({
  input: {
    marginBottom: "13px",
    marginLeft: "15px",
    maxWidth: "60px"
  },
  title: {
    paddingTop: "5px",
    color: "#B0B0B0"
  }
});

export const InputBlock = () => {
  const dispatch = useDispatch();
  const userValute = useSelector(state => state.valutes.userValute, shallowEqual);
  const numOfConvert = useSelector(state => state.valutes.numOfConvert, shallowEqual);
  const abbreviationIsRevealed = false;
  const styles = useStyles();

  const handleChange = (event) => {
    const value = event.target.value;
    const newValue = value.replace(/\D/g, '');

    dispatch(setNumOfConvert(newValue));
  };

  return (
    <>
      <Grid item zeroMinWidth>
        <SelectUserValute
          userValute={userValute}
          setUserValute={setUserValute}
          abbreviationIsRevealed={abbreviationIsRevealed}
        />
      </Grid>
      <Grid item zeroMinWidth>
        <Input
          className={styles.input}
          placeholder="сумма"
          value={numOfConvert}
          onChange={handleChange}
        />
      </Grid>
    </>
  );
};