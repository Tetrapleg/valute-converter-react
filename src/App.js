import { Container, makeStyles } from '@material-ui/core';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Converter } from './components/main/converter/Converter';
import { ValuteList } from './components/main/valutes/ValuteList';

const useStyles = makeStyles({
  container: {
    padding: "15px 15px",
  },
  navLink: {
    padding: "5px 20px",
    textDecoration: "none",
  }
});

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  const styles = useStyles();

  return (
    <BrowserRouter>
      <ContentWrapper >
        <Container 
          className={styles.container}
          fixed
          maxWidth="xs"
        >
          <NavLink
            className={styles.navLink}
            exact to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >Список валют</NavLink>
          <NavLink 
            className={styles.navLink}
            to="/converter"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >Конвертер</NavLink>
        </Container>
        <Switch >
          <Route exact path="/" component={ValuteList} />
          <Route path="/converter" component={Converter} />
        </Switch>
      </ContentWrapper>
    </BrowserRouter>
  );
}

export default App;
