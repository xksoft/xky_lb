<template>
    <div class="container"> 
            
            <Steps :current="current">
                <Step title="选择认证类型"></Step>
                <Step title="填写认证信息"></Step>
                <Step title="提交认证成功"></Step>
            </Steps>
        <Row v-if="current===0">
            <Col span="11">
                <Card >
                    <p slot="title" style="text-align:center">个人用户</p>
                    <p>适用于公司技术选型期这是个text蚊子凑字数适用于公司技术选型期这是个</p>
                    <p>text蚊子凑字数适用于公司技术选型期这是个text蚊子凑字数适用于公司技术选型期这是个text蚊子凑字数适用于公司技术选型期这是个text蚊子凑字数</p>
                        
                    </br> 
                    <Button type="primary" long @click="next">下一步</Button>
                    <!-- <Button type="primary" long @click="last">上一步</Button> -->

                </Card>
            </Col>
            <Col span="11" offset="2">
                <Card>
                    <p slot="title">企业用户</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    </br>
                    <Button type="primary" long @click="next">下一步</Button>

                </Card>
            </Col>
        </Row>
        <Row v-else-if="current===1" style="margin-top:50px">
            <Col span="10" offset="4">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
                <FormItem label="开发者姓名" prop="name">
                    <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
                </FormItem>
                <FormItem label="身份证账号" prop="idCard">
                    <Input v-model="formValidate.idCard" placeholder="请输入身份证号码"></Input>
                </FormItem>

                <FormItem style="text-align:center;">
                    <Button type="primary" @click="handleSubmit('formValidate')">下一步</Button>
                    <Button type="primary" style="margin-left: 8px" @click="last">上一步</Button>
                </FormItem>
            </Form>
            </Col>
        </Row>
        <Row v-else>
            <Card style="width:320px;margin:50px auto">
                <div style="text-align:center">
                    <h3>侠客云提醒您，请您再次确认信息无误后点击完成。谢谢。</h3>
                </div>
            </Card>

            <div class="btn" style="width:200px;margin:50px auto">
                 <Button type="primary" @click="success(true);next()">完成</Button>
            
                 <Button type="primary"  @click="last" style="margin-left:15px">上一步</Button>
            </div>
               
          
               
           
        </Row>

    </div>
</template>


   
<script>
    export default {
        data () {
            // 身份证正则
            const idCardPass = (rule, value, callback) => {
                var reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
                // let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
                if (value === '') {
                    callback(new Error('身份证号码不能为空'));
                } else if (!reg.test(value)){
                    callback(new Error('请输入正确的身份证号'));
                } else {
                    callback();
                }
            };
            return {
                current: 0,
                formValidate: {
                    name: '',
                    idCard: '',
                   
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '名字不能为空', trigger: 'blur' }
                    ],
                   
                    idCard: [
                        { required: true,  validator: idCardPass, trigger: "blur" }
                    ]
                }
            
                
            }
        },
        methods: {
            next () {
                if (this.current == 3) {
                    this.current = 3;
                } else {
                    this.current += 1;
                }
            },
            last(){
                if (this.current == 0) {
                    this.current =0
                }else{
                    this.current -=1;
                }
            },
           
             handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        // this.$Message.success('Success!');
                        return this.current += 1;
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
             success () {
                this.$Message.success('认证成功');
            },
        }
    }
</script>
<style lang="less" scoped>
    .container{
        margin:100px 200px 200px 200px;
    // text-align: center;
    } 
    .ivu-row{
        margin-top: 50px;
        // text-align: center;
    } 
    .demo-split{
        height: 200px;
        border: 1px solid #dcdee2;
    }
    .demo-split-pane{
        padding: 10px;
    }
    .ivu-notice-title{
        margin-left: 50px!important;
    }
    .ivu-notice-icon{
        margin-top: 3px;
    }
</style>