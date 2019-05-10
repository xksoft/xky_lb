<template>
    <Tabs value="name1">
        <TabPane :label="label" name="name1">
            <div class="table">
                <Table min-height="700" border :columns="columns" :data="datalist">
                    <template slot-scope="{ row }" slot="id">
                        <strong>{{ row.id }}</strong>
                    </template>
                    <template slot="toview">
                        <Button type="primary" size="small" style="margin-right: 5px">前台查看</Button>
                    </template>
                    <template  slot="action">
                        <Button type="primary" size="small" style="margin-right: 5px">通过审核</Button>
                        <Button type="error" size="small">丢入黑洞</Button>
                    </template>
                </Table>
            </div>
            <div class="page">
                <Page :total="100" show-sizer />
            </div>
        </TabPane>
        <TabPane :label="label1" name="name2">
            <div class="table">
                <Table min-height="700" border :columns="reply" :data="replylist">
                    <template slot-scope="{ row }" slot="id">
                        <strong>{{ row.id }}</strong>
                    </template>
                    <template slot="action">
                        <Button type="primary" size="small" style="margin-right: 5px" >通过审核</Button>
                        <Button type="error" size="small">丢入黑洞</Button>
                    </template>
                </Table>
            </div>
            <div class="page">
                <Page :total="100" show-sizer />
            </div>
        </TabPane>
        <TabPane :label="label2" name="name3">
            <div class="table">
                <Table min-height="700" border :columns="post" :data="postlist">
                    <template slot-scope="{ row }" slot="id">
                        <strong>{{ row.id }}</strong>
                    </template>
                     <template slot="toview">
                        <Button type="primary" size="small" style="margin-right: 5px">前台查看</Button>
                    </template>
                    <template slot="action">
                        <Button type="primary" size="small" style="margin-right: 5px" >通过审核</Button>
                        <Button type="error" size="small">丢入黑洞</Button>
                    </template>
                </Table>
            </div>
            <div class="page">
                <Page :total="100" show-sizer />
            </div>
        </TabPane>
        <TabPane :label="label3" name="name4">
            <div class="table">
                <Table min-height="700" border :columns="blackhole" :data="blackholelist">
                    <template slot-scope="{ row }" slot="id">
                        <strong>{{ row.id }}</strong>
                    </template>
                     <template slot="toview">
                        <Button type="primary" size="small" style="margin-right: 5px">前台查看</Button>
                    </template>
                    <template slot="action">
                        <Button type="error" size="small">重置审核</Button>
                    </template>
                </Table>
            </div>
            <div class="page">
                <Page :total="100" show-sizer />
            </div>
        </TabPane>
    </Tabs>
</template>

<script>
    export default {
        data () {
            return {
                label: (h) => {
                    return h('div', [
                        h('span', '未审核帖子'),
                        h('Badge', {
                            props: {
                                count: 3
                            }
                        })
                    ])
                },
                 label1: (h) => {
                    return h('div', [
                        h('span', '回复'),
                        h('Badge', {
                            props: {
                                count: 0
                            }
                        })
                    ])
                },
                 label2: (h) => {
                    return h('div', [
                        h('span', '黑洞里的帖子'),
                        h('Badge', {
                            props: {
                                count: 5
                            }
                        })
                    ])
                },
                 label3: (h) => {
                    return h('div', [
                        h('span', '黑洞里的回复'),
                        h('Badge', {
                            props: {
                                count: 0
                            }
                        })
                    ])
                },
                // 未审核帖子
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
                        title: '查看',
                        slot: 'toview',
                        width: 150,
                        align: 'center'
                    },
                    {
                        title: '状态',
                        key: 'state',
                        width: 150
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 200,
                        align: 'center'
                    }
                ],
                // 未审核帖子
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
                ],
                // 回复
                reply: [
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
                        width: 200,
                        align: 'center'
                    }
                ],
                // 回复
                replylist: [
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
                ],
                // 黑洞里的帖子
                post: [
                    {
                        title: 'ID',
                        slot: 'id',
                        width: 80
                    },
                    {
                        title: '标题',
                        key: 'title',
                        width:150
                    },
                    {
                        title: '内容',
                        key: 'content',
                    },
                    {
                        title: '作者',
                        key: 'author',
                        width: 150
                    },
                    {
                        title: '发布时间',
                        key: 'date',
                        width: 150
                    },
                    {
                        title: '查看',
                        slot: 'toview',
                        width: 150,
                        align: 'center'
                    },
                    {
                        title: '状态',
                        key: 'state',
                        width: 150
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 200,
                        align: 'center'
                    }
                ],
                // 黑洞里的帖子
                postlist: [
                    {
                        id: '1',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        title:18,
                        author:'陈玉霞',
                        date:'2019-5-10',
                        state:'未审核'
                    },
                    {
                        id: '2',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        title:18,
                        author:'陈玉霞',
                        date:'2019-5-10',
                        state:'未审核'
                    },
                    {
                        id: '3',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        title:18,
                        author:'陈玉霞',
                        date:'2019-5-10',
                        state:'未审核'
                    },
                    {
                        id: '4',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        title:18,
                        author:'陈玉霞',
                        date:'2019-5-10',
                        state:'未审核'
                    },
                    {
                        id: '3',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        title:18,
                        author:'陈玉霞',
                        date:'2019-5-10',
                        state:'未审核'
                    },
                    {
                        id: '3',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        title:18,
                        author:'陈玉霞',
                        date:'2019-5-10',
                        state:'未审核'
                    },
                     {
                        id: '3',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        title:18,
                        author:'陈玉霞',
                        date:'2019-5-10',
                        state:'未审核'
                    },
                    {
                        id: '3',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        title:18,
                        author:'陈玉霞',
                        date:'2019-5-10',
                        state:'未审核'
                    },
                     {
                        id: '3',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        title:18,
                        author:'陈玉霞',
                        date:'2019-5-10',
                        state:'未审核'
                    },
                     {
                        id: '3',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        title:18,
                        author:'陈玉霞',
                        date:'2019-5-10',
                        state:'未审核'
                    },
                ],
                // 黑洞里的回复
                blackhole: [
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
                        width: 200,
                        align: 'center'
                    }
                ],
                blackholelist: [
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
                        id: '4',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        uid:18,
                        date:'2019-5-10',
                        state:'未审核',
                        address: 'Ottawa No. 2 Lake Park'
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
                        id: '4',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        uid:18,
                        date:'2019-5-10',
                        state:'未审核',
                        address: 'Ottawa No. 2 Lake Park'
                    },
                    {
                        id: '4',
                        content: '我的也会，只有一张照片，19台发送有10台出现发送失败',
                        uid:18,
                        date:'2019-5-10',
                        state:'未审核',
                        address: 'Ottawa No. 2 Lake Park'
                    },
                ]
               
            }
        }
    }
</script>

<style>
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