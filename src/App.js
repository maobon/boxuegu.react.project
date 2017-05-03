/**
 * Created by xinbob on 4/26/17.
 *
 * App 路由模块
 */

import React from "react";
import {HashRouter, Route} from "react-router-dom";
// 引入样式文件
import "./less/index.less";
// 引入自己的模块
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Index from "./components/Index/Index";
import TeacherMng from "./components/TeacherMng/TeacherMng";
import TeacherEdt from "./components/TeacherEdt/TeacherEdt";

class App extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Header/>
                    <Sidebar/>
                    <div>
                        <Route path="/Index" component={Index}/>
                        <Route path="/Login" component={Login}/>
                        <Route path="/TeacherMng" component={TeacherMng}/>
                        <Route path="/TeacherEdt" component={TeacherEdt}/>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default App