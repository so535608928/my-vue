<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img class="mx-auto d-block" src="../../src/assets/logo.png" alt="">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="text"class="form-control" v-model="email">
                        </div>
                         <div class="form-group">
                            <label for="password">密码</label>
                            <input type="text"class="form-control" v-model="password">
                        </div>
                         <div class="form-group">
                            <label for="passwords">确认密码</label>
                            <input type="text"class="form-control" v-model="passwords">
                        </div>
                        <button class="btn btn-block btn-success">注册</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            email:'',
            password:'',
            passwords:''
        }
    },
    methods:{
        onSubmit(){
            
        }
    }
}
</script>
