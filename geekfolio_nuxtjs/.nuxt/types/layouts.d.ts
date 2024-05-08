import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default-light" | "default" | "preview" | "showcases-light" | "showcases"
declare module "/Users/linhankuan/Main_Files拷貝6test拷貝122/geekfolio_nuxtjs/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}