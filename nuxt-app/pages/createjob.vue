<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

onMounted(() => {
    if (!userStore.user.isAuthenticated) {
        router.push('/login')
    }
})

interface JobCategory {
    id: number
    title: string
}

let { data: jobCategories, error: categoriesError } = await useFetch<JobCategory[]>('http://127.0.0.1:8000/api/v1/jobs/categories/')

const category = ref<string>('')
const title = ref<string>('')
const description = ref<string>('')
const position_salary = ref<string>('')
const position_location = ref<string>('')
const company_name = ref<string>('')
const company_location = ref<string>('')
const company_email = ref<string>('')
const errors = ref<string[]>([])

async function submitForm(): Promise<void> {
    console.log('submitForm')

    errors.value = []

    const fields = [
        { value: category.value, message: 'You must select a category' },
        { value: title.value, message: 'The title field is missing' },
        { value: description.value, message: 'The description field is missing' },
        { value: position_salary.value, message: 'The position salary field is missing' },
        { value: position_location.value, message: 'The position location field is missing' },
        { value: company_name.value, message: 'The company name field is missing' },
        { value: company_location.value, message: 'The company location field is missing' },
        { value: company_email.value, message: 'The company email field is missing' }
    ]

    fields.forEach(field => {
        if (field.value === '') {
            errors.value.push(field.message)
        }
    })

    if (errors.value.length === 0) {
        await $fetch('http://127.0.0.1:8000/api/v1/jobs/create/', {
            method: 'POST',
            headers: {
                'Authorization': 'token ' + userStore.user.token,
                'Content-Type': 'application/json'
            },
            body: {
                category: category.value,
                title: title.value,
                description: description.value,
                position_salary: position_salary.value,
                position_location: position_location.value,
                company_name: company_name.value,
                company_location: company_location.value,
                company_email: company_email.value
            }
        }).then(response => {
            // throw createError('test_error')
            // throw showError({
            //     statusCode: 400,
            //     statusMessage: 'Bad Request',
            //     message: 'エラー発生',
            // });
            console.log('response', response)
            router.push({ path: '/myjobs' })
        }).catch(error => {
            if (error.response) {
                for (const property in error.response._data) {
                    errors.value.push(`${property}: ${error.response._data[property]}`)
                }
                console.log(JSON.stringify(error.response))
            } else {
                errors.value.push('Something went wrong. Please try again')
                console.log(JSON.stringify(error))
            }
        })
    }
}
</script>

<template>
    <div>
        <div class="py-10 px-6">
            <h1 class="mb-6 text-2xl">Create Job</h1>
            <form v-on:submit.prevent="submitForm" class="space-y-4">
                <div>
                    <label>Category</label>
                    <select v-model="category" class="w-full mt-2 p-4 rounded-xl bg-gray-100">
                        <option value="">--Select category--</option>
                        <option
                            v-for="category in jobCategories"
                            v-bind:key="category.id"
                            v-bind:value="category.id"
                            >{{ category.title }}</option>
                    </select>
                </div>
                <div>
                    <label>Title</label>
                    <input v-model="title" type="text" class="w-full mt-2 p-4 rounded-xl bg-gray-100">
                </div>
                <div>
                    <label>Description</label>
                    <textarea v-model="description" class="w-full mt-2 p-4 rounded-xl bg-gray-100"></textarea>
                </div>
                <div>
                    <label>Salary</label>
                    <input v-model="position_salary" type="text" class="w-full mt-2 p-4 rounded-xl bg-gray-100">
                </div>
                <div>
                    <label>Location</label>
                    <input v-model="position_location" type="text" class="w-full mt-2 p-4 rounded-xl bg-gray-100">
                </div>
                <div>
                    <label>Company name</label>
                    <input v-model="company_name" type="text" class="w-full mt-2 p-4 rounded-xl bg-gray-100">
                </div>
                <div>
                    <label>Company location</label>
                    <input v-model="company_location" type="text" class="w-full mt-2 p-4 rounded-xl bg-gray-100">
                </div>
                <div>
                    <label>Company Email</label>
                    <input v-model="company_email" type="text" class="w-full mt-2 p-4 rounded-xl bg-gray-100">
                </div>
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