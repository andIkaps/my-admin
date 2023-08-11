export const useMenuStore = defineStore("counter", {
    state: () => ({
        title: "",
        breadcrumbs: [],
        leftDrawerOpen: false,
    }),
    getters: {},
    actions: {},
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMenuStore, import.meta.hot));
}
