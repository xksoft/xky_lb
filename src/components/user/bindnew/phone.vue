<template>
<div class="container">
    <Steps :current="current">
                <Step title="选择验证方式"></Step>
                <Step title="绑定手机"></Step>
                <Step title="绑定成功"></Step>
    </Steps>
    <div class="form_box">
        <Form :model="formItem" :label-width="100" v-if="current===0">
            
            <FormItem label="选择验证方式">
                <RadioGroup v-model="formItem.radio">
                    <Radio label="phone">通过绑定手机进行验证</Radio>
                    </br>
                    <span style="color: #8395ab; display: inline-block; margin-left: 25px;">15612321312312</span>
                    </br>

                    <Radio label="mail">通过绑定邮箱进行验证</Radio>
                    </br>
                    <span  style="color: #8395ab; display: inline-block; margin-left: 25px;">123123123@163.com</span>

                </RadioGroup>
            </FormItem> 
            <FormItem label="验证码">
                <Row >
                <Col span="10" > <Input v-model="formItem.input" placeholder="验证码"></Input> </Col>
                <Col span="13" offset="1"><Button type="primary" long>获取验证码</Button></Col>
                </Row>
                        

            </FormItem>
            <FormItem>
                <Button type="primary" long @click="next()">下一步</Button>
            
            </FormItem>

        </Form>
        <Form :model="formItem" :label-width="100" v-if="current===1">
        
            <FormItem label="手机号">
                <Input v-model="formItem.input" placeholder="请输入您的新手机号"></Input>
            </FormItem>
            <FormItem label="验证码">
                <Row >
                <Col span="10" > <Input v-model="formItem.input" placeholder="验证码"></Input> </Col>
                <Col span="13" offset="1"><Button type="primary" long>获取验证码</Button></Col>
                </Row>
                        

            </FormItem>
            <FormItem>
                <Button type="primary" long @click="next()">下一步</Button>
            
            </FormItem>

        </Form>
        <Form :model="formItem" :label-width="100" v-if="current===2" >
        
           
                <Row >
                    <h1 style="margin-left:50px">修改绑定成功</h1>
                </Row>
                <!-- <Icon type="md-desktop" size="80"/> -->
               <Icon type="ios-checkmark-circle-outline" size="240"/>

            
            <FormItem>
                <Button type="primary"  @click="goInfo" style=" margin-left: -30px;">返回账号管理</Button>
            
            </FormItem>

        </Form>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            current: 0,
            formItem: {
                    
                radio: 'phone',

                   
                }
        }
    },
    methods:{
        next () {
            if (this.current == 3) {
                this.current = 3;
            } else {
                this.current += 1;
            }
        },  
        goInfo(){
            this.$router.replace('/info','phone')
        }
    }
}
</script>
<style lang="less" scoped>

.container{
    background: white;
    padding: 80px 0;
    .ivu-steps{
        padding: 30px 200px;
        border-bottom: 1px solid #e4eaf0;

    }
    .form_box{
        width: 540px;
        padding: 0 120px 0 0;
        margin: 80px auto;
        font-size: 14px;
        color: #7c7e7d;
    }
}
</style>
