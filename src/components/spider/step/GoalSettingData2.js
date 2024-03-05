export default {
    data() {
        return {
            profile:[],
            profiles:[],
            tickLabels: [
                '전혀 그렇지 않다.',
                '그렇지 않다.',
                '보통이다.',
                '그렇다.',
                '매우 그렇다.'
            ],
            // goalLevels : 애플리케이션, 데이터베이스, 인프라스트럭처, 개발, 보안, 확장성, 가시성
            topics: [
                {
                    name: '정책 및 업무 관점',
                    questions: [
                        {
                            title: '[정책 및 업무 변화에 대한 민첩한 대응]',
                            text: '한국판 뉴딜과 같은 새로운 정책 , 기관별 업무계획 등 다양한 정보화 요구사항 변화에 대해 신속한 대응이 필요합니까 ?',
                            value: 0,
                            goalLevelsList:[
                                {
                                    goalCheckLevel: 2,
                                    goalLevels: [2, 1, 1, 1, 1, 0, 0]
                                },
                                {
                                    goalCheckLevel: 3,
                                    goalLevels: [3, 2, 2, 2, 2, 1, 1]
                                },
                                {
                                    goalCheckLevel: 4,
                                    goalLevels: [4, 3, 3, 3, 3, 2, 2]
                                }
                            ]
                        },
                        {
                            title: '[디지털 혁신 및 지능화 지원]',
                            text: '디지털 혁신 및 지능 정보화 관련 신기술 빅데이터 , AI, 블록체인 , IoT 등의 도입이 필요하고 , 연관된 애플리케이션의 개발 또는 개선이 요구됩니까 ?',
                            tickLabels: ['도입 의사없음', '검토해 보겠다', '검토중이다.', '필요해 보인다.', '아주 시급하다.'],
                            value: 0,
                            goalLevelsList:[
                                {
                                    goalCheckLevel: 2,
                                    goalLevels: [1, 1, 0, 1, 1, 0, 0]
                                },
                                {
                                    goalCheckLevel: 3,
                                    goalLevels: [1, 1, 1, 1, 1, 0, 0]
                                },
                                {
                                    goalCheckLevel: 4,
                                    goalLevels: [2, 1, 2, 1, 1, 0, 0]
                                }
                            ]
                        },
                    ]
                },
                {
                    name: '안정적 서비스 운영 관점',
                    questions: [
                        {
                            title: '[서비스 개선 요구사항 적시 대응]',
                            text: '서비스 이용자의 잦은 CSR(Customer Service Request, 고객의 서비스 요구사항)에 대해 적시 대응이 필요합니까 ? 또는 초기 개발비의 약 15% 이상을 매년 추가개발 및 유지보수 비용으로 사용하고 있습니까 ?',
                            tickLabels: ['1% 미만이다.', '5% 미만이다.', '10% 정도이다.', '15% 이상이다.', '30% 이상이다.'],
                            value: 0,
                            goalLevelsList:[
                                {
                                    goalCheckLevel: 2,
                                    goalLevels: [2, 1, 1, 1, 1, 0, 0]
                                },
                                {
                                    goalCheckLevel: 3,
                                    goalLevels: [3, 2, 2, 2, 1, 0, 0]
                                },
                                {
                                    goalCheckLevel: 4,
                                    goalLevels: [4, 3, 3, 3, 1, 0, 0]
                                }
                            ]
                        },
                        {
                            title: '[접속지연, 서비스 장애 문제 신속한 해결]',
                            text: '다양한 원인에 의한 장애 발생 시 장애복구(예 시스템 증설 , 업그레이드 등)를 위해 서비스를 중단한 적이 있습니까 ? 또는 이용자의 폭증에 의한 접속지연으로 이용자의 불만이 제기된 적이 있습니까 ?',
                            value: 0,
                            goalLevelsList:[
                                {
                                    goalCheckLevel: 2,
                                    goalLevels: [1, 1, 2, 2, 1, 0, 0]
                                },
                                {
                                    goalCheckLevel: 3,
                                    goalLevels: [2, 2, 3, 3, 1, 0, 0]
                                },
                                {
                                    goalCheckLevel: 4,
                                    goalLevels: [3, 3, 4, 4, 1, 0, 0]
                                }
                            ]
                        },
                        {
                            title: '[소규모 서비스 분리 및 독립적 운영]',
                            text: '소규모 서비스 단위로 기능과 DB 가 명확하게 분리되고 , 독립적으로 서비스를 실행할 수 있습니까 ? (공통 기능 및 데이터 사용 유무 , 타 시스템과의 연계성 , 서비스 의존 관계 등 확인)',
                            value: 0,
                            goalLevelsList:[
                                {
                                    goalCheckLevel: 2,
                                    goalLevels: [2, 2, 2, 2, 1, 0, 0]
                                },
                                {
                                    goalCheckLevel: 3,
                                    goalLevels: [3, 3, 3, 3, 1 ,1, 1]
                                },
                                {
                                    goalCheckLevel: 4,
                                    goalLevels: [4, 4, 4, 4, 1, 2, 2]
                                }
                            ]
                        },
                        {
                            title: '[다양한 플랫폼 환경에서의 이식성 보장]',
                            text: '개발 테스트 운영 환경에서 안정적이고 지속적인 배포가 필요하거나, 다양한 플랫폼 환경에 애플리케이션 배포가 요구됩니까 ?',
                            value: 0,
                            goalLevelsList:[
                                {
                                    goalCheckLevel: 2,
                                    goalLevels: [1, 1, 2, 2, 0, 0, 0]
                                },
                                {
                                    goalCheckLevel: 3,
                                    goalLevels: [2, 2, 3, 3, 0, 0, 0]
                                },
                                {
                                    goalCheckLevel: 4,
                                    goalLevels: [3, 3, 4, 4, 0, 0, 0]
                                }
                            ]
                        },
                    ]
                },
                {
                    name: '서비스 중요도 관점',
                    questions: [
                        {
                            title: '[정보시스템 등급]',
                            text: '제공하는 공공서비스들의 정보시스템 보안 위상은 행안부에서 구분하고 있는 5등급 중 어디에 해당 됩니까?',
                            tickLabels: ['공개 정보', '기관 단순정보', '중요정보', '유사제어', '국가존립'],
                            value: 0,
                            goalLevelsList:[
                                {
                                    goalCheckLevel: 2,
                                    goalLevels: [2, 2, 2, 2, 2, 2, 2]
                                },
                                {
                                    goalCheckLevel: 3,
                                    goalLevels: [3, 3, 3, 3, 3, 3, 3]
                                },
                                {
                                    goalCheckLevel: 4,
                                    goalLevels: [4, 4, 4, 4, 4, 4, 4]
                                }
                            ]
                        },
                        {
                            title: '[비즈니스 영향도]',
                            text: '서비스 장애시, 이로 인한 타 서비스(기관으)로의 비즈니스 영향도가 어느 정도입니까?',
                            tickLabels: ['영향도 없음', '매우낮음', '낮음', '높음', '매우높음'],
                            value: 0,
                            goalLevelsList:[
                                {
                                    goalCheckLevel: 3,
                                    goalLevels: [0, 0, 2, 2, 0, 1, 3]
                                },
                                {
                                    goalCheckLevel: 4,
                                    goalLevels: [1, 1, 3, 3, 0, 2, 4]
                                }
                            ]
                        },
                    ]
                },
                {
                    name: '조직 및 개발품질 향상 관점',
                    questions: [
                        {
                            title: '[개발· 운영 협업 조직체계 구현]',
                            text: '시스템 개발 및 운영 시 개발팀과 운영팀의 분리에 의한 의사소통의 문제 , 개발 및 배포 지연 등의 문제가 존재합니까 ?',
                            value: 0,
                            goalLevelsList:[
                                {
                                    goalCheckLevel: 2,
                                    goalLevels: [1, 2, 0, 2, 0, 0, 1]
                                },
                                {
                                    goalCheckLevel: 3,
                                    goalLevels: [2, 3, 0, 3, 0, 0, 1]
                                },
                                {
                                    goalCheckLevel: 4,
                                    goalLevels: [3, 4, 0, 4, 0, 0, 1]
                                }
                            ]
                        },
                        {
                            title: '[전문연력 역량 강화]',
                            text: '개발 빌드 배포 과정의 품질 향상을 위해 전문 인력을 확보하거나 기존 인력에 대한 전문적인 교육이 필요합니까 ?',
                            value: 0,
                            goalLevelsList:[
                                {
                                    goalCheckLevel: 2,
                                    goalLevels: [0, 0, 2, 1, 0, 0, 0]
                                },
                                {
                                    goalCheckLevel: 3,
                                    goalLevels: [0, 0, 3, 2, 0, 0, 0]
                                },
                                {
                                    goalCheckLevel: 4,
                                    goalLevels: [0, 0, 4, 3, 0, 0, 0]
                                }
                            ]
                        },
                    ]
                },
                {
                    name: '개발 생산성 향상 관점',
                    questions: [
                        {
                            title: '[코딩빌드 테스트 배포파이프라인 자동화]',
                            text: '개발된 SW 를 형상관리 시스템에 커밋한 후 개발 검증 운영 서버에서 각각 빌드 , 테스트 , 배포하는 과정 전체에 대해 자동화 도구를 도입하거나 추가할 필요가 있습니까 ?',
                            value: 0,
                            goalLevelsList:[
                                {
                                    goalCheckLevel: 2,
                                    goalLevels: [0, 0, 2, 0, 0, 0, 2]
                                },
                                {
                                    goalCheckLevel: 3,
                                    goalLevels: [0, 0, 3, 0, 0, 0, 3]
                                },
                                {
                                    goalCheckLevel: 4,
                                    goalLevels: [0, 0, 4, 0, 0, 0, 4]
                                }
                            ]
                        },
                        {
                            title: '[기술 반영 용이성 확보]',
                            text: '오픈소스 SW 를 비롯한 다양한 기술의 도입 , 업그레이드 , 업데이트 등 작업 수행 시 연관된 서비스에 대한 변경 작업이 복잡하여 개발 상의 어려움을 겪은 적이 있습니까 ?',
                            value: 0,
                            goalLevelsList:[
                                {
                                    goalCheckLevel: 2,
                                    goalLevels: [2, 2, 0, 1, 0, 0, 0]
                                },
                                {
                                    goalCheckLevel: 3,
                                    goalLevels: [3, 3, 0, 2, 0, 0, 0]
                                },
                                {
                                    goalCheckLevel: 4,
                                    goalLevels: [4, 4, 0, 3, 0, 0, 0]
                                }
                            ]
                        },
                    ]
                },
            ],
        }
    },
};