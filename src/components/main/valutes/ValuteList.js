import { makeStyles, Paper } from '@material-ui/core';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getValuteList } from '../../actions/valute';
import Preloader from '../animation/Preloader';
import { OutputBlock } from './outputBlock/OutputBlock';
import { SearchString } from './searchString/SearchString';
import { SelectValute } from './selectValute/SelectValute';

const useStyles = makeStyles({
  paper: {
    backgroundColor: '#ffffff', 
    borderRadius: "10px", 
    position: "relative",
    padding: "0 15px"
  }
});

export const ValuteList = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.valutes.isFetching);
  const styles = useStyles();

  useEffect(() => {
    dispatch(getValuteList());
  }, []);


  return (
    <>
      {!isFetching ?
        <Card 
          style={{backgroundColor: '#2697FF', padding: "30px 50px"}}
        >
          <Card.Header 
            style={{marginBottom: "20px", fontSize: "30px"}}
          >
            Выберите интересующую вас валюту
          </Card.Header>
          <Paper
            className={styles.paper}
            elevation={3}
          >
            <SearchString />
            <SelectValute />
          </Paper>
          <Paper
            elevation={3}
            style={{backgroundColor: '#ffffff', borderRadius: "10px", marginTop: "30px"}}
          >
            <OutputBlock />
          </Paper>
        </Card> :
        <Preloader />
      }
    </>
  )
}