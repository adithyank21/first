
import {Box,Paper} from "@mui/material"
import Grid from '@mui/material/Grid2';
function Userhome(){
    return(
        <>
      <Box>
        <Grid container spacing={2}>
            <Grid size={4}>
                <Paper>size 4</Paper>
            </Grid>
        
    
        
            <Grid size={3}>
                <Paper>size 6</Paper>
            </Grid>
            <Grid size={4}>
                <Paper>size 4</Paper>
            </Grid>
        </Grid>
      </Box>
      <br/>
      <Box>
        <Grid container spacing={2}>
            <Grid size={4}>
                <Paper>size 4</Paper>
            </Grid>
        
    
        
            <Grid size={4}>
                <Paper>size 4</Paper>
            </Grid>
        </Grid>
      </Box>
        </>
    )
    
}
export default Userhome;