<template>
    <div>
        <v-tabs v-model="tab" fixed-tabs>
            <!-- 새로운 고정 탭 추가 -->
            <v-tab class="tab-title" key="fixed-tab">
                검토결과
            </v-tab>
            <!-- 기존 v-for를 사용한 탭들 -->
            <v-tab class="tab-title" v-for="item in items" :key="item.tab">
                {{ item.tab }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" class="guide-box">
            <!-- 새로운 고정 탭 컨텐츠 -->
            <v-tab-item key="fixed-tab-content">
                <v-card flat style="padding:20px;">
                    <!-- 외부 컨테이너 div 추가 -->
                    <div class="img-box-wrap">
                        <div class="conversion-img-box">
                            <div>
                                <h3>ㆍ목표 성숙도 모델</h3>
                                <img v-if="slaResult.conversionGoal === 'ready'" src="../../../../src/image/conversionGoal/01ready.png" />
                                <img v-if="slaResult.conversionGoal === 'optimized'" src="../../../../src/image/conversionGoal/02optimized.png" />
                                <img v-if="slaResult.conversionGoal === 'native'" src="../../../../src/image/conversionGoal/03native.png" />
                                <div style="text-align: center;">
                                    <div>"서비스에 대한 클라우드 네이티브 적합성 검토결과,<br>
                                    <span style="font-weight: 700; color:orange;">{{ slaResult.count }}</span>개 이상 항목에서 적합성 조건을 충족하여 <span style="font-weight: 700; color:orange;">{{ slaResult.cloudStatus }}</span> 도입 필요로 검토됨"</div>
                                    <div>"정보시스템 등급에 따른 SLA 수준은 <span style="font-weight: 700; color:orange;">{{ slaResult.percentage }}</span>로,<br>
                                    </span>년 허용가능 다운타임 <span style="font-weight: 700; color:orange;">약 {{ slaResult.time }}</span>정도"</div>
                                </div>
                            </div>
                            <br>
                            <div>
                                <h3>ㆍ전환 및 모더나이즈 방법론</h3>
                                <img v-if="slaResult.conversionMethod === 'reHost'" src="../../../../src/image/conversionMethod/02rehost.png" />
                                <img v-if="slaResult.conversionMethod === 'rePlatform'" src="../../../../src/image/conversionMethod/04replatform.png" />
                                <img v-if="slaResult.conversionMethod === 'reArchitect'" src="../../../../src/image/conversionMethod/07rearchitect.png" />
                                <div style="margin:0 auto;">
                                    <div>{{ slaResult.conversionText }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="reference-img-box">
                            <h3>ㆍ참조 아키텍처</h3>
                            
                            <!-- Frontend Images -->
                            <img v-if="frontEnd.micro" src="../../../../src/image/referenceArchitecture/mic-frontend.png" />
                            <img v-if="frontEnd.monolith" src="../../../../src/image/referenceArchitecture/mono-frontend.png" />

                            <!-- Gateway Image -->
                            <img  v-if="gateway" src="../../../../src/image/referenceArchitecture/api.png" />

                            <!-- Inner Architecture Images -->
                            <img  v-else-if="serviceType.monolith" src="../../../../src/image/referenceArchitecture/inner1.png" />
                            <img  v-else-if="serviceType.mini" src="../../../../src/image/referenceArchitecture/inner2.png" />
                            <img  v-else-if="serviceType.micro" src="../../../../src/image/referenceArchitecture/inner3.png" />
                            <img  v-if="serviceType.sidecar" src="../../../../src/image/referenceArchitecture/inner4.png" />

                            <!-- Messaging Channel Image -->
                            <img  v-if="messagingChannel" src="../../../../src/image/referenceArchitecture/Messaging.png" />

                            <!-- Infrastructure Images -->
                            <img  v-if="infra.kubernetes" src="../../../../src/image/referenceArchitecture/Kubernetes.png" />
                            <img  v-else-if="infra.virtualMachine" src="../../../../src/image/referenceArchitecture/vm.png" />
                            <img  v-else-if="infra.bareMetal" src="../../../../src/image/referenceArchitecture/bare.png" />
                        </div>
                    </div>
                </v-card>
            </v-tab-item>
            <!-- 기존 v-for를 사용한 탭 컨텐츠들 -->
            <v-tab-item v-for="item in items" :key="item.tab">
                <v-card flat style="padding:20px;">
                    <div v-if="goalLevels[item.tab_en] > 0 && Object.keys(markdownContentFolders).length > 0"
                        v-html="markdownContentFolders[item.tab_en][goalLevels[item.tab_en]]">
                    </div>
                    <div v-else>
                        전환목표가 없습니다.
                    </div>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import axios from 'axios';
import marked from 'marked';
import SLABase from './SLABase.vue'

export default {
    name: "GetTheGuide",
    mixins: [
        SLABase
    ],
    components: {
    },
    props: {
        selectedProfile: null
    },
    data () {
        return {
            frontEnd: {
                monolith: false,
                micro: false,
            },
            gateway: false,
            serviceType: {
                monolith: false,
                mini: false,
                micro: false,
                sidecar: false,
            },
            messagingChannel: false,
            infra: {
                kubernetes: false,
                virtualMachine: false,
                bareMetal: false,
            },
            items: [
                {
                    tab: '애플리케이션 영역',
                    tab_en: 'application',
                },
                { 
                    tab: '데이터베이스 영역',
                    tab_en: 'database',
                },
                { 
                    tab: '인프라스트럭처 영역',
                    tab_en: 'infrastructure',
                },
                { 
                    tab: '개발 영역',
                    tab_en: 'development',
                },
                { 
                    tab: '보안 영역',
                    tab_en: "security",
                },
                { 
                    tab: '확장성 영역',
                    tab_en: "scalability",
                },
                { 
                    tab: '가시성 영역',
                    tab_en: "visibility",
                },
            ],
            tab: 0,
            markdownContentFolders: {},
            profilePerspectives: [],
            goalLevels: {},
            contents: [],
        }
    },
    created() {
        this.loadProfilePerspectives();
        this.checkReferenceArchitecture();
        this.getSLAPercentage(this.selectedProfile);
    },
    watch: {
        selectedProfile: {
            handler(){
                this.markdownContentFolders = {}
                this.loadProfilePerspectives();
                this.checkReferenceArchitecture();
                this.getSLAPercentage(this.selectedProfile);
            },
            deep:true
        },
        tab(newVal) {
            // 고정 탭 선택시 라우트 변경
            if (newVal === 0) {
                this.$router.push(`/get-the-guide/review-result`);
                return;
            }

            // 기존 탭들에 대한 처리
            const tabName = this.items[newVal - 1].tab_en; // 인덱스 조정
            console.log(tabName)
            this.selectedProfile.perspectives.forEach(p => {
                if (p.name_en === tabName) {
                    this.$router.push(`/get-the-guide/${tabName}/level${p.goalLevel}`);
                }
            });
        }
    },
    methods: {
        checkReferenceArchitecture() {
            const swArchitecture = this.selectedProfile.perspectives.find(p => p.name_en === 'application');
            const decomposition = this.selectedProfile.perspectives.find(p => p.name_en === 'development');
            const dataPerspective = this.selectedProfile.perspectives.find(p => p.name_en === 'database');
            const infraArchitecture = this.selectedProfile.perspectives.find(p => p.name_en === 'scalability');

            // Frontend 조건 설정
            this.frontEnd.micro = swArchitecture && swArchitecture.goalLevel === 4;
            this.frontEnd.monolith = swArchitecture && swArchitecture.goalLevel < 4;

            // Gateway 조건 설정
            this.gateway = (decomposition && decomposition.goalLevel >= 2) || (dataPerspective && dataPerspective.goalLevel >= 2);

            // Inner Architecture 조건 설정
            this.serviceType.monolith = dataPerspective && dataPerspective.goalLevel <= 1;
            this.serviceType.mini = dataPerspective && dataPerspective.goalLevel === 2;
            this.serviceType.micro = dataPerspective && dataPerspective.goalLevel === 3;
            if (dataPerspective && dataPerspective.goalLevel >= 3 && swArchitecture && swArchitecture.goalLevel === 4) {
                this.serviceType.sidecar = true
            }

            // Messaging Channel 조건 설정
            this.messagingChannel = (decomposition && decomposition.goalLevel == 4) || (dataPerspective && dataPerspective.goalLevel == 4);

            // Infra 조건 설정
            this.infra.kubernetes = infraArchitecture && infraArchitecture.goalLevel >= 3;
            this.infra.virtualMachine = infraArchitecture && infraArchitecture.goalLevel === 2;
            this.infra.bareMetal = infraArchitecture && infraArchitecture.goalLevel <= 1;
        },
        async getAllMarkdownContentFolders() {
            try {
                const response = await axios.get(`https://api.github.com/repos/msa-ez/cloud-iq/contents/get-the-guide-md2`);
                const markdownContentFolders = response.data.filter(item => item.type === 'dir');
                for (const folder of markdownContentFolders) {
                    await this.getFolderContents(folder.name);
                }
                this.$forceUpdate()
            } catch (error) {
                console.error("Failed to load markdownContentFolders", error);
            }
        },
        async getFolderContents(folderName) {
            try {
                let folderFiles = {};
                for (let i = 1; i <= 4; i++) {
                    const fileResponse = await axios.get(`https://raw.githubusercontent.com/msa-ez/cloud-iq/main/get-the-guide-md2/${folderName}/level${i}.md`);
                    const markdownContent = marked(fileResponse.data);
                    folderFiles[i] =  markdownContent ;
                }
                this.markdownContentFolders[folderName] = folderFiles
            } catch (error) {
                console.error(`Failed to load contents for folder ${folderName}`, error);
            }
        },
        loadProfilePerspectives() {
            if (this.selectedProfile && this.selectedProfile.perspectives) {
                this.selectedProfile.perspectives.forEach(p =>{
                    this.goalLevels[p.name_en] = p.goalLevel
                });
                this.getAllMarkdownContentFolders()
            }
        }
    },
}
</script>
<style>
.tab-title {
    font-size: 16px;
    font-weight: 700;
}
.img-box-wrap {
    max-width: 1920px;
    width: 100%;
    height: calc(100vh - 270px);
    margin: 0 auto;
    display: flex;
    align-items: flex-start; 
    justify-content: center;
}
.conversion-img-box {
    max-width: 720px;
    width: 40%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.conversion-img-box > div {
    width: 100%;
    max-height: 100%;
}
.conversion-img-box > div > h3 {
    width: 70%;
    margin: 0 auto;
}
.conversion-img-box > div > img {
    display: block;
    max-width: 100%;
    width: 70%;
	height: auto;
    margin: 0 auto;
}
.reference-img-box {
    max-width: 760px;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.reference-img-box > h3 {
    width: 60%;
    margin: 0 auto;
}
.reference-img-box > img {
    max-width: 100%;
    width: 60%;
	height: auto;
    margin: 0 auto;
}

@media all and (min-width:1520px) and (max-height:779px) { 
    .conversion-img-box > div > h3, .conversion-img-box > div > img {
        width: 55%;
        font-size: 1.1rem;
    }
    .reference-img-box > h3, .reference-img-box > img {
        width: 53%;
        font-size: 1.1rem;
    }
}
@media only screen and (max-width:1280px) {
    .conversion-img-box > div > h3, .conversion-img-box > div > img {
        width: 80%;
    }
    .reference-img-box > h3, .reference-img-box > img {
        width: 70%;
    }
}
@media only screen and (max-width:1024px) {
    .conversion-img-box > div > h3, .conversion-img-box > div > img {
        width: 90%;
        font-size: 1.05rem;
    }
    .reference-img-box > h3, .reference-img-box > img {
        width: 80%;
        font-size: 1.05rem;
    }
}
@media only screen and (max-width:768px) {
    .img-box-wrap {
        height: 100%;
        padding: 10px;
        flex-direction: column;
        justify-content: flex-start;
    }
    .conversion-img-box{
        width: 100%;
        padding-bottom: 20px;
    }
    .conversion-img-box > div > h3, .conversion-img-box > div > img {
        width: 100%;
    }
    .reference-img-box {
        width: 100%;
        height: 100%;
        justify-content: flex-start;
        margin-top: 20px;
    }
    .reference-img-box > h3, .reference-img-box > img {
        width: 100%;
    }
}
</style>