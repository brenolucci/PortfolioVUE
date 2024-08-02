import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Particles from '@tsparticles/vue3'
import type { Engine } from '@tsparticles/engine'
import { loadFull } from 'tsparticles'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Particles, {
    init: async (engine: Engine) => {
    await loadFull(engine);  
    },
})
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options:{
            darkModeSelector: 'dark',
        } 
    }
});

app.mount('#app')

