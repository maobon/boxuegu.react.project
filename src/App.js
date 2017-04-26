/**
 * Created by xinbob on 4/26/17.
 *
 * App
 * 路由模块
 */

import React from "react";
import {HashRouter, Route} from "react-router-dom";
// 引入样式文件
import "./less/index.less";
// 引入子模块
import Login from "./components/Login/Login";

class App extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Route path="/login" component={Login}/>
                </div>
            </HashRouter>
        )
    }
}

export default App