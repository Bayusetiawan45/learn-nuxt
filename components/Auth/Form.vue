<template>
  <div class="w-2/3">
    <div class="pt-5 space-y-4">
      <UIInput v-model="data.email" label="Email" placeholder="Email" />
      <UIInput
        v-model="data.password"
        label="Password"
        placeholder="Password"
        type="password"
      />
      <div>
        <UIButton liquid size="lg" @click="handleLogin">Login</UIButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const { loginService } = useAuth()

const data = reactive({
  email: '',
  password: '',
});

const handleLogin = async (): Promise<void> => {
  const res = await loginService(data);
  setTimeout(() => {
    const token = res.result?.user?.stsTokenManager?.accessToken;
    sessionStorage.setItem('access_token', token);
  }, 500);
};

// const handleRegister = async (): Promise<void> => {
//   await registerService({
//     email: 'bayu1@gmail.com',
//     password: 'bayu123'
//   })
// }

</script>
