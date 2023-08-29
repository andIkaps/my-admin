<template>
    <q-form @submit="onResetPassword" class="tw-mt-10">
        <BasePassword
            v-model="form.newPassword"
            label="New Password"
            dense
            required
            is-regex
        />
        <BasePassword
            v-model="form.confirmPassword"
            label="Confirm Password"
            dense
            required
            is-regex
        />
        <q-btn
            unelevated
            label="Reset Password"
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
    newPassword: string;
    confirmPassword: string;
}

const authPageStore = useAuthPageStore();
const router = useRouter();

const form: IForm = reactive({
    newPassword: "",
    confirmPassword: "",
});

const onResetPassword = async () => {
    try {
        if (form.newPassword && form.confirmPassword) {
            router.push("/auth/login");
        }
    } catch (error) {
        console.log(error);
    }
};

onMounted(() => {
    authPageStore.title = "Reset Password";
    authPageStore.subtitle =
        "Use combination of upper and lower case letters, numbers, and symbols to create strong, hard-to-guess passwords.";
});
</script>

<style></style>
