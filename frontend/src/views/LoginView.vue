<template>
  <div class="w-1/3 h-2/6 bg-blue-tardis flex flex-col text-light-tardis rounded-xl items-center justify-center gap-7">
    <h2 class="text-2xl justify-self-start">Login</h2>
    <div class="flex flex-col w-full gap-3 items-center justify-start">
      <label className="input input-bordered flex items-center gap-2 w-11/12">
        Email
        <input v-model="email" type="text" className="grow"/>
      </label>
      <label className="input input-bordered flex items-center gap-2 w-11/12">
        <input v-model="password" type="password" placeholder="Password" className="grow"  />
      </label>
      <button className="btn self-end mr-3" @click="onLogin" >Login</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from './../service/authService'

const router = useRouter()
const email = ref("")
const password = ref("")

const onLogin = async () => {
  console.log(email, password)
  await login({email: email.value, password: password.value})
  router.push('/seasons')
}

</script>

<style scoped></style>