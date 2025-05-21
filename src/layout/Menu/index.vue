<template>
    <a-menu type="primary" mode="inline" :inlineCollapsed="collapsed" :items="items"
        @click="handleClick">
    </a-menu>
</template>

<script setup lang="ts">
import { ref, computed ,h} from 'vue';
import type { MenuProps } from 'ant-design-vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    menuItems: {
        type: Array,
        default: () => []
    },
    collapsed: {
        type: Boolean,
        default: false
    }
});

const router = useRouter();

const items = computed(() => {
    return props.menuItems.map(route => ({
        ...route,
        icon: () => h(route?.icon||'')
    }));
});

const collapsed = computed(() => {
    return props.collapsed;
});
const handleClick: MenuProps['onClick'] = e => {
    router.push(e.key);
};
</script>

<style scoped lang="scss">
</style>