<!-- <script setup lang="ts">
import type {Member} from "@/interfaces";
// 会員情報リストをステートとして用意
useState<Map<number, Member>>(
  "memberList",
  (): Map<number, Member> => {
    const memberListInit = new Map<number, Member>();
    memberListInit.set(1234, {id:1234, name:"suika", password:"asdfg321"});
    return memberListInit;
  }
)
</script> -->
<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
// const resetError = (error) => {
//   error.value = null;
// };

onMounted(() => {
  userStore.initStore()
}) 
</script>
<template>
  <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
  </div>
</template>