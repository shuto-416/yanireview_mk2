import './ReviewEdit.scss'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material'

const theme = {
    spacing: (value: number) => value,
}

function ReviewEdit() {
    return(
        <div className="edit-form">
            <Typography variant="h2" component="h2">Edit form</Typography>
            <Typography variant="h6" component="h6">If you are not administer, get the fuck out of here.</Typography>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pt: 10,
                    px: '30%'
                }}
            >
                <TextField 
                    id="standard-basic"
                    label="title"
                    variant="standard"
                    size="medium"
                    fullWidth
                    margin='normal'
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Contents"
                    multiline
                    rows={8}
                    fullWidth
                    margin='normal'
                />

            </Box>
        </div>
    )
}

export default ReviewEdit