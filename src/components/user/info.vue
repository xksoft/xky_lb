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
                    <i-col span="18">
                        <span v-show="flagText">蚊子<Icon type="ios-create-outline" size="24" color="black" @click="show" style="margin-left:10px"/></span>
                         <Form v-show="flagName" ref="formInline" label-position="left"	 :model="formInline" :rules="ruleInline" :label-width="50" inline>
                            <FormItem prop="user">
                                <Input type="text" v-model="formInline.user" placeholder="昵称">
                                </Input>
                            </FormItem>
                            
                            <FormItem>
                                <Button type="primary" @click="handleSubmit('formInline')">保存</Button>
                                <Button  @click="show">取消</Button>
                            </FormItem>
                        </Form>
                    </i-col>
                </Row>
                <Row>
                    <i-col span="4"  >性别</i-col>
                    <i-col span="18"><span  v-show="SexFlagText">{{sex}}<Icon type="ios-create-outline" size="24" color="black" @click="showSex" style="margin-left:10px"/></span></i-col>
                     <RadioGroup v-model="sex"  v-show="flagSex">
                        <Radio label="男"></Radio>
                        <Radio label="女"></Radio>
                        <Radio label="保密"></Radio>
                            <Button  @click="showSex" style="margin:0 15px">取消</Button>
                            <Button type="primary" on-change="getSex" @click="success();showSex()">保存</Button>
                    </RadioGroup>
                   
                </Row>
                <Row>
                    <i-col span="4">生日</i-col>
                    <i-col span="18">
                        <span v-show="DateFlagText">{{birthday}}<Icon type="ios-create-outline" size="24" color="black" @click="showDate" style="margin-left:10px"/></span></i-col>
                        <div class="dateBox" v-show="flagDate" >
                            <DatePicker @on-change="getBirthday"   v-model="birthday" type="date" format="yyyy-MM-dd"  placeholder="Select date" placement="bottom" style="width: 150px"></DatePicker>
                
                            <Button  @click="showDate" style="margin:0 15px">取消</Button>
                            <!-- <Button type="primary" @click="getBirthday">保存</Button> -->
                            <Button type="primary"  @click="showDate();success()">保存</Button>
                        </div>
                         
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
                    <i-col span="18"><a href="#" @click="modal1 = true">点击修改</a></i-col>
                    <Modal
                        v-model="modal1"
                        title="修改密码"
                        :mask-closable="false"
                        :footer-hide="true"
                        
                       >
                        <Form ref="formCustom" :model="formCustom"  :rules="ruleCustom" label-position="right" :label-width="100" >
                             <FormItem label="当前密码" prop="oldPasswd">
                                <Input type="password" v-model="formCustom.oldPasswd"></Input>
                            </FormItem>
                            <FormItem label="新密码" prop="passwd">
                                <Input type="password" v-model="formCustom.passwd"></Input>
                            </FormItem>
                            <FormItem label="重复密码" prop="passwdCheck">
                                <Input type="password" v-model="formCustom.passwdCheck"></Input>
                            </FormItem>
                            <FormItem label="验证码" prop="age">
                                <Input type="text" v-model="formCustom.age" number></Input>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
                                <Button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
                            </FormItem>
                        </Form>
                    </Modal>
                </Row>
                <Row>
                    <i-col span="4"  >第三方账号</i-col>
                    <i-col span="18">1999-66-66</i-col>
                </Row>
            
                <h2 style="border-top: 1px solid #e1e8ed;margin-right:30px;padding-top:30px;">开发者信息</h2>
                <Row>
                    <i-col span="4"  >开发者类型</i-col>
                    <i-col span="18">个人开发者</i-col>
                </Row>
                <Row>
                    <i-col span="4"  >开发者姓名</i-col>
                    <i-col span="18"><span v-show="UserFlagText">{{name}}<Icon type="ios-create-outline" size="24" color="black" @click="showName" style="margin-left:10px"/></span></i-col>
                    <div v-show="flagUser">
                        <Input v-model="name" placeholder="Enter something..." style="width: 300px" />
                        <Button  @click="showName" style="margin:0 15px">取消</Button>
                            <!-- <Button type="primary" @click="getBirthday">保存</Button> -->
                        <Button type="primary"  @click="showName();success()">保存</Button>
                    </div>
                </Row>
                <Row>
                    <i-col span="4"  >个人主页</i-col>
                    <i-col span="18"><span v-show="IndexFlagText">{{myIndex}}<Icon type="ios-create-outline" size="24" color="black" @click="showIndex" style="margin-left:10px"/></span></i-col>
                    <div v-show="flagIndex">
                        <Input v-model="myIndex" placeholder="Enter something..." style="width: 300px" />
                        <Button  @click="showIndex" style="margin:0 15px">取消</Button>
                            <!-- <Button type="primary" @click="getBirthday">保存</Button> -->
                        <Button type="primary"  @click="showIndex();success()">保存</Button>
                    </div>
                </Row>
                <Row>
                    <i-col span="4"  >个人简介</i-col>
                    <i-col span="18"><span v-show="IntroduceFlagText">{{myIntroduce}}<Icon type="ios-create-outline" size="24" color="black" @click="showIntroduce" style="margin-left:10px"/></span></i-col>
                    <div v-show="flagIntroduce">
                        <Input v-model="myIntroduce" placeholder="Enter something..." style="width: 300px" />
                        <Button  @click="showIntroduce" style="margin:0 15px">取消</Button>
                            <!-- <Button type="primary" @click="getBirthday">保存</Button> -->
                        <Button type="primary"  @click="showIntroduce();success()">保存</Button>
                    </div>
                </Row>
            </div>
        </i-col>
    </Row>
    </div>
</template>
<script>
    export default {
        data () {
            const validateOldPass= (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入当前密码！'));
                }
            };
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入新密码！'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次确认密码！'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('两次密码不一致！'));
                } else {
                    callback();
                }
            };
            const validateUserCheck= (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('昵称不能为空'));
                }
            };
            return {
                modal1: false,
                 flagName:false,
                 flagSex:false,
                 flagText:true,
                 SexFlagText:true,
                 DateFlagText:true,
                 flagDate:false,
                 flagUser:false,
                 UserFlagText:true,
                IntroduceFlagText:true,
                flagIntroduce:false,
                IndexFlagText:true,
                flagIndex:false,
                 sex:'未设置',
                 birthday:"未设置",
                 name:'蚊子',
                 myIndex:'未设置',
                 myIntroduce:'未设置',
                 formCustom: {
                    oldPasswd: '',
                    passwd: '',
                    passwdCheck: '',
                    age: '',
                   
                   
                },
                 ruleCustom: {
                     oldPasswd:[
                         { required:true, validator: validateOldPass, trigger: 'blur' }
                     ],
                    passwd: [
                        { required:true, validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { required:true, validator: validatePassCheck, trigger: 'blur' }
                    ],
                  
                },
                formInline:{
                    user: '',
                },
                ruleInline: {
                    user: [
                        {   validator: validateUserCheck, trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            // ok () {
            //     this.$Message.info('Clicked ok');
            // },
            show(){
                this.flagName=!this.flagName;
                this.flagText=!this.flagText;
            },
            showSex(){
                this.SexFlagText=!this.SexFlagText;
                this.flagSex=!this.flagSex;
            },
            showDate(){
                this.DateFlagText=!this.DateFlagText;
                this.flagDate=!this.flagDate;
            },
            getSex(value){
                this.sex=value;

            },
            getBirthday(date){
                this.birthday=date;       
            },
            showName(){
                this.flagUser=!this.flagUser;
                this.UserFlagText=!this.UserFlagText;
            },
            showIntroduce(){
                this.flagIntroduce=!this.flagIntroduce;
                this.IntroduceFlagText=!this.IntroduceFlagText;
            },
            showIndex(){
                this.flagIndex=!this.flagIndex;
                this.IndexFlagText=!this.IndexFlagText;
            },
             success () {
                this.$Message.success('This is a success tip');
                               

            },
            cancel () {
                this.$Message.info('Clicked cancel');
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('成功！');
                    } else {
                        this.$Message.error('失败！');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
           
        
        }
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
.ivu-form-inline .ivu-form-item{
    margin-top: 5px;
}
.ivu-form-item-content{
    margin-left: 0px!important;
}
.dateBox{
    width: 400px;
}
</style>

