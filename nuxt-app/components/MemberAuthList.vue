<script setup lang="ts">
import type {Member} from "@/interfaces";

// Propsインターフェースの定義
interface Props{
    id: number;
}

const props = defineProps<Props>();

const memberList = useState<Map<number, Member>>("memberList");

const member = memberList.value.get(props.id) as Member;
</script>

<template>
    <section class="box">
        <h4>{{ member.name }}さんの情報</h4>
        <dl>
            <dt>ID</dt>
            <dd>{{ id }}</dd>
        </dl>
        <h2>hello</h2>
    </section>
</template>

<style scoped>
.box {
    border: green 1px solid;
    margin: 10px;
}
</style>