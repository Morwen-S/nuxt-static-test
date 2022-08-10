<template>
    <div>
        MAIN PAGE
        <p>Some content</p>
        Counter: {{ count }}
        <button @click="count++">
            ADD COUNT
        </button>
        <p>Common components for all landings:</p>
        <OwnButton />
        <br>
        <NuxtLink to="/thank-you">
            To Thank You page
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
