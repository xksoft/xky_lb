<template>
    <div>
        <header>
            <Icon type="ios-information" size="30"></Icon> 
            <span data-radium="true" style="vertical-align: middle; margin-left: 14px; font-weight: 400; color: rgb(84, 110, 122); font-size: 16px;">账号信息</span>
        </header>
    <Row class="bor">
        <i-col span="6">
            <div class="info_left">
                <h2>基本信息</h2>
                <Row>
                    <img src="../../assets/logo.png" alt="">
                </Row>
                <Row>
                    <i-col span="4"  >用户名</i-col>
                    <i-col span="18">156115151515</i-col>
                </Row>
                <Row>
                    <i-col span="4"  >昵称</i-col>
                    <i-col span="18">蚊子</i-col>
                </Row>
                <Row>
                    <i-col span="4"  >性别</i-col>
                    <i-col span="18">男</i-col>
                </Row>
                <Row>
                    <i-col span="4"  >生日</i-col>
                    <i-col span="18">1999-66-66</i-col>
                </Row>
            </div>
        </i-col>

        <i-col span="18"  class="bor-left">
            <div class="info_right_top">
                <h2>安全设置</h2>
                <Row>
                    <i-col span="4"  >绑定手机</i-col>
                    <i-col span="18">1561515151515<router-link to="/info/phone" style="margin-left:10px"><Icon type="ios-create-outline" size="24" color="black"/></router-link></i-col>
                </Row>
                <Row>
                    <i-col span="4"  >绑定邮箱</i-col>
                    <i-col span="18">123123213@163.com<router-link to="/info/email" style="margin-left:10px"><Icon type="ios-create-outline" size="24" color="black"/></router-link></i-col>
                </Row>
                <Row>
                    <i-col span="4"  >登陆密码</i-col>
                    <i-col span="18">a</i-col>
                </Row>
                <Row>
                    <i-col span="4"  >第三方账号</i-col>
                    <i-col span="18">1999-66-66</i-col>
                </Row>
            
                <h2 style="border-top: 1px solid #e1e8ed;margin-right:30px;padding-top:30px;">开发者信息</h2>
                <Row>
                    <i-col span="4"  >开发者类型</i-col>
                    <i-col span="18">156115151515</i-col>
                </Row>
                <Row>
                    <i-col span="4"  >开发者姓名</i-col>
                    <i-col span="18">蚊子</i-col>
                </Row>
                <Row>
                    <i-col span="4"  >个人主页</i-col>
                    <i-col span="18">男</i-col>
                </Row>
                <Row>
                    <i-col span="4"  >个人简介</i-col>
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
    // border-right: 1px solid rgba(93, 87,96,.1);
    margin: 30px 0 0 30px;
    // background: #FAFBFC;
    img{
        width: 100px;
        height: 100px;
    }
}
.ivu-row{
    margin: 20px 0;
}
.info_right_top{
    margin: 30px 0 0 30px;
    border-bottom: 1px solid rgba(93, 87,96,.1);
}
.info_right_btn{
    margin-top: 50px;
}
.bor{
    border: 1px solid rgba(93, 87,96,.1);
    background: #FAFBFC;
  
}
.bor-left{
    border-left: 1px solid rgba(93, 87,96,.2);
    // padding-left: 30px;
    background: white;

}
</style>

