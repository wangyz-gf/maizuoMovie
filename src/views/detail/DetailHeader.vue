<template>
    <div>
        {{title}}
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:''
        }
    }
}
</script>
<style scoped>
div{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: white;
}
</style>