<template>
  <div class="home">
    <h1>home</h1>
    <h2>无限滚动</h2>
    <router-link to="/infiniteScroll">infiniteScroll</router-link>
    <h2>水印</h2>
    <router-link to="/waterMarker">waterMarker</router-link>
    <h2>评分</h2>
    <router-link to="/rate">rate</router-link>
    <h2>计时器/定时器</h2>
    <router-link to="/timer">timer</router-link>
    <h2>折叠面板</h2>
    <router-link to="/collapse">collapse</router-link>
    <h2>音乐波形图</h2>
    <router-link to="/musicOscillogram">musicOscillogram</router-link>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 500px) and (max-width: 800px) {
  @import './index.scss'; 
}
// https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries 媒体查询！！！
@media (min-width: 700px) { 
  a {
    color: blue;
  }
}
</style>