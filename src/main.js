/**
 * Created by xinbob on 4/23/17.
 *
 * 入口文件
 */

import React from "react";
import ReactDom from "react-dom";
// 引入静态资源
import "jquery";
import "jquery.cookie";
import "./assets/jquery-region/jquery.region.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "font-awesome/css/font-awesome.css";
// 引入App模块
import App from "./App";

// ReactDom 渲染生成App至box容器内
ReactDom.render(
    <App></App>,
    document.getElementById('box')
);