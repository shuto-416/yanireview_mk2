import Typography from '@mui/material/Typography';
import './ReviewHead.scss'

function ReviewHead() {
    return(
        <div className="review-head">
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
        </div>
    )
}

export default ReviewHead