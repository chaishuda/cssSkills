import layout from "@/layout/index.vue";
import { createNameComponent } from "./createNode.ts";
export default [
  {
    path: "/",
    name: "layout",
    component: layout,
    meta: { title: "首页", noRole: true },
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        meta: { title: "首页", noRole: true },
        component: createNameComponent(() => import("@/views/dashboard.vue")),
      },
    ],
  },
];
