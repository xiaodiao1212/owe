<template>
    <div class="content">
        <p>We can do Graphic Artist Design.</p>
        <p class="detail">
            用心做好每一个细节。
        </p>
        <!-- <div class="swiper">
            <swiper :options="swiperOption">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide>
                <swiper-slide>Slide 7</swiper-slide>
                <swiper-slide>Slide 8</swiper-slide>
                <swiper-slide>Slide 9</swiper-slide>
                <swiper-slide>Slide 10</swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div> -->
        <el-row v-for="(row, index) in rows" :key="index" class="row" :gutter="20">
            <el-col v-for="(item, index) in row" :key="index" :span="6">
                <div class="grid-content bg-purple">
                    <router-link class="a" to="/about">
                    <!-- <div> -->
                        <a :class="[item.pic]"></a>
                        <span>
                            {{item.detail}}
                        </span>
                    <!-- </div> -->
                        
                    </router-link>
                    
                </div>
            </el-col>
        </el-row>
        <!-- <el-row class="row" :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"><router-link class="a" to="/about"></router-link></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><router-link class="a" to="/about"></router-link></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><router-link class="a" to="/about"></router-link></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><router-link class="a" to="/about"></router-link></div></el-col>
        </el-row>
        <el-row class="row" :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"><router-link class="a" to="/about"></router-link></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><router-link class="a" to="/about"></router-link></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><router-link class="a" to="/about"></router-link></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><router-link class="a" to="/about"></router-link></div></el-col>
        </el-row> -->
    </div>
</template>
<script lang="ts" src="./Content.ts"></script>
<style lang="less" src="./Content.less" scoped></style>