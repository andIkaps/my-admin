<template>
    <q-form @submit="onSubmitEmail" class="tw-mt-10">
        <BaseTextField
            v-model="form.email"
            label="Email"
            type="email"
            align="top"
            required
            dense
        />
        <q-btn
            unelevated
            label="Send Email Verification"
            type="submit"
            color="primary"
            class="tw-w-full tw-capitalize tw-mt-3"
        />
    </q-form>

    <section class="tw-my-10 tw-space-y-3">
        <p class="tw-block tw-text-center">
            Remember your account?
            <NuxtLink to="/auth/login" class="tw-font-semibold tw-text-primary">
                Login
            </NuxtLink>
        </p>
    </section>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";

definePageMeta({
    layout: "auth",
});

interface IForm {
    email: string;
}

const authPageStore = useAuthPageStore();
const router = useRouter();

const form: IForm = reactive({
    email: "",
});

const onSubmitEmail = async () => {
    try {
        if (form.email) {
            router.push("/auth/reset-password");
        }
    } catch (error) {
        console.log(error);
    }
};

onMounted(() => {
    authPageStore.title = "Forgot password?";
    authPageStore.subtitle = "Enter your registered email in the system!";
});
</script>

<style></style>
