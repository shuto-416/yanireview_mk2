import React, { useState } from 'react';
import './ReviewCards.scss'
import sevenstar from '../../images/sevenstar.jpeg'
import amespi from '../../images/amespi.jpeg'
// Material UI import
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid'
import Grow from '@mui/material/Grow';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const functions = {
    plus: (a:number, b:number) => {
        return a+b
    },
}

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
  };
  

function ReviewCards():JSX.Element {
    // console.log(functions.plus(8,4));

    // State for Modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // State for Rating
    const [value, setValue] = useState<number | null>(2);
    const [hover, setHover] = React.useState(-1);
    
    return(
        <Container sx={{ py:8}}>
            <Grid container spacing={4}>

                <Grid item md={4} lg={3}>
                    <Grow in timeout={2000}>
                    <Card sx={{ maxWidth: 500 }} >
                        <CardMedia 
                            component="img"
                            image={sevenstar}
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
                            <Button size="small" onClick={handleOpen}>Show</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
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
                                    <img src={sevenstar}/>
                                    <Typography id="modal-modal-title" variant="h5" component="h5">
                                        Seven Star
                                    </Typography>
                                    <Typography id="modal-modal-description" variant="h6" component="h6">
                                        説明だニョーん
                                    </Typography>
                                    <Rating
                                        name="hover-feedbuck-rating"
                                        value={value}
                                        precision={0.5}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                        }}
                                    />
                                    {value !== null && (
                                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                    )}
                                    </Box>
                                </Modal>
                            <Button size="small" href="/review-edit">Edit</Button>
                        </CardActions>
                    </Card>
                    </Grow>
                </Grid>

                <Grid item md={4} lg={3}>
                    <Grow in timeout={2000}>
                    <Card sx={{ maxWidth: 350, maxHeight:400}} >
                        <CardMedia 
                            component="img"
                            image={amespi}
                            height="200"
                            alt="amespi"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                American Spirit
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
                    </Grow>
                </Grid>

                <Grid item md={4} lg={3}>
                    <Grow in timeout={2000}>
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
                    </Grow>
                </Grid>
                <Grid item md={4} lg={3}>
                    <Grow in timeout={2000}>
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
                    </Grow>
                </Grid>

            </Grid>
        </Container>
    )
}

export default ReviewCards