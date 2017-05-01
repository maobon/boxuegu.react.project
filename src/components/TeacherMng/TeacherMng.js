/**
 * Created by xinbob on 4/30/17.
 *
 * 教师管理页面
 */

import React from "react";
import $ from "jquery";
import './TeacherMng.css'

class TeacherMng extends React.Component {

    constructor() {
        super()

        this.state = {
            list: []
        }
    }

    componentWillMount() {
        $.ajax({
            type: 'get',
            url: '/api/teacher',
            dataType: 'json',
            success: (res) => {
                // console.log(res.result)
                this.state.list = res.result
                this.setState({})
            }
        });
    }

    render() {

        let arr = this.state.list.map(function (item, index) {

            return (
                <tr key={ index }>
                    <td>{ index + 1 }</td>
                    <td>{ item.tc_name }</td>
                    <td>{ item.tc_roster }</td>
                    <td>{ item.tc_birthday }</td>
                    <td>
                        { item.tc_gender == 0 ? '男' : '女' }
                    </td>
                    <td>{ item.tc_cellphone }</td>

                    <td className="teacherOperation" data-tcid={ item.tc_id } data-tcstatus={ item.tc_status }>
                        <a href="javascript:" data-toggle="modal" className="btn btn-info btn-xs">查 看</a>
                        <a href="javascript:" className="btn btn-info btn-xs">编 辑</a>
                        <a href="javascript:" className="btn btn-warning btn-xs">
                            { item.tc_status == 0 ? '注 销' : '启 用' }
                        </a>
                    </td>
                </tr>
            )
        })

        console.log(arr)

        return (
            // 外层容器样式
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

                            {/* 讲师列表Table*/}
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

                                {/*hahahha*/}
                                {arr}

                                </tbody>
                            </table>
                        </div>

                    </div>

                    {/* Bootstrap test */}
                    {/*<button type="button" className="btn btn-primary" data-toggle="modal"*/}
                    {/*data-target=".bs-example-modal-lg">Large modal*/}
                    {/*</button>*/}

                    {/*<div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog"*/}
                    {/*aria-labelledby="myLargeModalLabel">*/}
                    {/*<div className="modal-dialog modal-lg" role="document">*/}
                    {/*<div className="modal-content">*/}
                    {/**/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default TeacherMng
