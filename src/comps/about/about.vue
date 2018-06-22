<template>
    <div>
        <div class="row mb-5">
            <!-- 导航 -->
            <div class="col-4">
                <div class="list-group mb-5">
                    <router-link tag="li" class="nav-link" :to="{name:'histLink'}">
                        <a class="list-group-item list-group-item-action">历史订单</a>
                    </router-link>
                     <router-link tag="li" class="nav-link" :to="{name:'comLink'}">
                        <a class="list-group-item list-group-item-action">联系我们</a>
                    </router-link>
                     <router-link tag="li" class="nav-link" :to="{name:'orderLink'}">
                        <a class="list-group-item list-group-item-action">文档</a>
                    </router-link>
                     <router-link tag="li" class="nav-link" :to="{name:'deliLink'}">
                        <a class="list-group-item list-group-item-action">快递信息</a>
                    </router-link>
                </div>
            </div>
            <!-- 导航内容 -->
            <div class="col-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
