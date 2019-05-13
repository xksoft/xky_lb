<template>
    <Tabs value="name1">
        <TabPane :label="label" name="name1">
            <div class="table">
                <Table height="500" border :columns="columns" :data="datalist">
                    <template slot-scope="{ row }" slot="id">
                        <strong>{{ row.id }}</strong>
                    </template>
                    <template slot-scope="{ row, index }" slot="action">
                        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
                        <Button type="error" size="small" @click="remove(index)">Delete</Button>
                    </template>
                </Table>
            </div>
            <div class="page">
                <Page :total="100" show-sizer />
            </div>
        </TabPane>
        <TabPane :label="label1" name="name2"></TabPane>
        <TabPane :label="label2" name="name3"></TabPane>
    </Tabs>
</template>

<script>
    export default {
        data () {
            return {
                label: (h) => {
                    return h('div', [
                        h('span', '全部帖子'),
                        h('Badge', {
                            props: {
                                count: 3
                            }
                        })
                    ])
                },
                 label1: (h) => {
                    return h('div', [
                        h('span', '推荐帖子'),
                        h('Badge', {
                            props: {
                                count: 0
                            }
                        })
                    ])
                },
                 label2: (h) => {
                    return h('div', [
                        h('span', '置顶帖子'),
                        h('Badge', {
                            props: {
                                count: 5
                            }
                        })
                    ])
                },
                
                columns: [
                    {
                        title: 'ID',
                        slot: 'id',
                        width: 80
                    },
                    {
                        title: '内容',
                        key: 'content',
                    },
                    {
                        title: 'UID',
                        key: 'uid',
                        width: 80
                    },
                    {
                        title: '发布时间',
                        key: 'date',
                        width: 150
                    },
                    {
                        title: '状态',
                        key: 'state',
                        width: 150
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                datalist: [
                    {
                        id: '1',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        uid:18,
                        date:'2019-5-10',
                        state:'未审核',
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        id: '2',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        uid:18,
                        date:'2019-5-10',
                        state:'未审核',
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        id: '3',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        uid:18,
                        date:'2019-5-10',
                        state:'未审核',
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        id: '4',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        uid:18,
                        date:'2019-5-10',
                        state:'未审核',
                        address: 'Ottawa No. 2 Lake Park'
                    },
                    {
                        id: '3',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        uid:18,
                        date:'2019-5-10',
                        state:'未审核',
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        id: '3',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        uid:18,
                        date:'2019-5-10',
                        state:'未审核',
                        address: 'Sydney No. 1 Lake Park'
                    },
                     {
                        id: '3',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        uid:18,
                        date:'2019-5-10',
                        state:'未审核',
                        address: 'Sydney No. 1 Lake Park'
                    },
                     {
                        id: '3',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        uid:18,
                        date:'2019-5-10',
                        state:'未审核',
                        address: 'Sydney No. 1 Lake Park'
                    },
                     {
                        id: '3',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        uid:18,
                        date:'2019-5-10',
                        state:'未审核',
                        address: 'Sydney No. 1 Lake Park'
                    },
                     {
                        id: '3',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        uid:18,
                        date:'2019-5-10',
                        state:'未审核',
                        address: 'Sydney No. 1 Lake Park'
                    },
                ]
               
            }
        },
        methods: {
            get_topic_no_blackhole_all(){
                    this.axios.post('/api/xiake/topic/get_topic_no_blackhole_all').then((response) =>  {
                        // if (response.status===200) {
                            console.log(response)
                        // }
                    }).catch(function (error) {
                        console.log(error);
                    });
                },
        },
        created(){
            this.get_topic_no_blackhole_all()
        }
    }
</script>

<style scoped>
    .page{
        width: 100%;
        margin-top: 20px;
    }
    .ivu-select{
        vertical-align:top!important;
    }
    .table{
        width: 100%;
    }
</style>