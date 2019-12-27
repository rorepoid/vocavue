Vue.component("voca-image", {
	props: ['src'],
    template: `
            <div class="mx-0 sm:mx-1 md:mx-4">
                <div class="bg-gray-600 rounded-lg h-56">
                    <a :href="src.pvs[1].url"
                    	target="_blank">
	                    <img class="rounded-lg w-full h-full"
	                         :src="src.pvs[1].thumbUrl" 
	                         data-reactid="37"
	                         onerror="this.src='img/aimaina.png'">
                     </a>
                </div>
                <div class="text-left h-16">
                    <p class="">Nico Nico Douga</p>
                    <sub>asas</sub>
                </div>
            </div>
    `,
})