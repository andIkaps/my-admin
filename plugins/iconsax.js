import { vsxIcon } from "vue-iconsax";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("vsxIcon", vsxIcon);
});
