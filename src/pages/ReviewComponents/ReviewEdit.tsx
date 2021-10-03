import { useState } from 'react';
import './ReviewEdit.scss'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const ReviewEdit = (): JSX.Element => {

    // for DatePicker
    const [time, setValue] = useState<Date | null>(
        new Date(),
    );

    const handleChangeDate = (newValue: Date | null): void => {
        setValue(newValue);
    };

    return (
        <div className="edit-form">
            <Typography variant="h2" component="h2">Edit form</Typography>
            <Typography variant="h6" component="h6">If you are not administer, get the fuck out of here.</Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                pt: 10,
                px: '30%',
            }}
            >
                <TextField
                    id="standard-basic"
                    label="title"
                    variant="standard"
                    fullWidth
                    margin='normal'
                />
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                pt: 5,
                px: '10%',
            }}
            >
                <Stack direction="row" spacing={10} sx={{ width: '50%' }}>
                    <TextField
                        id="standard-basic"
                        label="Editor"
                        variant="standard"
                        fullWidth
                        margin='normal'
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label="Posted date"
                            inputFormat="yyyy/MM/dd"
                            value={time}
                            onChange={handleChangeDate}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Stack>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                pt: 5,
                px: '30%',
            }}
            >
                <TextField
                    id="outlined-multiline-static"
                    label="Your Review"
                    multiline
                    rows={10}
                    fullWidth
                    margin='normal'
                />
            </Box>

            <Container
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pt: 5,
                    pb: 10
                }}>
                <Stack direction='row' spacing={10}>
                    <Button variant="outlined" href='/review'>Cancel</Button>
                    <Button variant="contained">Post</Button>
                </Stack>

            </Container>

        </div>
    )
}

export default ReviewEdit