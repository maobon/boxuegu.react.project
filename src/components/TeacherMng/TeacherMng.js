/**
 * Created by xinbob on 4/30/17.
 *
 * 教师管理页面
 */

import React from "react";
import $ from "jquery";
import "./TeacherMng.css";

class TeacherMng extends React.Component {

    constructor() {
        super()

        this.state = {
            list: [],
            detailInfo: []
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

        // 讲师列表
        let arr = this.state.list.map((item, index) => {
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

                        {/* 查看该位讲师详情 */}
                        <a onClick={() => {
                            this.checkTeacherDetailInfo(item.tc_id)
                        }} href="#teacherModal" data-toggle="modal" className="btn btn-info btn-xs">查 看</a>

                        {/* 编辑该位讲师 锚点携带tc_id属性 传递给编辑页面 */}
                        <a href={'#/TeacherEdt/' + item.tc_id} className="btn btn-info btn-xs">编 辑</a>

                        {/* 是否启用该讲师的使用权限 */}
                        <a href="javascript:" className="btn btn-warning btn-xs">
                            { item.tc_status == 0 ? '注 销' : '启 用' }
                        </a>
                    </td>
                </tr>
            )
        })

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
                                {arr}
                                </tbody>
                            </table>
                        </div>

                    </div>

                    {/* 查看讲师详情模态框 */}
                    <div className="modal fade" id="teacherModal">
                        <div className="modal-dialog" style={{width: '750px'}}>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="panel-title">讲师信息</h4>
                                </div>
                                <div className="panel-body">
                                    <table className="table table-bordered table-condensed">
                                        {this.state.detailInfo}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    /**
     * 查看讲师详细信息
     * @param teacherId
     */
    checkTeacherDetailInfo(teacherId) {

        $.ajax({
            type: 'get',
            url: '/api/teacher/view',
            data: {tc_id: teacherId},
            dataType: 'json',
            success: (res) => {

                if (res.code == 200) {
                    // clean detai info
                    this.state.detailInfo = []
                    // 调整数据格式
                    res.result.tc_hometown = res.result.tc_hometown.split("|").join(" ");

                    const item = res.result

                    // 是否有头像
                    let headPic = null
                    if (item.tc_avatar) {
                        headPic = <img src={ item.tc_avatar } alt=""/>
                    } else {
                        headPic = <img src="../../images/default.png" alt=""/>
                    }

                    // 渲染数据到tbody
                    this.state.detailInfo.push(
                        <tbody id="teacherDetailInfo">

                        <tr>
                            <th>姓名:</th>
                            <td>{ item.tc_name }</td>
                            <th>职位:</th>
                            <td colSpan={3}>讲师</td>
                            <td rowSpan={4} width="128">
                                <div className="avatar">
                                    { headPic }
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th>花名:</th>
                            <td>{ item.tc_roster }</td>
                            <th>出生日期:</th>
                            <td colSpan={3}>{ item.tc_birthday }</td>
                        </tr>

                        <tr>
                            <th>性别:</th>
                            <td>
                                { item.tc_gender == 1 ? '女' : '男' }
                            </td>
                            <th>入职日期:</th>
                            <td colSpan={3}>{ item.tc_join_date }</td>
                        </tr>

                        <tr>
                            <th>手机号码:</th>
                            <td colSpan={2}>{ item.tc_cellphone }</td>
                            <th>邮箱:</th>
                            <td colSpan={2}>{ item.tc_email }</td>
                        </tr>

                        <tr>
                            <th>籍贯:</th>
                            <td colSpan={6}>{ item.tc_hometown }</td>
                        </tr>

                        <tr>
                            <td colSpan={7}>
                                <div className="introduce">
                                    {/* 此处直接输出HTML标签 */}
                                    <p dangerouslySetInnerHTML={{__html: item.tc_introduce}}></p>
                                </div>
                            </td>
                        </tr>

                        </tbody>
                    )

                    this.setState({})
                }
            }
        });

    }

}

export default TeacherMng
