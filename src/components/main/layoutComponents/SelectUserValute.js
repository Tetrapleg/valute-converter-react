import { makeStyles, MenuItem, Select } from '@material-ui/core';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
  select: {
    marginBottom: "15px", 
    marginTop: "5px",
    maxWidth: "100%"
  }
});

export const SelectUserValute = ({ userValute, 
                                  setUserValute,
                                  abbreviationIsRevealed
                                 }) => {
  const valutes = useSelector(state => state.valutes.valute, shallowEqual);
  const dispatch = useDispatch();
  const styles = useStyles();

  return (
    <Select 
      className={styles.select}
      labelId="label" id="select" value={userValute.CharCode}
      onChange={(e)=>dispatch(setUserValute(valutes.filter(item => item.CharCode === e.target.value)[0]))}
    >
      {
        valutes && valutes.map(i => <MenuItem key={i.ID} value={i.CharCode}>{abbreviationIsRevealed ?
                                                                            `${i.CharCode}: (${i.Name})` :
                                                                            `${i.CharCode}`
                                                                            }</MenuItem>)
      }
    </Select>
  )
}