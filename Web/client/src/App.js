import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import hero from "./Components/images/landing.jpg"
function App() {
  return (
    <div style={{textAlign:"center"}}>
      <Typography mt={10} variant="h3" gutterBottom component="div" style={{color:"#161b22",fontFamily:"Fira Sans",fontWeight:"700"}}>
        One & Zero
      </Typography>
      <div>
      <img style={{maxHeight:"35vh"}} src={hero} alt="hero" />
      </div>
      <Typography mt={6} variant="h4" gutterBottom component="div" style={{color:"#424242",fontSize:"3em",fontFamily:"Fira Sans",fontWeight:"700"}}>
        Investing Insights
      </Typography>
      <Typography  variant="subtitle1" gutterBottom component="div" style={{fontSize:"1.5em",color:"#424242",fontFamily:"Fira Sans",fontWeight:"500"}}>
        AI powered platoform to help you make smart decisions before investing
      </Typography>
      <Button variant="contained" color="primary" size="large">Sign up now</Button>

    </div>
  );
}

export default App;
