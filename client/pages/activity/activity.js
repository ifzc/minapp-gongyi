
Page({
    data:{
        tabs:['全部','类型','区域'],
        currentTabsIndex:0,
        activitiesArr:[{
            src:'../../images/activity-details-pic.jpg',
            imgs:['../../images/photo-pic.jpg','../../images/photo-pic.jpg','../../images/photo-pic.jpg']
        }]
    },
    onLoad:function(){

    },
    _loadData:function(){

    }, 
    onPullDownRefresh:function(){

    },
    onShareAppMessage:function(){
        return {
            title:'城志协',
            path:'pages/home/home'
        }
    }
})