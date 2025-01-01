import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Paper } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import Graph from '../graph/graph';


const StyledCardContent = styled(CardContent)`
  positon:relative;
  bottom:0;
  padding: 5px 3px 0px 2px;
  margin: 0px 2px 0px 2px;
  height:300px;
  width:100vh;
`;

export default function Adddata() {
  const theme = useTheme();

  return (
    <Paper style={{ backgroundColor: "#F0EBE3" }}>
      <div>
        <Typography style={{ fontSize: "40px" ,display:"felx", alignContent: "center",justifyContent:'center',}}>
          Last Hospital visit
        </Typography>

        <StyledCardContent style={{ display: 'flex', gap: "10px", height:"fit-content", width: "100vw", border: "2px solid black", borderRadius: "5px",justifyContent:"ceneter",alignItems:"center" ,marginTop: 6}}>
          <Box>
            <CardMedia
              style={{ height: '150px', width: "200px", }}
              src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?w=996&t=st=1712907455~exp=1712908055~hmac=a8a3b90f05eb10434983f9b76b85f9bf7c179e67f986ae73962bb8e18d9d1cda"
              component="img"
              alt="image"

            />
            <Typography component="div" variant="h5">
              Aakash Hospitality
            </Typography>
          </Box>
          <Box style={{}}>
            <Box style={{ display: 'flex', }}>
              <Typography > <strong>Diseases : </strong></Typography>
              <Typography>- Suger</Typography>
            </Box>
            <Box style={{ display: 'flex' }}>
              <Typography > <strong>Prescription </strong></Typography>
              <Typography>-<DownloadIcon /></Typography>
            </Box>
            <Box style={{ display: 'flex', }}>
              <Typography ><strong>Medicions</strong></Typography>
              <Typography>- glimepiride, alogliptin, sitagliptin, and pioglitazone</Typography>
            </Box>
{/* 
          </Box>
          <Box> */}
            <Box style={{ width: "70vw" }}>
              {/* <Box style={{ display: 'flex' }}>
                <Typography > <strong>Diseases : </strong></Typography>
                <Typography>- Suger</Typography>
              </Box> */}
              <Typography >Prescription :- </Typography>
              <Typography>Malaria is a life-threatening disease caused by parasites transmitted to people through the bites of infected mosquitoes. It's a significant health concern, particularly in tropical and subtropical regions where the Anopheles mosquito, the primary carrier, thrives. Symptoms typically include fever, chills, and flu-like illness, often accompanied by headache, muscle aches, and fatigue. If not treated promptly, malaria can progress to severe complications, such as organ failure or cerebral malaria, which can be fatal.</Typography>
            </Box>

          </Box>

          
        </StyledCardContent>

        <StyledCardContent style={{ display: 'flex', gap: "10px", height:"fit-content", width: "100vw", border: "2px solid black", borderRadius: "5px",justifyContent:"ceneter",alignItems:"center" ,marginTop: 7}}>
          <Box>
            <CardMedia
              style={{ height: '150px', width: "200px", }}
              src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?w=996&t=st=1712907455~exp=1712908055~hmac=a8a3b90f05eb10434983f9b76b85f9bf7c179e67f986ae73962bb8e18d9d1cda"
              component="img"
              alt="image"

            />
            <Typography component="div" variant="h5" style={{display:"flex",justifyContent:"center"}}>
              Aiims Delhi
            </Typography>
          </Box>
          <Box style={{}}>
            <Box style={{ display: 'flex', }}>
              <Typography > <strong>Diseases : </strong></Typography>
              <Typography>- Malaria</Typography>
            </Box>
            <Box style={{ display: 'flex' }}>
              <Typography > <strong>Prescription </strong></Typography>
              <Typography>-<DownloadIcon /></Typography>
            </Box>
            <Box style={{ display: 'flex', }}>
              <Typography ><strong>Medicions</strong></Typography>
              <Typography>- Chloroquine, Doxycycline, Mefloquine and Tafenoquine</Typography>
            </Box>
{/* 
          </Box>
          <Box> */}
            <Box style={{ width: "70vw" }}>
              {/* <Box style={{ display: 'flex' }}>
                <Typography > <strong>Diseases : </strong></Typography>
                <Typography>- Suger</Typography>
              </Box> */}
              <Typography >Prescription :- </Typography>
              <Typography>Malaria is a life-threatening disease caused by parasites transmitted to people through the bites of infected mosquitoes. It's a significant health concern, particularly in tropical and subtropical regions where the Anopheles mosquito, the primary carrier, thrives. Symptoms typically include fever, chills, and flu-like illness, often accompanied by headache, muscle aches, and fatigue. If not treated promptly, malaria can progress to severe complications, such as organ failure or cerebral malaria, which can be fatal.</Typography>
            </Box>

          </Box>

          
        </StyledCardContent>
      </div>

      <div>
        <Typography style={{display: "flex", alignContent: "center",fontSize: "40px",marginTop: 40,justifyContent:'center' }}>
          Visual Representation of Medical Data
        </Typography>

<Graph />

      </div>

    </Paper>
    
  );
}