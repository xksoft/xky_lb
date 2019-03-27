<style scoped>
    a{
    color: #c8d4e0
    }
    a:hover{
    color: white;
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #0c0c0c;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo{
        width: 120px;
        height: 50px;
        /* background: #001529; */
        border-radius: 3px;
        float: left;
        position: relative;
        top: 6px;
        left: 10px;
    }
  .layout-logo img{
      width: 105px;
      height: 20px;
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
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed " :style="{background: '#001529'}">
                <Menu  theme="dark" width="auto" :class="menuitemClasses" accordion :style="{background: '#001529'}">
                    <Submenu name="1" :style="{background: '#001529'}">
                    <template slot="title">
                        <Icon type="person"></Icon>
                        个人中心
                    </template>
                    <Menu-item name="1-1" ><router-link to="/info">账号管理</router-link></Menu-item>
                    <Menu-item name="1-2"><router-link to="/permission">身份认证</router-link></Menu-item>
                    <Menu-item name="1-3"><router-link to="/userRoot">账号权限</router-link></Menu-item>
                </Submenu>
                <!-- <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        身份认证
                    </template>
                    <Menu-item name="2-1">新增用户</Menu-item>
                    <Menu-item name="2-2">活跃用户</Menu-item>
                </Submenu> -->
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        授权码申请
                    </template>
                    <Menu-group title="使用">
                        <Menu-item name="3-1">新增和启动</Menu-item>
                        <Menu-item name="3-2">活跃分析</Menu-item>
                        <Menu-item name="3-3">时段分析</Menu-item>
                    </Menu-group>
                   
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        授权码列表
                    </template>
                        <Menu-item name="4-1">新增和启动</Menu-item>
                        <Menu-item name="4-2">活跃分析</Menu-item>
                        <Menu-item name="4-3"><router-link to="/upload">图片上传</router-link></Menu-item>
                </Submenu>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                     <div class="layout-logo">
                         <img src="../img/xky.svg" alt="" srcset="">
                     </div>
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: ' 20px 50px',float:'right',color:'white'}" type="navicon-round" size="24"></Icon>

                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '784px'}">
                      <router-view/>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                isCollapsed: false
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            }
        }
    }
</script>
