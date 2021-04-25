import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getValuteList } from '../../actions/valute';
import Preloader from '../animation/Preloader';
import { ConvertionBlock } from '../layoutComponents/ConvertionBlock';
import { InputBlock } from './inputBlock/InputBlock';
import { InvertButton } from './InvertButton';
import { ShowBlock } from './showBlock/ShowBlock';

const useStyles = makeStyles({
  paper: {
    backgroundColor: '#ffffff', 
    borderRadius: "10px",
  },
});

export const Converter = () => {
  const dispatch = useDispatch();
  const userValute = useSelector(state => state.valutes.userValute);
  const convertValute = useSelector(state => state.valutes.convertValute);
  const isFetching = useSelector(state => state.valutes.isFetching);
  const styles = useStyles();

  useEffect(() => {
    dispatch(getValuteList());
  }, []);

  return (
    <>
      {!isFetching ?
        <Card 
          style={{backgroundColor: '#2697FF', padding: "30px 15px"}}
        >
          <Card.Header 
            style={{marginBottom: "20px", fontSize: "30px"}}
          >
            Конвертер валют
          </Card.Header>
          <Container fixed>
            <Grid container alignItems="center" justify="center">
              <Grid item xs={12} sm md={4} zeroMinWidth>
                <Paper
                  elevation={3}
                  className={styles.paper}
                >
                  <ConvertionBlock 
                    userValute={userValute}
                  >
                    <InputBlock />
                  </ConvertionBlock>
                </Paper>
              </Grid>
              <Grid item zeroMinWidth>
                <InvertButton />
              </Grid>
              <Grid item xs={12} sm md={4} zeroMinWidth>
                <Paper
                  elevation={3}
                  className={styles.paper}
                >
                  <ConvertionBlock 
                    userValute={convertValute}
                  >
                    <ShowBlock />
                  </ConvertionBlock>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Card> :
        <Preloader />
      }
    </>
  )
}