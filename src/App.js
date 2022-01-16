import logo from './logo.svg';
import './App.css';
import {Button, ButtonGroup, IconButton, Typography} from '@material-ui/core';
import  Container  from '@material-ui/core/Container';
import { AcUnitOutlined, KeyboardArrowRight, Book, Fingerprint } from '@material-ui/icons';
import {makeStyles} from '@material-ui/core';

const useStyles=makeStyles({
  btn:{
    background:'green',
    fontSize:20,
    '&:hover':{
      background: 'blue'
    }
  },
  title:{
    textDecoration:'underline',
    marginBottom:20
  }
})

function App() {
  const classes=useStyles()
  return (
    <Container>
      <h1>hello world</h1>
      <Typography className={classes.title} variant='h5' color='textSecondary' component='h2' gutterBottom>
        Create a New Note
      </Typography>
      <Button className={classes.btn} type='submit' color='secondary' variant='contained' startIcon={<Fingerprint/>} endIcon={<KeyboardArrowRight/>} > Submit</Button> <br/>
      <AcUnitOutlined color='secondary' fontSize='large' />
    </Container>
  );
}

export default App;
