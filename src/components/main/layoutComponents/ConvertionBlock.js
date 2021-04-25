import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    marginBottom: "13px",
    marginLeft: "15px"
  },
  title: {
    paddingTop: "5px",
    color: "#B0B0B0"
  }
});

export const ConvertionBlock = ({ children, userValute }) => {
  const styles = useStyles();

  return (
    <Container>
      <Typography 
        align="left"
        className={styles.title}
      >{userValute.Name}</Typography>
      <Grid 
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        { children }
      </Grid>
    </Container>
  );
};