<template>
    <Breadcrumb >
        <BreadcrumbItem>首页</BreadcrumbItem>
        <BreadcrumbItem v-model="leveList" style="color: #999;font-weight: normal;font-size:14px;">{{leveList}}</BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
    export default {
        data () {
            return {
                leveList:null
            }
        },
       
        created() {
            // 初始化菜单
            this.getBreadcrumb()
        },
        watch: {
            // 监听路由变化 改变显示
            $route() {
                this.getBreadcrumb()
            },
        },
        methods: {
            getBreadcrumb(){
                this.leveList = this.$route.meta.title
        },
        }
    }
</script>
<style lang="less" scoped>
.ivu-breadcrumb-item-link{
    color: #999;
}
</style>
