export const useApi = (request: string, options: any) => {
    return useFetch(request, {
        lazy: true,
        server: false,
        baseURL: "https://dummyjson.com",
        headers: {
            Authorization: `Bearer `,
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        ...options,
    });
};
