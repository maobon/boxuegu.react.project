/**
 * Created by xinbob on 4/26/17.
 *
 * Sidebar 侧边栏
 * 多个页面共享
 */

import React from "react";

class Sidebar extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="aside">

                <div className="profile">
                    <div className="avatar img-circle">
                        <img src="http://static.botue.com/images/avatar/58d2967fbbb5e.jpg"/>
                    </div>
                    <h4>admin</h4>
                </div>

                <div className="navs">
                    <ul className="list-unstyled">
                        <li>
                            <a href="#/">
                                <i className="fa fa-home"></i>
                                仪表盘
                            </a>
                        </li>
                        <li>
                            <a href="#/TeacherMng">
                                <i className="fa fa-bell"></i>
                                讲师管理
                            </a>
                        </li>
                        <li>
                            <a href="/user/user_list">
                                <i className="fa fa-bell"></i>
                                用户管理
                            </a>
                        </li>
                        <li>
                            <a href="javascript:">
                                <i className="fa fa-cog"></i>
                                课程管理
                                <i className="arrow fa fa-angle-right"></i>
                            </a>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/course/course_add">
                                        课程添加
                                    </a>
                                </li>
                                <li>
                                    <a href="/course/course_list">
                                        课程列表
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Sidebar