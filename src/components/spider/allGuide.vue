<template>
    <div>
        <v-row v-for="(guideItem, guideIndex) in guide" :key="guideIndex">
            <v-col 
                v-for="(level, levelIndex) in guideItem.levels" 
                :key="levelIndex"
                cols="12" sm="6" md="3"
            >
                <v-card :to="level.path"
                    :style="checkPathMatch(level.path)"
                    style="padding:10px;"
                >
                    <div>
                        <div style="font-size:20px; font-weight:700;">{{ guideItem.name }}</div>
                        <div>Level {{ level.level }}</div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    components: {
    },
    data () {
        return {
            guide: [
                {
                    name: '애플리케이션 관점',
                    name_en: 'application',
                    levels: [
                        { level: 1, path: '/application/level1' },
                        { level: 2, path: '/application/level2' },
                        { level: 3, path: '/application/level3' },
                        { level: 4, path: '/application/level4' }
                    ]
                },
                {
					name: '데이터베이스 관점',
					name_en: 'database',
                    levels: [
                        { level: 1, path: '/database/level1' },
                        { level: 2, path: '/database/level2' },
                        { level: 3, path: '/database/level3' },
                        { level: 4, path: '/database/level4' }
                    ]
                },
                {
					name: '인프라스트럭처 관점',
					name_en: 'infrastructure',
                    levels: [
                        { level: 1, path: '/infrastructure/level1' },
                        { level: 2, path: '/infrastructure/level2' },
                        { level: 3, path: '/infrastructure/level3' },
                        { level: 4, path: '/infrastructure/level4' }
                    ]
                },
                {
					name: '인프라스트럭처 관점',
					name_en: 'infrastructure',
                    levels: [
                        { level: 1, path: '/infrastructure/level1' },
                        { level: 2, path: '/infrastructure/level2' },
                        { level: 3, path: '/infrastructure/level3' },
                        { level: 4, path: '/infrastructure/level4' }
                    ]
                },
                {
					name: '개발 관점',
					name_en: 'development',
                    levels: [
                        { level: 1, path: '/development/level1' },
                        { level: 2, path: '/development/level2' },
                        { level: 3, path: '/development/level3' },
                        { level: 4, path: '/development/level4' }
                    ]
                },
                {
					name: '보안 관점',
					name_en: 'security',
                    levels: [
                        { level: 1, path: '/security/level1' },
                        { level: 2, path: '/security/level2' },
                        { level: 3, path: '/security/level3' },
                        { level: 4, path: '/security/level4' }
                    ]
                },
                {
					name: '확장성 관점',
					name_en: 'scalability',
                    levels: [
                        { level: 1, path: '/scalability/level1' },
                        { level: 2, path: '/scalability/level2' },
                        { level: 3, path: '/scalability/level3' },
                        { level: 4, path: '/scalability/level4' }
                    ]
                },
            ],
            registeredProfiles: null,
            registeredProfileGoalPath: [],
            goalLevels: 0,
        }
    },
    computed: {
        selectedProfile() {
            return this.$store.state.selectedProfile;
        }
    },
    created() {
        this.loadGoalPath();
    },
    methods: {
        loadGoalPath() {
            const profilesData = localStorage.getItem('registeredProfiles');
            if (profilesData) {
                this.registeredProfiles = JSON.parse(profilesData);
                // Vuex에서 가져온 selectedProfile과 일치하는 프로필을 찾습니다.
                const matchedProfile = this.registeredProfiles.find(profile => profile.name === this.selectedProfile);
                if (matchedProfile && matchedProfile.perspectives) {
                    this.registeredProfileGoalPath = matchedProfile.perspectives.map(perspective => {
                        return `/${perspective.name_en}/level${perspective.goalLevel}`;
                    });
                }
                this.isDataLoaded = true;
            }
        },
        checkPathMatch(path) {
            if (this.registeredProfileGoalPath.includes(path)) {
                // 조건을 만족하는 경우 사용자 정의 스타일 객체 반환
                return {
                    backgroundColor: 'rgba(192, 75, 192, 1)', // 여기에 원하는 배경색을 지정
                    color: 'white' // 여기에 원하는 글자색을 지정
                };
            } else
            return {
                backgroundColor: '', // 기본 배경색
                color: '' // 기본 글자색
            };
        },
    },
}
</script>

<style>
</style>