/**
 * Created by xinbob on 4/30/17.
 *
 * 教师管理页面
 */

import React from "react";

class TeacherMng extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (

            <div className="main">
                <div className="container-fluid">

                    <div className="body teacher-list">

                        {/* bread crumb  */}
                        <ol className="breadcrumb">
                            <li><a href="javascript:">讲师管理</a></li>
                            <li className="active">讲师列表</li>
                        </ol>

                        {/* page title */}
                        <div className="page-title">
                            <a href="/teacher/teacher_add" className="btn btn-success btn-sm pull-right">添加讲师</a>
                        </div>

                        {/* teacher list */}
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form action="" className="form-inline">
                                    <div className="input-group">
                                        <input type="text" className="form-control input-sm"/>
                                        <span className="input-group-btn">
                                    <button className="btn btn-success btn-sm">搜索</button>
                                </span>
                                    </div>
                                </form>
                            </div>

                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>编号</th>
                                    <th>姓名</th>
                                    <th>昵称</th>
                                    <th>年龄</th>
                                    <th>性别</th>
                                    <th>手机号码</th>
                                    <th>操作</th>
                                </tr>
                                </thead>

                                <tbody id="teacherList">

                                </tbody>
                            </table>
                        </div>

                    </div>

                    {/* bbbb */}
                    <button type="button" className="btn btn-primary" data-toggle="modal"
                            data-target=".bs-example-modal-lg">Large modal
                    </button>

                    <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog"
                         aria-labelledby="myLargeModalLabel">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi deleniti
                                error et minima, optio perspiciatis quas veniam! Aperiam blanditiis culpa explicabo fuga
                                omnis perferendis placeat provident ut voluptate voluptatibus.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi deleniti
                                error et minima, optio perspiciatis quas veniam! Aperiam blanditiis culpa explicabo fuga
                                omnis perferendis placeat provident ut voluptate voluptatibus.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi deleniti
                                error et minima, optio perspiciatis quas veniam! Aperiam blanditiis culpa explicabo fuga
                                omnis perferendis placeat provident ut voluptate voluptatibus.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi deleniti
                                error et minima, optio perspiciatis quas veniam! Aperiam blanditiis culpa explicabo fuga
                                omnis perferendis placeat provident ut voluptate voluptatibus.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi deleniti
                                error et minima, optio perspiciatis quas veniam! Aperiam blanditiis culpa explicabo fuga
                                omnis perferendis placeat provident ut voluptate voluptatibus.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi deleniti
                                error et minima, optio perspiciatis quas veniam! Aperiam blanditiis culpa explicabo fuga
                                omnis perferendis placeat provident ut voluptate voluptatibus.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi deleniti
                                error et minima, optio perspiciatis quas veniam! Aperiam blanditiis culpa explicabo fuga
                                omnis perferendis placeat provident ut voluptate voluptatibus.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeacherMng
