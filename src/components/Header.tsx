import "./header.scss"
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';

const Header = () => {

    return (
        <header>
            <div className="header-container">

                <div className="header-left centering">
                    <h1><a href="/">Yani-review</a></h1>
                    <SmokingRoomsIcon fontSize="large"/>
                </div>

                <div className="header-right">
                    {/* <a href="/">ホーム</a> */}
                    <a href="/review">Review</a>
                    {/* <a href="/list">YaniList</a> */}
                </div>

            </div>
        </header>
    )
}

export default Header