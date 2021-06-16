<template>
    <div>
        <ul>
            <li>
            <router-link to="/film" active-class="kerwinactive" class="router">
            <i class="iconfont icon-dianying"></i>
            <span>电影</span>
            </router-link>
            </li>
            <li>
            <router-link to="/cinema" active-class="kerwinactive" class="router">
            <i class="iconfont icon-yingyuan"></i>
            <span>影院</span>
            </router-link>
            </li>
            <li>
            <router-link to="/center" active-class="kerwinactive" class="router">
            <i class="iconfont icon-wode"></i>
            <span>我的</span>
            </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
div{
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 50px;
    text-align: center;
    background-color: white;
    z-index: 999;
}
    ul{
        list-style: none;
        display: flex;
        height: 100%;
    }
    li{
        flex: 1;
    }
    .router{
        height: 100%;
        text-decoration: none;
        color: #000;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
     .kerwinactive{
        color: red;
    }
    .iconfont{
        font-size: 16px;
    }
</style>