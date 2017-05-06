/**
 * Created by xinbob on 4/26/17.
 *
 * Header 页面顶部header部分
 * 多个页面共享
 */

import React from "react";
import $ from "jquery";

class Header extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-custom">
                    <div className="navbar-header">
                        <a href="javascript:" className="navbar-brand">
                            <i className="fa fa-navicon"></i>
                        </a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="javascript:">
                                <i className="fa fa-bell"></i>
                                <span className="badge">8</span>
                            </a>
                        </li>
                        <li>
                            <a href="/index/settings">
                                <i className="fa fa-user"></i>
                                个人中心
                            </a>
                        </li>
                        <li>
                            <a href="javascript:" id="btnLogout" onClick={(e) => {
                                e.preventDefault;
                                this.doLogout()
                            }}>
                                <i className="fa fa-sign-out"></i>
                                退出
                            </a>
                        </li>
                        <li>
                            <a href="javascript:">
                                <i className="fa fa-tasks"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }

    /**
     * 登出
     */
    doLogout() {
        $.ajax({
            type: 'post',
            url: '/api/logout',
            dataType: 'json',
            success: function (data) {
                if (data.code == 200) {
                    // 清空本地cookie
                    $.removeCookie('PHPSESSID');
                    $.removeCookie('loginInfo');
                    window.location.href = '#/Login'
                }
            }
        });
    }
}

export default Header