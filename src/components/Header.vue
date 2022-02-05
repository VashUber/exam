<template>
	<a-layout-header class="header">
		<div class="header__logo">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				aria-hidden="true"
				role="img"
				width="40"
				height="40"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 15 15"
			>
				<path
					d="M8 7L5 5L2 7L1 9v4h2v-2h4v2h2V9zM6 9H4V7h2v2zm8 4h-3V3.5a1.5 1.5 0 0 1 3 0V13z"
					fill="white"
				/>
			</svg>
			<span class="header__title">Фермерский роддом</span>
		</div>
	</a-layout-header>
</template>

<style lang="scss" scoped>
.header {
	color: #fff;

	&__logo {
		display: flex;
		align-items: center;
	}

	&__title {
		margin-left: 20px;
	}
}
</style>
