export let menu = {
    menusList: [
        
        {
            title: '个人中心',
            name: 'home',
            id: '002',
            path: '/',
            children: [
                {
                    title: '账号管理',
                    name: 'info',
                    path: '/info',
                    // icon: 'ios-contact',
                    id: '003'
                },
                {
                    title: '身份认证',
                    name: 'permission',
                    path: '/permission',
                    // icon: 'ios-contact',
                    id: '004'
                },
                {
                    title: '账号权限',
                    name: 'userRoot',
                    path: '/userRoot',
                    // icon: 'ios-contact',
                    id: '005'
                },
                // {
                //     title: '上传图片',
                //     name: 'upload',
                //     id: '009',
                //     path: '/upload',
                // }
                
            ]
        },
        {
            title: '帖子管理',
            name: 'topic',
            id: '006',
            path: '/topic',
            children:[
                {
                    title: '帖子审核',
                    name: 'topic_verify',
                    path: '/topic/topic_verify',
                    // icon: 'ios-contact',
                    id: '007'
                },
                {
                    title: '全部帖子',
                    name: 'topic_settop',
                    path: '/topic/topic_settop',
                    // icon: 'ios-contact',
                    id: '008'
                },
            ]
        },
        
    ]
}

