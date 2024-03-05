<template>
	<div>
	</div>
</template>
  
<script>

export default {
    name: "SLABase.vue",
	mixins: [
	],
	props: {
	},
    comments: {
    },
    data () {
        return {
            slaResult: {
                percentage: '',
                cloudStatus: '',
                count: 0,
                time: '',
                conversionText: '',
                conversionMethod: '',
            },
        }
    },
	created() {
	},
	watch: {
    },
    methods: {
		getSLAPercentage(selectedProfile) {
            let percentage = '';
            let time = '';
            for (let topic of selectedProfile.topics) {
                const slaQuestion = topic.questions.find(q => q.title === '[정보시스템 등급]');
                if (slaQuestion) {
                    switch (slaQuestion.value) {
                        case 0:
                            percentage = '99.5%';
                            time = '43시간 48분'
                            break;
                        case 1:
                            percentage = '99.9%';
                            time = '8시간 45분'
                            break;
                        case 2:
                            percentage = '99.95%';
                            time = '4시간 12분'
                            break;
                        default:
                            percentage = '99.99%';
                            time = '52분'
                            break;
                    }
                    break; // 질문을 찾으면 루프를 종료합니다.
                }
            }

            this.slaResult.percentage = percentage;
            this.slaResult.time = time

            // 클라우드 상태 평가 로직
            let count = 0;
            this.selectedProfile.topics.forEach(topic => {
                count += topic.questions.filter(question => question.value >= 3).length;
            });

            if (count >= 5) {
                this.slaResult.conversionGoal = 'native'
                this.slaResult.conversionMethod = 'reArchitect'
                this.slaResult.cloudStatus = 'Cloud Native';
                this.slaResult.conversionText = '기존 시스템을 대폭 수정하여 클라우드 네이티브 기능의 이점을 활용할 수 있도록 하는 것입니다. 아무래도 클라우드 마이그레이션 방법들 중에서 가장 난이도가 높은 방법입니다.'
            } else if (count >= 3) {
                this.slaResult.conversionGoal = 'optimized'
                this.slaResult.conversionMethod = 'rePlatform'
                this.slaResult.cloudStatus = 'Cloud Optimized';
                this.slaResult.conversionText = '이는 기존의 시스템 환경에서 OS나 웹/WAS/DB 등과 같은 미들웨어 환경을 일부 변경해서 이전하는 방식입니다.'
            } else if (count === 2) {
                this.slaResult.conversionGoal = 'ready'
                this.slaResult.conversionMethod = 'reHost'
                this.slaResult.cloudStatus = 'Cloud Ready';
                this.slaResult.conversionText = '이를 다른 말로 ‘Rift and Shift’라고 부르기도 합니다. 번역하면 들어서 옮긴다는 의미입니다. 기존의 시스템에서 별다른 수정 없이 환경만 클라우드로 이전하는 것을 말합니다. 클라우드 마이그레이션 타입 중에서 가장 쉬운 방법이라고 볼 수 있지만, 클라우드 제공 업체에서 제공하는 다양한 기능들을 활용하지 못한다는 단점이 있을 수 있습니다.'
            } else {
                this.slaResult.conversionGoal = 'ready'
                this.slaResult.conversionMethod = 'reHost'
                this.slaResult.cloudStatus = '기존 시스템 유지';
                this.slaResult.conversionText = '클라우드로 옮기거나 하지 않고 현재 상태로 유지하는 것을 말합니다. 기존의 시스템 중에는 기존 거버넌스, 컴플라이언스, 보안 등의 이유로 기존대로 유지하는 것이 적합할 경우도 많이 있습니다. 이 부분도 클라우드 마이그레이션 타입에 포함될 필요는 없다고 생각되지만, 클라우드 마이그레이션 계획 수립 시 정리가 필요한 부분이기에 포함된 것이라는 생각이 듭니다. 그리고 이 경우에는 추후 전체적인 준비가 된 후에 클라우드 마이그레이션을 수행하게 될 수도 있습니다.';
            }

            this.slaResult.count = count
        },
	}
}
</script>
  
<style>
</style>
  
  