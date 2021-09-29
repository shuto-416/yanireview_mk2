import './YaniReview.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function YaniReview () {

    return (
        <Card sx={{ maxWidth: 350 }} >
            <CardMedia 
                component="img"
                image="https://source.unsplash.com/random"
                height="140"
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
    )
}

export default YaniReview