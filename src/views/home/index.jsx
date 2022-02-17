import { useEffect } from "react"
import { Route, Link,Redirect,useLocation ,Switch} from "react-router-dom"

import { Layout, Menu,message } from "antd"
import "./index.css"

import route from "../../router/router.config"

const { Header, Content } = Layout

function Home(props) {
  let location=useLocation();
  useEffect(()=>{
    message.success(`页面切换到${location.pathname}`)
  },[location.pathname])
  return (
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
          </Menu>
        </Header>
        <Content>
          <Switch>
          {route.map((item)=>{
            return( <Route key={item.path} path={item.path} render={props => <item.component {...props}  />
            }  />)
           
          })}
            <Redirect from="/*" to='/about'/>
          </Switch>
        </Content>
      </Layout>
  )
}

export default Home
