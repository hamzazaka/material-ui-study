import logo from './logo.svg';
import './App.css';
import {Button, ButtonGroup, IconButton, Typography} from '@material-ui/core';
import  Container  from '@material-ui/core/Container';
import { Fingerprint } from '@material-ui/icons';

function App() {
  return (
    <Container>
      <h1>hello world</h1>
      <Typography variant='h5' color='textSecondary' component='h2' gutterBottom>
        Create a New Note
      </Typography>
      <Button 
      onClick={()=>console.log('you clicked me')}
      type='submit' color='secondary' variant='contained' > Submit</Button>
      <IconButton aria-label='fingerprint' color='secondary'>
        <Fingerprint/>
      </IconButton>
    </Container>
  );
}

export default App;
