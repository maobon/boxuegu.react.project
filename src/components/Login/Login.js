/**
 * Created by xinbob on 4/26/17.
 */

import React from "react";
import "./Login.css";

class Login extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="login">
                <div className="login-wrap">
                    <div className="avatar">
                        <img src="./uploads/dajiba.jpg" className="img-circle" alt=""/>
                    </div>

                    <form id="loginForm" className="col-xs-offset-1 col-xs-10">
                        <div className="input-group input-group-lg">
                            <span className="input-group-addon">
                                <i className="fa fa-user"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="用户名" name="tc_name"/>
                        </div>

                        <div className="input-group input-group-lg">
                            <span className="input-group-addon">
                                <i className="fa fa-key"></i>
                            </span>
                            <input type="password" className="form-control" placeholder="密码" name="tc_pass"/>
                        </div>

                        <button type="submit" className="btn btn-lg btn-primary btn-block">登 录</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
    