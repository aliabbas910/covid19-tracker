import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CountUp from 'react-countup';



const Cards = ({ data }) => {
    return <>
        <Grid sx={{ justifyContent: 'center' }} container spacing={2}>
            <Grid item>
                <Box>
                    <Card sx={{ minWidth: 275, borderBottom: "solid blue 10px" }} spacing={2}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Confirmed
                            </Typography>
                            <Typography variant="h5" component="div">
                                <CountUp start={0} end={data.confirmed.value} duration={2} separator="," />
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
            <Grid item>
                <Box>
                    <Card sx={{ minWidth: 275, borderBottom: "solid red 10px" }} spacing={2}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Deaths
                            </Typography>
                            <Typography variant="h5" component="div">
                                <CountUp start={0} end={data.deaths.value} duration={2} separator="," />
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
            <Grid item>
                <Box>
                    <Card sx={{ minWidth: 275, borderBottom: "solid limegreen 10px" }} spacing={2}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Recovered
                            </Typography>
                            <Typography variant="h5" component="div">
                                {data.recovered.value}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
        </Grid>
    </>
}

export default Cards;