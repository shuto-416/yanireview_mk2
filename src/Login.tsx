import './Login.css';
import React, {useState} from 'react';

function Login(){


    return(
        <div className="log-top">
            <h1>ログイン</h1>
            <hr>
                <div className="log-inp">
                    <tr>
                        <th>ID</th>
                        <td>
                            <input 
                                type="text"
                                className="id"
                                //value={id}

                            />
                        </td>
                    </tr>
                    <tr>
                        <th>パスワード</th>
                        <td>
                            <input
                                type="password"
                                className="password"
                                //value={pass}
                            />
                        </td>
                    </tr>
                    <tr>
                        <input type="submit" value="ログイン"></input>
                    </tr>
                </div>
            </hr>
        </div>
    );
}

export default Login;