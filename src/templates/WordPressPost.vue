<template>
    <Layout>
        <div class="space-4">
            <div class="container">
                <h1 v-html="$page.wordPressPost.title" />
                <div v-html="$page.wordPressPost.content" />
            </div>
        </div>
  </Layout>
</template>


<page-query>
    query post ($path: String!){
        wordPressPost (path: $path){
            title
            content
        }
    }
</page-query>


<script>
    export default {
        metaInfo() {
            return {
                title: this.$page.wordPressPost.title
            };
        }
    };
</script>