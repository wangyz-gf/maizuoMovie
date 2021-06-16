<template>
    <div>
        <ul>
            <li><router-link class="router" active-class="active" to="/film/nowplaying">正在热映</router-link></li>
            <li><router-link class="router" active-class="active" to="/film/comingsoon">即将上映</router-link></li>
        </ul>
    </div>
</template>
<style scoped>

ul{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
li{
    flex: 1;
}
.router{
    text-decoration: none;
    padding: 10px;
    box-sizing: border-box;
}
.active{
    color: red;
    border-bottom: 3px solid red;
}
</style>