<template>
	<div align="center" style="padding:20px 100px 20px 100px;">
        <div>
            <h1>고객 사례</h1>
            <h2>공공 분야에서 금융분야까지</h2>
        </div>
        <div style="display:flex; justify-content: center;">
            <v-card v-for="(client, index) in clients" :key="index" style="margin:20px; padding:20px; text-align: left; width:300px;">
                <v-row>
                    <div>
                        <div style="font-size:24px; font-weight: 700;">{{ client.title }}</div>
                        <div style="font-size:14px; opacity: 0.8;">{{ client.subTitle }}</div>
                    </div>
                    <v-spacer></v-spacer>
                    <v-chip outlined>{{ client.chip }}</v-chip>
                </v-row>
                <div style="margin-top:20px;">{{ client.case }}</div>
            </v-card>
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
            clients: [
                {
                    title: 'Toss 뱅킹',
                    subTitle: '애플리케이션',
                    chip: '헬스',
                    case: 'KB헬스케어는 그룹사 정책으로 데이터를 외국에 보내는 것에 제한이 있습니다. cloudIq는 국내 리전도 제공할 뿐 아니라 프라이빗 클라우드 내에 설치도 가능하여 선택하게 되었습니다.'
                },
                {
                    title: 'KB 금융',
                    subTitle: '애플리케이션',
                    chip: '교육',
                    case: '인프라 이슈부터 애플리케이션 문제까지 와탭 하나로 확인할 수 있으니깐 어디서 문제가 발생한건지 명확하게 판단할 수 있게 해줍니다.'
                },
                {
                    title: '부동산감정원',
                    subTitle: '애플리케이션',
                    chip: '공기업',
                    case: '국민이 이용하는 대민 서비스에는 모니터링이 필수 입니다. 서비스를 개선하고 품질을 향상시키기 위해 모니터링은 필수입니다.'
                },
            ]
		}
	},
	mounted() {
	},
	methods: {
	},
};
</script>

<style>

</style>

