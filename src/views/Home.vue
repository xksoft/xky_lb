<style scoped>
    html,body{
        border: none;
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }
    a{
    color: white;
    }
    a:hover{
    color: white;
    }
    .layout{
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%
    }
    .ivu-layout{
        width: 100%;
        height: 100%;
    }
    .layout-header-bar{
        background: white;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        border-bottom: 1px solid rgba(93, 87,96,.1);
    }
    .ivu-breadcrumb{
        display: inline;
        margin-left: 20px;
    }
    .layout-nav{
        width: 420px;
        float: right;
    }
    .ivu-layout-content{
        height: 100%;
        color: #535353;
        font-size: 14px;
        padding: 20px;
        background: #fbfbfb;
        line-height: 36px;
        
    }
    .layout-nav .ivu-menu-item{
        display: inline;
        margin-left: 30px;
    }
    .layout-logo{
        width: 120px;
        height: 50px;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 6px;
        left: 20px;
    }
    .ivu-layout-sider-children img{
      width: 120px;
      height: 50px;
    }
    .ivu-menu{
        margin-top: 60px;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
 
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78"  :style="{background: '#001529'}">
                <div class="layout-logo">
                    <img src="../img/xky.svg" alt="" srcset="">
                </div>
                <!-- 侧栏组件 -->
                <Menu></Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                        <!-- 面包屑组件 -->
                        <Breadcrumb :levelList="levelList"></Breadcrumb>
                    <!-- <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: ' 20px 50px',float:'right',color:'#001529'}" type="navicon-round" size="24"></Icon> -->
                    <div class="layout-nav">

                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />

                        </MenuItem>
                    </div>
                </Header>
                <Content>
                      <router-view/>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import Breadcrumb from '../components/subcomponents/Breadcrumb'
import Menu from '../components/subcomponents/Menu'

    export default {
        name: 'home',
        data () {
            return {
                
                activeName: '',
                opens: [],
                levelList:[]
            }
        },
        created() {
            // 初始化菜单
            this.getBreadcrumb(),

            this.activeName = this.$route.name
        },
        watch: {
            // 监听路由变化 改变显示
            $route() {
                
                this.getBreadcrumb()

            },
        },
        computed: {
           
        },
        methods: {
            getBreadcrumb(){
                this.levelList=this.$route.meta.title
            }

        },
        components: {
            Breadcrumb,
            Menu
        }
    }
</script>
