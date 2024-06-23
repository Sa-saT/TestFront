<script setup>
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

let email = ref('')
let password = ref('')
let errors = ref([])

async function submitForm(){
    console.log('submitForm')

    errors.value = []
    
    await $fetch('http://127.0.0.1:8000/api/v1/token/login/',{
        method: 'POST',
        body: {
            username: email.value,
            password: password.value
        }
    })
    .then(data => {
        console.log('response', data.auth_token)

        userStore.setToken(data.auth_token, email.value)

        router.push({path: '/'})
    })
    .catch(error => {
        if (error.response){
            for (const property in error.response._data){
                errors.value.push(`${property}: ${error.response._data[property]}`)
            }
            console.log(JSON.stringify(error.response))
        } else if (error.message) {
            errors.value.push('Something went wrong. Please try again')

            console.log(JSON.stringify(error))
        }
    })
}
</script>
<template>
   <!-- <form>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Username</span>
 Using form state modifiers, the classes can be identical for every input
    <input type="text" value="tbone" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
  </label>
</form>
<table>
  <tbody>
    {#each people as person} -->
      <!-- Use a white background for odd rows, and slate-50 for even rows -->
      <!-- <tr class="odd:bg-white even:bg-slate-50">
        <td>{person.name}</td>
        <td>{person.title}</td>
        <td>{person.email}</td>
      </tr>
    {/each}
  </tbody>
</table> -->

<div class="py-10 px-6">
  <div class="max-w-sm mx-auto py-10 px-6 bg-gray-100 rounded-xl">
    <h1 class="mb-6 text-2xl">Log in</h1>
    <form v-on:submit.prevent="submitForm">
      <input v-model="email" type="email" placeholder="Your email address..." class="w-full mb-4 py-4 px-6 rounded-xl"></input>
      <input v-model="password" type="password" placeholder="Your password..." class="w-full mb-4 py-4 px-6 rounded-xl"></input>
      
      <div
                    v-if="errors.length"
                    class="mb-6 py-4 px-6 bg-rose-400 text-white rounded-xl"
                >
                    <p
                        v-for="error in errors"
                        v-bind:key="error">
                        {{ error }}
                    </p>
                </div>
      
      <button class="py-4 px-6 bg-teal-700 text-white rounded-xl">Submit</button>
    </form>
    
  </div>
</div>

</template>
  