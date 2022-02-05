<template>
	<a-layout-sider>
		<a-menu
			theme="dark"
			mode="vertical"
			v-model:selectedKeys="array"
			:style="{ lineHeight: '64px' }"
		>
			<a-menu-item key="/">
				<router-link to="/">О нас</router-link>
			</a-menu-item>
			<a-menu-item key="/store">
				<router-link to="/store">Store</router-link>
			</a-menu-item>
			<a-menu-item key="/idk">
				<router-link to="/idk">IDK</router-link>
			</a-menu-item>
		</a-menu>
	</a-layout-sider>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const array = ref(['/'])
watch(route, () => {
	array.value = [route.path]
})
</script>

<style lang="scss" scoped></style>
