import "./header.scss"

const Header = () => {

    return (
        <header>
            <div className="header-container">

                <div className="header-left centering">
                    <h1><a href="/">Yani-review</a></h1>
                </div>

                <div className="header-right">
                    {/* <a href="/">ホーム</a> */}
                    <a href="/review">ヤニレビュー</a>
                    <a href="/list">ヤニリスト</a>
                </div>

            </div>
        </header>
    )
}

export default Header