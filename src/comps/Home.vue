<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h1>欢迎</h1>
                <h2>非常欢迎</h2>
                <button @click="goMenu" class="btn btn-success">开始选择</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        goMenu(){
            //跳转到上一级页面
            // this.$router.go(-1)

            //指定跳转地址
            // this.$router.replace('/menu')

            //指定路由名字
            // this.$router.replace({name:'menuLink'})

            //通过push跳转
            // this.$router.push("/menu")
            this.$router.push({name:'menuLink'})
        }
    }
}
</script>
<style>
#home{
    background: url('../../src/assets/timg.jpg');
    height: 85vh;
    padding: 10%;
}
h1,h2{
    margin: 6%;
}
.background{
    background: #eee;
    opacity: .8;
    max-width: 70vw;
    margin: 0 auto;
}
</style>
