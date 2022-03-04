import React, { Suspense ,Profiler} from 'react';
import { useEffect } from "react"
import { Route, Link,Redirect,useLocation ,Switch} from "react-router-dom"
import { ConfigProvider,Layout, Menu,message } from "antd"
import moment from 'moment';
import 'moment/locale/zh-cn';
import zhCN from 'antd/es/locale/zh_CN';
import "./index.css"
import route from "@/router/router.config"

moment.locale('zh-cn');
const { Header, Content } = Layout

function Home(props) {
  let location=useLocation();
  useEffect(()=>{
    message.success(`页面切换到${location.pathname}`)
  },[location.pathname])

  function onRenderCallback(
    id, // 发生提交的 Profiler 树的 “id”
    phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
    actualDuration, // 本次更新 committed 花费的渲染时间
    baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
    startTime, // 本次更新中 React 开始渲染的时间
    commitTime, // 本次更新中 React committed 的时间
    interactions // 属于本次更新的 interactions 的集合
  ) {
   console.log(id,phase,actualDuration,baseDuration,startTime,commitTime,interactions)
  }

  return (
    <Profiler id="Panel" onRender={onRenderCallback}>
    <ConfigProvider locale={zhCN}>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
            <Menu.Item key="/about">
              <Link to="/about">介绍</Link>
            </Menu.Item>
            <Menu.Item key="/adress">
              <Link to="/adress">地址</Link>
            </Menu.Item>
            <Menu.Item key="/svg">  <Link to="/svg">SVG</Link></Menu.Item>
            <Menu.Item key="/mobxdemo">  <Link to="/mobxdemo">Mobx</Link></Menu.Item>
          </Menu>
        </Header>
        <Content>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {route.map((item)=>{
            return( <Route key={item.path} path={item.path} render={props => <item.component  {...props}  />
            }  />)
           
          })}
            <Redirect from="/*" to='/about'/>
          </Switch>
          </Suspense>
        </Content>
      </Layout>
      </ConfigProvider>
      </Profiler>
  )
}

export default Home
