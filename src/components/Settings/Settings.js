/**
 * Created by xinbob on 5/6/17.
 *
 * 个人中心
 */

import React from "react";
import $ from "jquery";
import DateTimeField from "react-bootstrap-datetimepicker";
import "./Settings.css";

export default class Settings extends React.Component {

    constructor() {
        super();

        this.state = {
            data: {
                tc_avatar: '',
                tc_birthday: '',
                tc_cellphone: '',
                tc_city: '',
                tc_district: '',
                tc_email: '',
                tc_gender: '',
                tc_hometown: '',
                tc_id: '',
                tc_introduce: '',
                tc_join_date: '',
                tc_name: '',
                tc_province: '',
                tc_roster: ''
            }
        }
    }

    componentWillMount() {
        $.ajax({
            type: 'get',
            url: '/api/teacher/profile',
            dataType: 'json',
            success: (res) => {
                this.state.data = res.result;
                this.setState({})
            }
        })
    }

    /*
     * 提交修改的数据
     */
    doSubmit(event) {
        event.preventDefault();
        console.log(this.state.data)
    }

    render() {

        let img_headphoto = null;
        if (this.state.data.tc_avatar) {
            img_headphoto = <img src={this.state.data.tc_avatar}/>
        } else {
            img_headphoto = <img src="../../images/default.png"/>
        }


        return (
            <div className="main">
                <div className="container-fluid">
                    <div className="body teacher-profile">
                        <div className="settings" id="profileInfo">

                            <form className="form-horizontal" id="profile_form">
                                {/* 姓名 表单提交时需传递tc_id (隐藏域) */}
                                <div className="form-group">
                                    <label className="col-xs-3 control-label">姓名</label>
                                    <div className="col-xs-5">
                                        {/* tc_id */}
                                        <input type="hidden" name="tc_id" value={this.state.data.tc_id}/>
                                        <p className="form-control-static">{this.state.data.tc_name}</p>
                                    </div>
                                </div>

                                {/* 头像 */}
                                <div className="form-group">
                                    <label className="col-xs-3 control-label">头像</label>
                                    <div className="col-xs-2 preview">
                                        {img_headphoto}
                                        <input type="file" id="upload_file"/>
                                        <div className="cover">
                                            <i className="fa fa-upload"></i>
                                        </div>
                                    </div>
                                </div>

                                {/* 昵称 */}
                                <div className="form-group">
                                    <label className="col-xs-3 control-label">昵称</label>
                                    <div className="col-xs-5">
                                        <input name="tc_roster" value={this.state.data.tc_roster}
                                               type="text" className="form-control input-sm"
                                               onChange={(e) => {
                                                   this.state.data.tc_roster = e.target.value;
                                                   this.setState({})
                                               }}/>
                                    </div>
                                </div>

                                {/* 性别 */}
                                <div className="form-group">
                                    <label className="col-xs-3 control-label">性别</label>
                                    <div className="col-xs-3">
                                        <label className="radio-inline">
                                            <input type="radio" name="tc_gender" value="0"
                                                   onChange={(e) => {
                                                       this.state.data.tc_gender = e.target.value;
                                                       this.setState({})
                                                   }}
                                                   checked={this.state.data.tc_gender == 0}/> 男
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="tc_gender" value="1"
                                                   onChange={(e) => {
                                                       this.state.data.tc_gender = e.target.value;
                                                       this.setState({})
                                                   }}
                                                   checked={this.state.data.tc_gender == 1}/> 女
                                        </label>
                                    </div>
                                </div>

                                {/* 出生日期 插件 */}
                                <div className="form-group">
                                    <label className="col-xs-3 control-label">出生日期</label>
                                    <div className="col-xs-5">
                                        <DateTimeField
                                            dateTime={this.state.data.tc_birthday}
                                            format="YYYY-MM-DD" inputFormat="YYYY-MM-DD"
                                            className="form-control input-sm"
                                            onChange={(newDate) => {
                                                this.state.data.tc_birthday = newDate;
                                                this.setState({})
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* 三级联动 选择籍贯 */}
                                <div className="form-group">
                                    <label className="col-xs-3 control-label">籍贯</label>

                                    {/* id="p c d" 不能改 此id插件设置的 data-id代表省市编码 */}
                                    <div className="col-xs-5 hometown">
                                        <select name="tc_province" id="p"
                                                data-id={this.state.data.tc_province}
                                                className="form-control input-sm">
                                            <option value="">河北省</option>
                                        </select>
                                        <select name="tc_city" id="c"
                                                data-id={this.state.data.tc_city}
                                                className="form-control input-sm">
                                            <option value="">河北省</option>
                                        </select>
                                        <select name="tc_district" id="d"
                                                data-id={this.state.data.tc_district}
                                                className="form-control input-sm">
                                            <option value="">河北省</option>
                                        </select>
                                    </div>
                                </div>

                                {/* 手机号码 */}
                                <div className="form-group">
                                    <label className="col-xs-3 control-label">手机号码</label>
                                    <div className="col-xs-5">
                                        <input name="tc_cellphone" value={this.state.data.tc_cellphone}
                                               type="text" className="form-control input-sm"
                                               onChange={(e) => {
                                                   this.state.data.tc_cellphone = e.target.value;
                                                   this.setState({})
                                               }}
                                        />
                                    </div>
                                </div>

                                {/* 邮箱 */}
                                <div className="form-group">
                                    <label className="col-xs-3 control-label">电子邮箱</label>
                                    <div className="col-xs-5">
                                        <input name="tc_email" value={this.state.data.tc_email}
                                               type="text" className="form-control input-sm"
                                               onChange={(e) => {
                                                   this.state.data.tc_email = e.target.value;
                                                   this.setState({})
                                               }}
                                        />
                                    </div>
                                </div>

                                {/* 入职日期 datepicker插件 插件 */}
                                <div className="form-group">
                                    <label className="col-xs-3 control-label">入职日期</label>
                                    <div className="col-xs-5">
                                        <DateTimeField
                                            dateTime={this.state.data.tc_join_date}
                                            format="YYYY-MM-DD" inputFormat="YYYY-MM-DD"
                                            className="form-control input-sm"
                                            onChange={(newDate) => {
                                                this.state.data.tc_join_date = newDate;
                                                this.setState({})
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* 个人介绍 */}
                                <div className="form-group">
                                    <label className="col-xs-3 control-label">个人介绍</label>
                                    <div className="col-xs-5">
                                        React 无法支持CKEditor
                                        {/*<CKEditor value={this.state.data.tc_introduce}*/}
                                        {/*onChange={(value) => {*/}
                                        {/*this.state.data.tc_introduce = value*/}
                                        {/*this.setState({})*/}
                                        {/*}}*/}
                                        {/*config={{readOnly: true}}*/}
                                        {/*/>*/}
                                    </div>
                                </div>

                                {/* 保存按钮 */}
                                <div className="form-group">
                                    <div className="col-xs-8">
                                        <input type="submit" className="btn btn-success btn-sm pull-right btn-submit"
                                               value="保 存" onClick={this.doSubmit.bind(this)}/>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
