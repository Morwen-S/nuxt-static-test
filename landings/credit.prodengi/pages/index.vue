<template>
    <div>
        MAIN PAGE
        flghkdjf gkdfhgkd fhgkjdhf gkjdhfkgj dkfjg dkjfh
        {{ count }}
        <OwnButton />
        <button @click="count++">
            ADD
        </button>
        <NuxtLink to="/thank-you">
            About page
        </NuxtLink>
    </div>
</template>
<script>

import { defineComponent } from '@vue/composition-api';
import OwnButton from '@/components/OwnButton.vue';

export default defineComponent({
    components: {
        OwnButton,
    },
    setup() {
        const count = ref(0);

        return { count };
    },
});
</script>
