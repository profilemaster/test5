import React from 'react'
import Projectsidebar from './sidebar'
import { Grid } from "@mui/material";
import Paper from '@mui/material/Paper';

const Projects = () => {
  return (
    <>

      <Paper style={{ height: "84vh" }}>

        <Grid container>
          <Grid item lg={2} sm={2} xs={12}
          // style={{
          //   border: "2px solid grey",
          //   borderRadius: "14px"
          // }}
          >
            <Projectsidebar />
          </Grid>
          <Grid container item lg={10} sm={10} xs={12}>
          
          </Grid>
        </Grid>
      </Paper>

    </>
  )
}

export default Projects