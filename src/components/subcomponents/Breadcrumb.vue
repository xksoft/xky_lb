<template>
    <Breadcrumb>
        <BreadcrumbItem>个人中心</BreadcrumbItem>
        <!-- <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem> -->
        <BreadcrumbItem>{{ this.levelList }}</BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
    export default {
        data () {
            return {
                
            }
        },
       
        props: ['levelList'],

    }
</script>
