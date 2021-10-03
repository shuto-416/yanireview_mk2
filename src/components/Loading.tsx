import CircularProgress from '@mui/material/CircularProgress'
import "./loading.scss"


const Loading = (): JSX.Element => {
    return (
        <div className="loading">
            <CircularProgress disableShrink />
            <h2>loading now...</h2>
        </div>
    )
}

export default Loading