/**
 * Created by xinbob on 5/2/17.
 *
 * 两个功能共用一个模块
 * 添加讲师 and 编辑讲师信息
 */

import React from "react";
import $ from "jquery";
import DateTimeField from "react-bootstrap-datetimepicker";
import moment from "moment";
import "./TeacherEdt.css";

class TeacherEdt extends React.Component {

    constructor() {
        super();

        const now = moment().format('YYYY-MM-DD');

        this.state = {
            title: '',
            data: {
                tc_gender: '0',
                tc_join_date: now,
                tc_name: '',
                tc_type: '1',
                tc_pass: ''
            }
        }
    }

    componentWillMount() {
        // 获取传递过来的props中的参数 不能在constructor中获取
        let teacherId = this.props.match.params.id;

        if (teacherId) {
            $.ajax({
                type: 'post',
                url: '/api/teacher/edit',
                data: {tc_id: teacherId},
                dataType: 'json',
                success: (res) => {
                    if (res.code == 200) {
                        this.state.title = '编辑讲师';
                        this.state.data = res.result;
                        this.setState({})
                    }
                }
            });
        } else {
            this.state.title = '添加讲师';
            this.setState({})
        }
    }

    render() {

        let tc_id_hidden = null;
        let tc_pass_dom = null;

        if (this.state.data.tc_id) {
            tc_id_hidden = <input type="hidden" name="tc_id" value={this.state.data.tc_id}/>

        } else {
            tc_pass_dom = (
                <div className="form-group">
                    <label className="col-xs-3 control-label">密码</label>
                    <div className="col-xs-4">

                        {/* tc_pass */}
                        <input data-required data-pattern='^\d{6}$'
                               data-description='tcPass' data-describedby='tcPassInfo'
                               name="tc_pass" type="password" className="form-control input-sm"
                               onChange={(event) => {
                                   this.state.data.tc_pass = event.target.value;
                                   this.setState({})
                               }}
                        />

                    </div>
                    <div className="col-xs-2" id="tcPassInfo"></div>
                </div>
            )
        }

        return (
            <div className="main">
                <div className="container-fluid">
                    <div className="body teacher" id="teacherInfo">

                        {/* 面包屑导航 */}
                        <ol className="breadcrumb">
                            <li><a href="javascript:">讲师管理</a></li>
                            <li className="active">{ this.state.title }</li>
                        </ol>

                        {/* form表单 */}
                        <div className="teacher-add">
                            <form id="teacherInfoForm" className="form-horizontal col-xs-offset-2">

                                <div className="form-group">
                                    <label className="col-xs-3 control-label">姓名</label>
                                    <div className="col-xs-4">

                                        {/* 讲师id tc_id 使用隐藏域携带 */}
                                        {tc_id_hidden}

                                        {/* 讲师姓名 tc_name */}
                                        <input data-required data-description="tcName" data-describedby="tcNameInfo"
                                               name="tc_name"
                                               value={ this.state.data.tc_name }
                                               onChange={(event) => {
                                                   this.state.data.tc_name = event.target.value;
                                                   this.setState({})
                                               }} type="text" className="form-control input-sm" placeholder="讲师名称"/>
                                    </div>
                                    <div className="col-xs-2" id="tcNameInfo"></div>
                                </div>

                                {/* 登录密码 tc_pass 添加讲师时展示(编辑讲师信息时不展示) */}
                                {tc_pass_dom}

                                <div className="form-group">
                                    <label className="col-xs-3 control-label">入职时间</label>
                                    <div className="col-xs-4">

                                        {/* tc_join_date React-bootstrap-datetimerpicker (日期选择插件) */}
                                        <DateTimeField dateTime={this.state.data.tc_join_date}
                                                       format="YYYY-MM-DD" inputFormat="YYYY-MM-DD"
                                                       onChange={(newDate) => {
                                                           // console.log(newDate)
                                                           // this.setState({data: {tc_join_date: newDate}})
                                                           this.state.data.tc_join_date = newDate;
                                                           this.setState({})
                                                       }}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-xs-3 control-label">类型</label>
                                    <div className="col-xs-2">

                                        {/* 用户类型 tc_type 管理员or讲师 */}
                                        <select name="tc_type" className="form-control input-sm"
                                                value={this.state.data.tc_type}
                                                onChange={(event) => {
                                                    this.state.data.tc_type = event.target.value;
                                                    this.setState({})
                                                }}>
                                            <option value="1">讲师</option>
                                            <option value="0">管理员</option>
                                        </select>

                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-xs-3 control-label">性别</label>
                                    <div className="col-xs-4">

                                        {/* 性别 tc_gender */}
                                        <label className="radio-inline">
                                            <input type="radio" name="tc_gender" value="0"
                                                   checked={this.state.data.tc_gender == '0'}
                                                   onChange={(event) => {
                                                       this.state.data.tc_gender = event.target.value;
                                                       this.setState({})
                                                   }}/> 男
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="tc_gender" value="1"
                                                   checked={this.state.data.tc_gender == '1'}
                                                   onChange={(event) => {
                                                       this.state.data.tc_gender = event.target.value;
                                                       this.setState({})
                                                   }}/> 女
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-xs-7">

                                        {/* SUBMIT BUTTON */}
                                        <input type="submit" value="提 交"
                                               className="btn btn-success btn-sm pull-right btn-submit"
                                               onClick={(e) => {
                                                   e.preventDefault();
                                                   this.doSubmit()
                                               }}
                                        />

                                    </div>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    /**
     * 提交
     */
    doSubmit() {
        const params = this.state.data

        if (this.state.title == '编辑讲师') {
            $.ajax({
                type: 'post',
                url: '/api/teacher/update',
                dataType: 'json',
                data: params,
                success: function (res) {
                    console.log(res)
                    window.location.href = '#/TeacherMng'
                }
            })

        } else if (this.state.title == '添加讲师') {
            $.ajax({
                type: 'post',
                url: '/api/teacher/add',
                dataType: 'json',
                data: params,
                success: function (res) {
                    console.log(res)
                    window.location.href = '#/TeacherMng'
                }
            })
        }
    }
}

export default TeacherEdt