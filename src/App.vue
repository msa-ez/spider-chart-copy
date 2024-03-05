<template>
	<v-app>
		<div style="height: 100vh;">
			<v-app-bar elevation="0" outlined left style="height:60px;">
				<img @click="goHome()" 
					style="cursor: pointer; align-items: left; width:90px;" 
					src="https://github.com/msa-ez/cloud-iq/assets/149130268/66649787-f394-49f9-8a72-8002997161c6" 
				/>
				<v-spacer></v-spacer>
				<v-card-title>프로필 : {{ selectedProfile }}</v-card-title>
				<v-tooltip bottom>
					<template v-slot:activator="{ on }">
						<v-btn @click="addRegisteredProfile()"
							icon
							v-on="on"
						>
							<Icon icon="carbon:user-profile" width="30" height="30" />
						</v-btn>
					</template>
					<span>프로필 관리</span>
				</v-tooltip>
			</v-app-bar>
			<v-main>
				<router-view style="height: calc(100vh - 64px);"></router-view>
			</v-main>
		</div>
	</v-app>
</template>

<script>
export default {
	components: {
	},
	computed: {
		selectedProfile() {
            return this.$store.state.selectedProfile;
        }
	},
	data() {
		return {
		}
	},
	created() {
	},
	mounted() {
		document.title = 'cloudiq';
	},
	methods: {
		goHome() {
			if (this.$router.currentRoute.path !== '/') {
				this.$router.push('/');
			}
		},
		addRegisteredProfile() {
			this.$eventBus.$emit('editProfile');
		},
	},
};
</script>

<style>

</style>

