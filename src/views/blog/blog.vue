<template>
    <div class="blog">
        <h1>Blogs From Blogger</h1>
        <div v-for="(value, index) in dat.items" :key="index">
            <h4><a :href="value.url">{{ value.title }}</a> </h4>
            <div v-html=value.content></div>
            <br />
        </div>
        <h1><a id="rewindButton" title="First page" v-on:click="getData()"> &lt;&lt; &nbsp;&nbsp;&nbsp;&nbsp;</a> <a id="nextButton" title="Next page"
                v-on:click="getData(dat.nextPageToken)">
                > </a></h1>
    </div>
</template>
  
<script src="./blog.ts" lang="ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style src="./blog.scss" scoped lang="scss">
</style> -->
