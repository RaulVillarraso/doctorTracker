<template>
  <label
    className="swap swap-flip text-9xl h-full bg-blue-tardis flex flex-col text-light-tardis rounded-xl items-center justify-center gap-7">
    <input type="checkbox" disabled :checked="toggle" />
    <div className="swap-off h-2/6 bg-blue-tardis flex flex-col text-light-tardis rounded-xl items-center justify-center gap-7
    absolute">
      <h2 className="text-2xl justify-self-start">Login</h2>
      <div className="flex flex-col w-full gap-3 items-center justify-start">
        <label className="input input-bordered flex items-center gap-2 w-11/12">
          Email
          <input v-model="email" type="text" className="grow" />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-11/12">
          <input v-model="password" type="password" placeholder="Password" className="grow" />
        </label>
        <div className="flex justify-between w-2/3">
          <button className="btn btn-outline" @click="handleForm">Register</button>
          <button className="btn self-end mr-3" @click="onLogin">Login</button>
        </div>
      </div>
    </div>
    <div
      className="swap-on h-2/6 bg-blue-tardis flex flex-col text-light-tardis rounded-xl items-center justify-center gap-7 absolute">
      <h2 className="text-2xl justify-self-start">Register</h2>
      <div className="flex flex-col w-full gap-3 items-center justify-start">
        <label className="input input-bordered flex items-center gap-2 w-11/12">
          Username
          <input v-model="username" type="text" className="grow" />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-11/12">
          Email
          <input v-model="email" type="text" className="grow" />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-11/12">
          <input v-model="password" type="password" placeholder="Password" className="grow" />
        </label>
        <div className="flex justify-between w-2/3">
          <button className="btn btn-outline" @click="handleForm">Login</button>
          <button className="btn self-end mr-3" @click="onSignup">Sign up</button>
        </div>
      </div>
    </div>
  </label>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login, signup } from './../service/authService'

const router = useRouter()
const username = ref("")
const email = ref("")
const password = ref("")
const toggle = ref(false)

const handleForm = () => {
  toggle.value = !toggle.value
}

const onLogin = async () => {
  await login({ 
    email: email.value, 
    password: password.value })
  router.push('/seasons')
}

const onSignup = async () => {
  await signup({ 
    username: username.value, 
    email: email.value , 
    password: password.value})
  router.push('/seasons')
}

</script>

<style scoped></style>