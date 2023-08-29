interface AuthPageState {
    title: string;
    subtitle: string;
}

export const useAuthPageStore = defineStore("auth page", {
    state: (): AuthPageState => ({
        title: "",
        subtitle: "",
    }),
    getters: {},
    actions: {},
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthPageStore, import.meta.hot));
}
