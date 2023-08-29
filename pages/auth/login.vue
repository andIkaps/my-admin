<template>
    <q-form @submit="onLogin" class="tw-mt-10">
        <BaseTextField
            v-model="form.username"
            label="Username"
            type="text"
            align="top"
            required
            dense
        />
        <BasePassword v-model="form.password" label="Password" dense required />
        <q-btn
            unelevated
            label="Login"
            type="submit"
            color="primary"
            class="tw-w-full tw-capitalize tw-mt-3"
        />
    </q-form>

    <section class="tw-w-full tw-flex tw-gap-3 tw-my-10 tw-items-center">
        <q-separator class="tw-flex-1" />
        <span>OR</span>
        <q-separator class="tw-flex-1" />
    </section>

    <section>
        <BaseButton
            label="Continue with Google"
            icon="Google"
            icon-position="left"
            color="white"
            class="tw-w-full !tw-border-gray-300"
            style="border: 1px solid"
        />
    </section>

    <section class="tw-my-10 tw-space-y-3">
        <p class="tw-block tw-text-center">
            You don't have an account yet?
            <NuxtLink
                to="/auth/register"
                class="tw-font-semibold tw-text-primary"
            >
                Register
            </NuxtLink>
        </p>
        <NuxtLink
            to="/auth/forgot-password"
            class="tw-block tw-text-center tw-font-medium tw-text-primary"
        >
            Forgot Password?
        </NuxtLink>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "auth",
});

interface IFormLogin {
    username: string;
    password: string;
}
const authPageStore = useAuthPageStore();

const form: IFormLogin = reactive({
    username: "",
    password: "",
});

const onLogin = async () => {
    try {
        console.log(form);
    } catch (error) {
        console.log(error);
    }
};

onMounted(() => {
    authPageStore.title =
        "Welcome Back to <span class='tw-text-primary'>My Admin</span>";
    authPageStore.subtitle = "Sign in to your account bellow.";
});
</script>

<style></style>
