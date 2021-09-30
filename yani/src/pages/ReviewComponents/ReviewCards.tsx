import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid'

function ReviewCards() {
    return(
        <Container sx={{ py:8 }}>
            <Grid container spacing={4}>
                <Grid item md={4} lg={3}>
                    <Card sx={{ maxWidth: 500 }} >
                        <CardMedia 
                            component="img"
                            image="https://source.unsplash.com/randomg"
                            height="200"
                            alt="sevenstar"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Seven Star
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I'm lovin' it.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Show</Button>
                            <Button size="small">Edit</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={4} lg={3}>
                    <Card sx={{ maxWidth: 500 }} >
                        <CardMedia 
                            component="img"
                            image="https://source.unsplash.com/randomg"
                            height="200"
                            alt="sevenstar"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Seven Star
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I'm lovin' it.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Show</Button>
                            <Button size="small">Edit</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ReviewCards