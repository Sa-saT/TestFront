<script setup lang="ts">
import type {Member} from "@/interfaces";

definePageMeta({
	layout: "member"
});

const router = useRouter();
const memberList = useState<Map<number, Member>>("memberList");
const member: Member =reactive(
	{
		id: 0,
		name: "",
		password: "",
	}
);
const onAdd = (): void => {
	memberList.value.set(member.id, member);
	router.push({name: "member-memberList"});
};
</script>

<template>
	<nav id="breadcrumbs">
		<ul>
			<li><NuxtLink v-bind:to="{name: 'index'}">TOP</NuxtLink></li>
			<li><NuxtLink v-bind:to="{name: 'member-memberList'}">会員リスト</NuxtLink></li>
			<li>会員情報追加</li>
		</ul>
	</nav>
	<section>
		<h2>会員情報追加</h2>
		<p>
			情報を入力し、登録ボタンをクリックしてください。
		</p>
		<form v-on:submit.prevent="onAdd">
			<dl>
				<dt>
					<label for="addId">ID&nbsp;</label>
				</dt>
				<dd>
					<input type="number" id="addId" v-model.number="member.id" required>
				</dd>
				<dt>
					<label for="addName">名前&nbsp;</label>
				</dt>
				<dd>
					<input type="text" id="addName" v-model="member.name" required>
				</dd>
			</dl>
			<button type="submit">登録</button>
		</form>
	</section>
</template>
