
import {Box,Paper, Stack} from "@mui/material"
import Grid from '@mui/material/Grid2';
import Sidebar from "./sidebar";
import Feed from "./feed";
import RightSide from "./rightside";
function Userhome(){
    return(
        <>

<Box>
    <Stack direction={"row"} p={2} justifyContent={'space-between'}>
        {/* <div> */}
            {/* right side  */}
        {/* </div> */}
        
        {/* <div> */}
            {/* right side  */}
        {/* </div> */}
        <Sidebar/>
        <Feed/>
        <RightSide/>
    </Stack>
</Box>

      {/* <Box> */}
        {/* <Grid container spacing={2}>
            <Grid size={4}>
                <Paper>size 4</Paper>
            </Grid>
        
    
        
            <Grid size={3}>
                <Paper>size 6</Paper>
            </Grid>
            <Grid size={4}>
                <Paper>size 4</Paper>
            </Grid>
        </Grid> */}
      {/* </Box> */}
      {/* <br/>
      <Box>
        <Grid container spacing={2}>
            <Grid size={4}>
                <Paper>size 4</Paper>
            </Grid>
        
    
        
            <Grid size={4}>
                <Paper>size 4</Paper>
            </Grid>
        </Grid>
      </Box> */}
        </>
    )
    
}
export default Userhome;