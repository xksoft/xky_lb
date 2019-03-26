<template>
    <div>
    <Row>
        <header>
            <Icon type="ios-information" size="30"></Icon> 
            <span data-radium="true" style="vertical-align: middle; margin-left: 14px; font-weight: 400; color: rgb(84, 110, 122); font-size: 16px;">账号信息</span>
        </header>
        <i-col span="8">
            <div class="info_left">
                <h1>基本信息</h1>
                <Row>
                    <img src="../../assets/logo.png" alt="">
                </Row>
                <Row>
                    <i-col span="4" offset="2">用户名</i-col>
                    <i-col span="18">156115151515</i-col>
                </Row>
                <Row>
                    <i-col span="4" offset="2">昵称</i-col>
                    <i-col span="18">蚊子</i-col>
                </Row>
                <Row>
                    <i-col span="4" offset="2">性别</i-col>
                    <i-col span="18">男</i-col>
                </Row>
                <Row>
                    <i-col span="4" offset="2">生日</i-col>
                    <i-col span="18">1999-66-66</i-col>
                </Row>
            </div>
        </i-col>
        <i-col span="15" offset="1">
            <div class="info_right_top">
                <h1>安全设置</h1>
                <Row>
                    <i-col span="4" offset="2">绑定手机</i-col>
                    <i-col span="18">156115151515</i-col>
                </Row>
                <Row>
                    <i-col span="4" offset="2">绑定邮箱</i-col>
                    <i-col span="18">蚊子</i-col>
                </Row>
                <Row>
                    <i-col span="4" offset="2">登陆密码</i-col>
                    <i-col span="18">男</i-col>
                </Row>
                <Row>
                    <i-col span="4" offset="2">第三方账号</i-col>
                    <i-col span="18">1999-66-66</i-col>
                </Row>
            </div>
            <div class="info_right_btn">
                <h1>开发者信息</h1>
                <Row>
                    <i-col span="4" offset="2">开发者类型</i-col>
                    <i-col span="18">156115151515</i-col>
                </Row>
                <Row>
                    <i-col span="4" offset="2">开发者姓名</i-col>
                    <i-col span="18">蚊子</i-col>
                </Row>
                <Row>
                    <i-col span="4" offset="2">个人主页</i-col>
                    <i-col span="18">男</i-col>
                </Row>
                <Row>
                    <i-col span="4" offset="2">个人简介</i-col>
                    <i-col span="18">1999-66-66</i-col>
                </Row>
            </div>
        </i-col>
    </Row>
    </div>
</template>
<script>
    export default {
        
    }
</script>
<style lang="less" scoped>
.info_left{
    border-right: 1px solid rgba(93, 87,96,.2);
    margin: 50px 0 0 50px;
    background: #FAFBFC;
    img{
        width: 100px;
        height: 100px;
    }
}
.ivu-row{
    margin: 20px 0;
}
.info_right_top{
    border-bottom: 1px solid rgba(93, 87,96,.2);
}
.info_right_btn{
    margin-top: 50px;
}
</style>

