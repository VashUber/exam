<template>
	<div>
		<a-form class="form">
			<a-form-item
				v-for="(field, index) in fields"
				:label="data[field].title"
				name="name"
				:key="index"
			>
				<a-select
					v-if="data[field].type === 'select'"
					v-model:value="reactiveObj[field]"
				>
					<a-select-option v-for="items in data[field].values" :key="items">
						{{ items }}
					</a-select-option>
				</a-select>
				<a-input v-else type="string" v-model:value="reactiveObj[field]" />
			</a-form-item>
			<a-form-item :wrapper-col="{ span: 14, offset: 4 }">
				<a-button type="primary" @click="submit">Создать</a-button>
			</a-form-item>
		</a-form>

		<a-row :gutter="[16, 16]" class="items">
			<a-col :span="8" v-for="item in items" :key="item.id">
				<a-card :title="item.name" style="width: 300px">
					<template #extra></template>
					<p>Вес: {{ item.weight }} кг</p>
					<p>Цвет: {{ item.color }}</p>
					<p>Пол: {{ item.sex }}</p>
				</a-card>
			</a-col>
		</a-row>
	</div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, computed, reactive } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const data = computed(() => store.getters.getformPageForm)
const fields = computed(() => Object.keys(data.value))
const items = computed(() => store.getters.getformPageItems)
const reactiveObj = reactive({})

const submit = () => {
	axios.post('https://demo-api.vsdev.space/api/farm/baby', reactiveObj)
	store.dispatch('setfromPageItems')
	fields.value.forEach(elem => {
		reactiveObj[elem] = ''
	})
}

onMounted(async () => {
	await store.dispatch('setformPageForm')
	store.dispatch('setfromPageItems')
})
</script>

<style lang="scss" scoped>
.form {
	width: 600px;
}
</style>
