/**
 * Created by xinbob on 4/26/17.
 */

import React from "react";

class Index extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="main">
                <div className="container-fluid">
                    <div className="body teacher-profile">
                        <div className="profile">
                            <div className="row survey">
                                <div className="col-xs-3">
                                    <div className="cell money">
                                        <i className="fa fa-money"></i>
                                        <span>我的收入</span>
                                        <h5>￥11.11</h5>
                                    </div>
                                </div>
                                <div className="col-xs-3">
                                    <div className="cell th">
                                        <i className="fa fa-th"></i>
                                        <span>课程数量</span>
                                        <h5>12</h5>
                                    </div>
                                </div>
                                <div className="col-xs-3">
                                    <div className="cell user">
                                        <i className="fa fa-user"></i>
                                        <span>用户数量</span>
                                        <h5>236</h5>
                                    </div>
                                </div>
                                <div className="col-xs-3">
                                    <div className="cell eye">
                                        <i className="fa fa-eye"></i>
                                        <span>浏览量</span>
                                        <h5>22435</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index