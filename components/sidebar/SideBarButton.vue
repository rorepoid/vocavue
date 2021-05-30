<template>
  <a :href="option.link">{{ option.text }}</a>
</template>

<script>
export default {
    props: ['option']
}
</script>

<style scoped>
    a {
        height: 3rem;
        width: 100%;
        display: inline-block;
        text-align: center;
    }
</style>
