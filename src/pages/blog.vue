<template>
  <Layout>
    <div class="space-4">
      <div class="container">
        <ul>
          <li v-for="{ node } in $static.allWordPressPost.edges" :key="node.id">
              <g-link :to="node.path">{{ node.title }}</g-link>
              <g-image :src="node.sourceUrl" width="650" height="400" fit="contain"/>
              <p>{{ node.excerpt }}</p>
          </li>
      </ul>
      </div>
    </div>
  </Layout>
</template>


<static-query>
{
  allWordPressPost{
		edges{
      node{
        title
        path
        excerpt
        content
      }
    }
  }
  allWordPressAttachment{
    edges{
      node{
        sourceUrl
      }
    }
  }
}

</static-query>
<script>
export default {
  metaInfo: {
    title: "About Us",
  },
};
</script>