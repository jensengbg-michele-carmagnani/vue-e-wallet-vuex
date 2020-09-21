<template>
  <section id="top">
    <h1>{{titlePage}}</h1>
  </section>
</template>

<script>
export default {
  name: "Top",
  props: {
    cardInfo: Object,
  },
  computed: {
    titlePage() {
      return this.$route.meta.title;
    },
  },
};
</script>

<style>
#top{
  display: flex;
  justify-content: center;
  align-items:center ;
  
  margin-bottom: 1rem;
}
</style>
