/**
 * Created by xinbob on 4/26/17.
 *
 * 登录组件
 */

import React from "react";
import "./Login.css";

import $ from "jquery";

class Login extends React.Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div className="login">
                <div className="login-wrap">

                    <div className="avatar">
                        <img src="../../images/apps.png" className="img-circle icon" alt=""/>
                    </div>

                    <form id="loginForm" className="col-xs-offset-1 col-xs-10">
                        <div className="input-group input-group-lg">
                            <span className="input-group-addon">
                                <i className="fa fa-user"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="用户名" name="tc_name"
                                   onChange={(event) => {
                                       this.setState({username: event.target.value})
                                       // this.state.username = event.target.value
                                       // this.setState({})
                                   }} value={this.state.username}/>
                        </div>

                        <div className="input-group input-group-lg">
                            <span className="input-group-addon">
                                <i className="fa fa-key"></i>
                            </span>
                            <input type="password" className="form-control" placeholder="密码" name="tc_pass"
                                   onChange={(event) => {
                                       this.setState({password: event.target.value})
                                   }} value={this.state.password}/>
                        </div>

                        <button type="submit" className="btn btn-lg btn-primary btn-block" onClick={(e) => {
                            this.doSubmit(e)
                        }}>登 录
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    /**
     * 登录请求
     * @param e
     */
    doSubmit(e) {
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;

        console.log(username + "//" + password);

        // ajax 发送POST请求
        $.ajax({
            type: 'post',
            url: '/api/login', // /api 配置在服务端的反向代理
            data: 'tc_name=' + username + '&tc_pass=' + password,
            dataType: 'json', // 设置返回数据类型
            success: function (data) {

                // data.code == 200 登录成功
                if (data.code == 200) {

                    // 1. cookie储存登录成功后 用户的信息
                    // object -> String js对象转字符串储存
                    var loginInfo = JSON.stringify(data.result);
                    // cookie 本地储存loginInfo字符串(用户信息)
                    // 实现cookie数据的跨页面共享
                    $.cookie('loginInfo', loginInfo, {path: '/'});

                    // 2. 跳转页面
                    // 跳转页面到首页 index.html
                    location.href = '/';
                }
            },
            error: function (data) {
                console.log(data.responseText);
            }
        });
    }
}

export default Login
    