import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="top-page">
      <body>
        <header>
          <div className="header-container">

            <div className="header-left">
              <img className="logo" src="#"/>
            </div>

            <div className="header-right">
             <a href="#">ヤニリスト</a>
             <a href="#">ホーム</a>
             <a href="#">新規登録</a>
             <a href="#">ログイン</a>
            </div>

          </div>
        </header>

        <div className="top">
          <div className="top-container">
            <h1><span>"LOVE"</span></h1>
            <h1>WHAT YOU SMOKE</h1>
            <h1><span>"SMOKE"</span></h1>
            <h1>WHAT YOU LOVE</h1>
            <p>"壁は黄色く、肺は黒く"</p>
            <p>このサイトを利用するための格言です。</p>
          </div>
        </div>

        <div className="middle">
          <div className="middle-container">
            <div className="middle-heading">
              <h2>Self-introduction</h2>
            </div>
            <div className="self-picture">
              <img src="self-intro.jpg"/>
            </div>
            <div className="self-introduce">
              <p>Name:Hamaguchi Shuto</p>
              <p>Birth:1999/04/16</p>
              <p>Yani:2year 4months</p>
              <p>Yani history:1.Winston sparcring menthol(5mg)</p>
              <p><span>2.American spirit(yellow)(9mg)</span></p>
              <p><span>3.Seven Star(14mg)</span></p>
              <p><span>4.high-light(17mg)</span></p>
            </div>
          </div>
        </div>

        <div className="under">
          <div className="under-container">
            <div className="under-heading">
              <h2>このサイトを見た非喫煙者の方へ</h2>
              <h3>そろそろヤニに興味が湧いてきたのではないのでしょうか。</h3>
              <h3>そんな方は早速ヤニ知識を深めていきましょう。</h3>
            </div>
            <a className="btn-review" href="#">ヤニレビューへ</a>
          </div>
        </div>

        <footer>
          <div className="footer-container">
            <p>LOVE WHAT YOU SMOKE,SMOKE WHAT YOU LOVE.</p>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default App;
