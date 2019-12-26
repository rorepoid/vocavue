Vue.component("voca-image", {
	props: ['src'],
    template: `
            <div class="mx-0 sm:mx-1 md:mx-4">
                <div class="bg-gray-600 rounded-lg h-56">
                    <img class="rounded-lg w-full h-full"
                         :src="src.pvs[0].thumbUrl" 
                         data-reactid="37">
                </div>
                <div class="text-left h-16">
                    <p class="">Nico Nico Douga</p>
                    <sub>asas</sub>
                </div>
            </div>
    `,
})