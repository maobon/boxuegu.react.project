/**
 * Created by xinbob on 5/2/17.
 *
 * 两个功能共用一个模块
 * 添加讲师 and 编辑讲师信息
 */

import React from "react";
import $ from "jquery";
import "bootstrap-datepicker";
import "./TeacherEdt.css";

class TeacherEdt extends React.Component {

    constructor() {
        super();

        this.state = {
            title: '',
            data: {
                tc_gender: '',
                tc_id: '',
                tc_join_date: '',
                tc_name: '',
                tc_type: ''
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
                        <input data-required data-pattern='^\d{6}$'
                               data-description='tcPass' data-describedby='tcPassInfo'
                               name="tc_pass" type="password" className="form-control input-sm"/>
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

                        {/* 内容 */}
                        <div className="teacher-add">
                            <form id="teacherInfoForm" className="form-horizontal col-xs-offset-2">

                                {/* 讲师姓名 tc_name */}
                                <div className="form-group">
                                    <label className="col-xs-3 control-label">姓名</label>
                                    <div className="col-xs-4">

                                        {/* 讲师id tc_id 使用隐藏域携带 */}
                                        {tc_id_hidden}

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

                                {/* 登录密码 tc_pass 添加讲师时展示 */}
                                {tc_pass_dom}

                                {/* 入职时间 tc_join_date */}
                                <div className="form-group">
                                    <label className="col-xs-3 control-label">入职时间</label>
                                    <div className="col-xs-4">
                                        <input data-required
                                               data-description="joinDate" data-describedby="tcJoinDateInfo"
                                               name="tc_join_date"
                                               value={ this.state.data.tc_join_date }
                                               onChange={(event) => {
                                                   this.state.data.tc_join_date = event.target.value;
                                                   this.setState({})
                                               }}
                                               data-date-language="zh-CN" data-provide="datepicker"
                                               data-date-format="yyyy-mm-dd"
                                               data-date-end-date="0d"
                                               type="text" className="form-control input-sm"/>
                                    </div>
                                    <div className="col-xs-2" id="tcJoinDateInfo"></div>
                                </div>

                                {/* 用户类型 tc_type 管理员or讲师 */}
                                <div className="form-group">
                                    <label className="col-xs-3 control-label">类型</label>
                                    <div className="col-xs-2">
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

                                {/* 性别 tc_gender */}
                                <div className="form-group">
                                    <label className="col-xs-3 control-label">性别</label>
                                    <div className="col-xs-4">
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

                                {/* 提交修改信息 */}
                                <div className="form-group">
                                    <div className="col-xs-7">
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

    doSubmit() {
        console.log(this.state.data)
    }
}

export default TeacherEdt