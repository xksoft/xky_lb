export let menu = {
    menusList: [
        // {
        //     title: '个人中心',
        //     name: 'home',
        //     path: '/home',
        //     icon: 'md-home',
        //     id: '001'
        // },
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
            ]
        },
        {
            title: '账单',
            name: 'wqeqw',
            id: '006',
            path: '/',
        }
      
    ]
}

