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
        -webkit-text-size-adjust: 100%;
        -webkit-box-direction: normal;
        --bg-opacity: 1;
        --text-opacity: 1;
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        background-color: transparent;
        text-decoration: inherit;
        height: 3rem;
        width: 100%;
        -webkit-box-align: start;
        align-items: flex-start;
        border-color: #e2e8f0;
        color: #ffffff;
        display: inline-block;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
        grid-gap: normal;
        gap: normal;
        line-height: 24px;
        text-align: center;
    }
</style>
