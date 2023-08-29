<template>
    <q-form @submit="onSubmitLogin" class="tw-mt-10">
        <BaseTextField
            v-model="form.username"
            label="Full Name"
            type="text"
            align="top"
            required
            dense
        />
        <BaseTextField
            v-model="form.username"
            label="Username"
            type="text"
            align="top"
            required
            dense
        />
        <BaseTextField
            v-model="form.username"
            label="Email"
            type="email"
            align="top"
            required
            dense
        />
        <BasePassword v-model="form.password" label="Password" dense required />
        <q-btn
            unelevated
            label="Register"
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

    <p class="tw-my-10 tw-block tw-text-center">
        Already have an account?
        <NuxtLink to="/auth/login" class="tw-font-semibold tw-text-primary">
            Login
        </NuxtLink>
    </p>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";

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

const onSubmitLogin = async () => {
    try {
        console.log(form);
    } catch (error) {
        console.log(error);
    }
};

onMounted(() => {
    authPageStore.title = `Register to <span class="tw-text-primary">My Admin</span>`;
    authPageStore.subtitle = "Join Us and Experience Something Extraordinary.";
});
</script>

<style></style>
