<template>
    <a-layout-sider :style="siderStyle" :width="sideWitdh" v-model:collapsed="state.collapsed" :collapsible="true">
        <div id="logo"><a href="/">Logo</a></div>
        <Menu :menuItems="menuItems" :collapsed="state.collapsed" />
    </a-layout-sider>
</template>

<script setup lang="ts">
import { reactive, h, computed } from 'vue';
import type { MenuProps } from 'ant-design-vue';
import { HomeOutlined } from '@ant-design/icons-vue';
import Menu from '../Menu/index.vue';
import type { CSSProperties } from "vue";
import { useRouter } from 'vue-router';

const props = defineProps({
    sideWidth: {
        type: Number,
        default: 256
    },
    routes: {
        type: Array,
        default: () => []
    }
});

const router = useRouter();

const sideWitdh = computed(() => {
    return props.sideWidth;
})

const siderStyle: CSSProperties = {
    textAlign: "left",
    lineHeight: "120px",
    backgroundColor: "#fff",
    minHeight: "100vh",
    boxShadow: "2px 0 8px 0 rgba(29,35,41,.05)",
};

const state = reactive({
    collapsed: false,
});

const menuItems = computed(() => {
    return props.routes.map(route => ({
        key: route.path,
        icon: () => h(HomeOutlined),
        label: route.meta?.title || route.name,
        title: route.meta?.title || route.name,
    }));
});

</script>

<style scoped>
#logo {
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #333;
}
</style>