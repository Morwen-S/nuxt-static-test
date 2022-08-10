<template>
    <div>
        <button @click="count++">
            {{ count }}
        </button>
    </div>
</template>
<script>

import { defineComponent } from '@vue/composition-api';

export default defineComponent({
    setup() {
        const count = ref(0);

        return { count };
    },
});
</script>

<style>
button {
    background: red;
}
</style>
