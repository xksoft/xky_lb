<template>
    <Menu  theme="dark" width="auto"  accordion :style="{background: '#001529'}"
    :active-name="activeName" 
    :open-names="opens" 
     @on-open-change="onOpenChange"
     ref="menu"> 
        <template v-for="item in menus">
            <Submenu :key="item.id" v-if="item.children" :name="item.name" :style="{background: '#001529'}">
                <template slot="title">
                    <Icon type="person"></Icon>
                    {{item.title}}
                </template>
                <Menu-item  v-for="sub in item.children"  :key="sub.id" :to="sub.path" :name="sub.name">{{sub.title}}</Menu-item>
            </Submenu>
            <Menu-item :key="item.id" v-else :style="{background: '#001529'}" name="item.name">{{item.title}}</Menu-item>
         </template>
    </Menu>
</template>
<script>
import {menu} from '../../data/menu'
    export default {
        data () {
            return {
                activeName: '',
                menus:[],
                opens:[]
            }
        },
        created(){
            this.activeName = this.$route.name
            this.menus = menu.menusList
            // console.log(this.menus)
            this.menus.forEach((item) => {
                if (item.children) {
                    this.opens.push(item.name)
                }
            })
            // console.log(this.opens)

        },
         watch: {
            // 监听路由变化 改变显示
            $route(newValue) {
                if (!this.opens.includes(newValue.name)) {
                    this.opens.push(newValue.name)
                }
                // 异步更新dom
                this.$nextTick(() => {
                    this.activeName = newValue.name
                    this.$refs.menu.updateActiveName()
                    this.$refs.menu.updateOpened()
                })
            }
        },
        methods: {
            // 监听并改变菜单合集
            onOpenChange(value) {
                this.opens = value
            },
        },

    }
</script>
