<template>
    <a-config-provider :theme="theme">
        <a-layout>
            <Sider :sideWidth="sideWidth" :routes="routes" />
            <a-layout>
                <HeaderComponent :sideWidth="sideWidth" />
                <Content />
            </a-layout>
        </a-layout>
    </a-config-provider>
</template>
<script setup lang="ts">
import Sider from "./Sider/index.vue";
import HeaderComponent from "./Header/index.vue";
import Content from "./Content/index.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const theme = {
    token: {
        colorPrimary: "#2775b6",
    },
};

const sideWidth = ref(256);
const router = useRouter();
const routes = computed(() => {
    return router.options.routes.find(route => route.name === 'layout')?.children || [];
});
</script>
<style lang="scss" scoped></style>
