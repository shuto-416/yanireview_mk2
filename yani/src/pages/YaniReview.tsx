import './YaniReview.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid'

function YaniReview () {

    return (
        <div className="review-body">
            <Typography
                component="h1"
                variant="h1"
                align="center"
                gutterBottom  //文字下余白
            >
               Yani Review
            </Typography>
            <Typography
                component="h5"
                variant="h5"
                align="center"
                paragraph
            >
                "It always seems impossible until it’s done."
                "I’d rather regret the things I’ve done than regret the things I haven’t done."
                "Life is like a bicycle. To keep your balance, you must keep moving."
            </Typography>

            <Container sx={{ py:8 }}>
            <Grid container spacing={4}>
            <Grid item xs={4}>
            <Card sx={{ maxWidth: 350 }} >
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
            <Grid item xs={4}>
            <Card sx={{ maxWidth: 350 }} >
                <CardMedia 
                    component="img"
                    image="https://source.unsplash.com/random"
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
        </div>
    )
}

export default YaniReview