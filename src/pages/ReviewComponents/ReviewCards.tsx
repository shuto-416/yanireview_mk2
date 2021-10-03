import React, { useState } from 'react'
import './ReviewCards.scss'
import amespi from '../../images/amespi.jpeg'
// Material UI import
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import Grow from '@mui/material/Grow'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import {ReviewType} from "../YaniReview"

const labels: { [index: string]: string } = {
    0.5: 'ピャピャピャピャー',
    1: 'ゲロまず',
    1.5: 'は？',
    2: 'わかば',
    2.5: 'まあええわ',
    3: '許す',
    3.5: 'コスパ次第',
    4: 'これいけますわ',
    4.5: 'うみゃい！！',
    5: 'ぽぽぽぽっぽー',
  }

type Props = {
    reviews: Array<ReviewType>
}

function ReviewCards({reviews}: Props):JSX.Element {
    
    // State for Modal
    const [open, setOpen] = useState<number>(-1);
    // State for Rating
    const [value, setValue] = useState<number | null>(2);
    const [hover, setHover] = React.useState(-1);
    
    return(
        <Container sx={{ py:8}}>
            <Grid container spacing={4}>

                {
                    reviews.map((obj: ReviewType, key: number) => {
                        return (

                            <Grid item md={4} lg={3} key={key}>
                            <Grow in timeout={500}>
                            <Card sx={{ maxWidth: 500 }} >
                                <CardMedia 
                                component="img"
                                image={obj.img}
                                height="200"
                                alt="sevenstar"
                            />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div" noWrap>
                                        {obj.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" noWrap>
                                        {obj.discription}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={() => setOpen(key)}>詳細</Button>
                                    <Modal
                                        open={open != -1 && open == key}
                                        onClose={() => setOpen(-1)}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={{
                                            position: 'absolute' as 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: 400,
                                            bgcolor: 'background.paper',
                                            border: '2px solid #000',
                                            boxShadow: 24,
                                            p: 4
                                            }}
                                        >
                                            <Typography id="modal-modal-title" variant="h5" component="h5" gutterBottom>
                                                {obj.title}
                                            </Typography>
                                            <Rating
                                                name="hover-feedbuck-rating"
                                                className={"killpointer"}
                                                value={obj.rating}
                                                precision={0.5}
                                            />
                                            {labels[obj.rating]}
                                            <Typography id="modal-modal-description" variant="h6" component="h6">
                                                <div dangerouslySetInnerHTML={{ __html: obj.contents }} />
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </CardActions>
                            </Card>
                            </Grow>
                            </Grid>

                        )
                    })
                }

            </Grid>
        </Container>
    )
}

export default ReviewCards