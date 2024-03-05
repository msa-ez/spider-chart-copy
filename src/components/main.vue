<template>
	<div>
		<div style="padding:0px 30px 0px 30px;">
			<v-card-title class="text-center justify-center main-title">클라우드 네이티브 전환 가이드라인<br>(Beta)</v-card-title>
			<v-row justify="center">
				<v-col cols="6" md="4" lg="3">
					<v-img src="https://github.com/msa-ez/cloud-iq/assets/149130268/66649787-f394-49f9-8a72-8002997161c6" />
				</v-col>
			</v-row>
			<v-row class="ma-0 pa-0">
				<v-col cols="12" lg="3" md="3" sm="6" v-for="(step, index) in steps" :key="index">
					<v-card @click="goToStep(step.path)" class="card-box">
						<div>
							<h2 class="step-index">Step. {{ index + 1 }}</h2>
							<Icon :icon="step.icon" class="card-icon" />
							<h1 class="step-name">{{ step.name }}</h1>
							<div class="step-name-en">{{ step.name_en }}</div>
						</div>
					</v-card>
				</v-col>
				<v-col cols="12" lg="3" md="3" sm="6">
					<v-card @click="goToStep('/case-study')" class="card-box">
						<div>
							<Icon icon="fluent:briefcase-search-20-regular" class="card-icon" />
							<h1 class="step-name">전환 사례</h1>
							<div class="step-name-en">Case Study</div>
						</div>
					</v-card>
				</v-col>
			</v-row>
			<v-footer class="footer" style="background-color: transparent;">
				<v-row>
					<v-btn @click="goToStep('/all-guide')" text>전환가이드 전체 보기</v-btn>
					<v-divider vertical class="mx-2"></v-divider> 
					<v-btn text>About</v-btn>
				</v-row>
			</v-footer>
		</div>
	</div>
</template>

<script>
export default {
	components: {
	},
	computed: {
	},
	data() {
		return {
			steps: 
			[
				{
					name: "목표수준 설정",
					name_en: "Goal Setting",
					path: "/goal-setting",
					icon: "octicon:goal-24"
				},
				{
					name: "현 수준 평가",
					name_en: "Assessment",
					path: "/assessment",
					icon: "solar:checklist-minimalistic-outline"
				},
				{
					name: "전환 가이드",
					name_en: "Get the Guide",
					path: "/get-the-guide",
					icon: "cil:book"
				}
			]
		}
	},
	mounted() {
	},
	methods: {
		goToStep(path) {
			this.$router.push(path);
		},
	},
};
</script>

<style>
.main-title {
	font-size: 2.4rem;
	line-height: 1.5;
	font-weight: bold;
	color: #003669;
	text-align: center;
}
.card-box {
	padding:10px;
	height:100%;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.card-icon {
	width: 45px;
	height: 45px;
	padding: 5px;
	margin-top: 10px;
}
.card-box:hover {
	color: #fff;
	background-color: #003669;
	border: 1px solid #003669 !important;
}
.card-box:hover .card-icon {
	color: #222;
	border-radius: 30%;
	background-color: #fff;
	transition: all linear 0.3s 0s;
}
.step-name-en {
	font-size: 1.25rem; 
	margin-top: 10px;
}
.footer {
	position: fixed;
	bottom: 0;
	left: 0;
	margin-left: 5px;
}

@media only screen and (max-width:768px) {
	.main-title {
		font-size: 2rem;
		line-height: 1.2;
		font-weight: bold;
	}
	.footer {
		position: relative;
		margin-left: -20px;
	}
}
</style>

