import { Grid } from '@material-ui/core';

import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={3}>
          <Input />        
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
