<template>
    <div class="mx-0 sm:mx-1 md:mx-4">
        <div class="bg-gray-600 rounded-lg h-56">
            <a :href="href"
                target="_blank">
                <img class="rounded-lg w-full h-full"
                        :src="src"
                        data-reactid="37"
                        onerror="this.src='img/aimaina.png'">
                </a>
        </div>
        <div class="text-left h-16">
            <h1 class="">{{song.name}}</h1>
            <p>{{author}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['song'],

    data() {
        return {
            href: {},
            src: {},
            author: {},
        }
    },

    mounted() {
        this.song.pvs.forEach((pv, index) => {
            if (pv.pvType == "Original"){
                this.href = pv.url
                this.src = pv.thumbUrl
                this.author = pv.author
                return
            }
        })
    }
}
</script>