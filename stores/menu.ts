interface MenuState {
    title: string;
    breadcrumbs: Breadcrumbs[];
    leftDrawerOpen: boolean;
}

interface Breadcrumbs {
    label: string;
    icon: string;
    href: string;
}

export const useMenuStore = defineStore("menu", {
    state: (): MenuState => ({
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
