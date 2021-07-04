<template>
  <a :href="option.link">{{ option.text }}</a>
</template>

<script>
export default {
  props: ["option"],
};
</script>

<style scoped>
a {
  max-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 1em;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  text-decoration: none;
  color: #ffffff;
}
</style>
