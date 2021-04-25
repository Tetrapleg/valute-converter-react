import { Button, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setConvertValute, setUserValute } from '../../../reducers/vaiutesReduser';

const useStyles = makeStyles({
  button: {
    width: "40px",
    height: "40px",
    padding: "0",
    minWidth: "40px",
    borderRadius: "50%",
    margin: "15px 10px",
  },
});

export const InvertButton = () => {
  const dispatch = useDispatch();
  const userValute = useSelector(state => state.valutes.userValute);
  const convertValute = useSelector(state => state.valutes.convertValute);
  const styles = useStyles();

  const handleValuteInverted = () =>{
    dispatch(setUserValute(convertValute));
    dispatch(setConvertValute(userValute));
  };

  return (
    <Button
                className={styles.button}
                variant="contained"
                color="default"
                onClick={handleValuteInverted}
    >{`<-->`}</Button>
  )
}