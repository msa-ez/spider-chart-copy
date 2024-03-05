export default {
    data() {
        return {
            isAllLevelsCompleted: false,
			perspectives: [
				{
					name: '애플리케이션 관점',
					name_en: 'application',
					goalLevel: 0,
					levels: [
						{ 
							checkpoints: [
								{ text: '모노리식 아키텍처: 귀하의 시스템은 모든 기능이 하나의 애플리케이션 내에서 통합되어 있습니까?', checked: false },
								{ text: '기능적 통합: 시스템 내 다양한 기능들이 긴밀하게 연결되어 있어, 하나의 기능 변경이 전체 시스템에 영향을 미칩니까?', checked: false },
								{ text: '개발 및 배포의 단순성: 전체 애플리케이션을 하나의 단위로 개발하고 배포하고 있습니까?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '하이브리드 아키텍처: 귀하의 시스템은 모노리스와 마이크로서비스 기능이 혼합된 구조입니까?', checked: false },
								{ text: '서비스 분리의 시작: 중요한 기능을 별도의 마이크로서비스로 분리하기 시작하셨습니까?', checked: false },
								{ text: '시스템 간 통신: 모노리스와 마이크로서비스 간의 통신 구조를 관리하고 있습니까?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '마이크로서비스 아키텍처: 귀하의 애플리케이션의 대부분 또는 전체가 마이크로서비스로 구성되어 있습니까?', checked: false },
								{ text: '서비스 간 느슨한 결합: 서비스들이 독립적으로 개발되고 운영되고 있습니까?', checked: false },
								{ text: '확장성 및 유연성: 귀하의 마이크로서비스 아키텍처는 확장성과 유연성을 제공합니까?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '이벤트 기반 아키텍처: 귀하의 마이크로서비스 간 상호작용이 이벤트 기반으로 이루어집니까?', checked: false },
								{ text: '도메인 중심 설계: 각 마이크로서비스가 특정 비즈니스 도메인을 중심으로 설계되어 있습니까?', checked: false },
								{ text: '고급 서비스 오케스트레이션: 서비스들 간의 상호작용을 관리하기 위해 고급 오케스트레이션 도구나 기법을 사용하고 있습니까?', checked: false },
							],
							isCompleted: false,
						},
					],
				},
				{
					name: '데이터베이스 관점',
					name_en: 'database',
					goalLevel: 0,
					levels: [
						{
							checkpoints: [
								{ text: '트랜잭션 관리: 각 마이크로서비스에서 ACID 기반의 트랜잭션을 유지하기 위한 방법과 프레임워크를 도입하였는가?', checked: false },
								{ text: '데이터 일관성 유지: Canonical Data Model을 도입하여 데이터의 일관성을 유지하고 데이터의 중복 및 모순을 방지하였는가?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '개별 스키마 정의: 각 마이크로서비스는 자체적인 스키마를 가지고 있으며, 각 서비스의 데이터 구조와 필드 정의가 명확하게 이루어졌는가?', checked: false },
								{ text: '다중 엔터프라이즈 데이터 조정: 서비스 간의 다중 엔터프라이즈 데이터 저장소와의 트랜잭션 조정 방식을 정의하고 이를 구현하였는가?', checked: false },
								{ text: '데이터 일관성 유지: 데이터 조정 및 동기화 과정에서 데이터 일관성을 유지하기 위한 메커니즘을 도입하였는가?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '분산 데이터 관리: 각 마이크로서비스는 완전히 분산된 데이터 관리를 수행하고 있으며, 필요에 따라 데이터의 파티셔닝, 샤딩, 복제 등을 구현하였는가?', checked: false },
								{ text: '폴리글랏 퍼시스턴스: 각 마이크로서비스는 자체적으로 다른 유형의 DBMS를 사용할 수 있는 폴리글랏 퍼시스턴스를 구현하였는가?', checked: false },
								{ text: '데이터 접근 및 관리: 각 마이크로서비스에서 필요한 데이터 액세스 방법을 선택하고 이를 효율적으로 관리하고 있으며, 성능과 확장성을 고려하였는가?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '이벤트 기반 데이터 관리: 이벤트 중심 아키텍처를 구축하여 각 마이크로서비스 간의 데이터 흐름을 이벤트 기반으로 관리하고 있는가?', checked: false },
								{ text: '이벤트 소싱 및 커맨드-쿼리 분리(CQRS): 이벤트 소싱을 통해 시스템의 상태를 재생하고 커맨드와 쿼리를 분리하여 비동기적인 데이터 처리를 구현하였는가?', checked: false },
								{ text: '데이터 일관성 관리: 일시적으로 데이터에 일관성이 없는 상태가 존재할 수 있으며, 이를 일정 시간 내에 해소하여 다시 일관성을 충족시키는 메커니즘을 구현하였는가?', checked: false },
							],
							isCompleted: false,
						},
					],
				},
				{
					name: '인프라스트럭처 관점',
					name_en: 'infrastructure',
					goalLevel: 0,
					levels: [
						{
							checkpoints: [
								{ text: '베어 메탈 서버(Bare Metal): 물리적 서버를 직접 사용하여 애플리케이션과 서비스를 호스팅하고 있나요?', checked: false },
								{ text: '기본적인 데이터 센터 운영: 전통적인 데이터 센터 관리 방식으로, 서버의 구매, 설정, 유지보수가 필요한 환경인가요?', checked: false },
								{ text: '제한된 자동화와 확장성: 자동화는 최소화되어 있으며, 확장성과 유연성이 제한적인 인프라를 사용하고 있나요?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '가상화된 데이터 센터(Virtualized Data Center): 가상화 기술을 사용하여 하드웨어 리소스를 효율적으로 활용하고, 복수의 가상 서버를 하나의 물리적 서버에서 운영하고 계신가요?', checked: false },
								{ text: '초기 클라우드 기술 도입: 일부 인프라가 클라우드 서비스로 이전되기 시작하며, 프라이빗 클라우드의 구축을 고려하고 있나요?', checked: false },
								{ text: '기초적인 리소스 오케스트레이션: 자동화와 오케스트레이션이 도입되지만, 아직은 초기 단계에 머물러 있나요?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '퍼블릭 및 프라이빗 클라우드: 퍼블릭 클라우드 서비스를 활발히 이용하고 있으며, 동시에 프라이빗 클라우드 인프라를 구축하여 운영하고 있나요?', checked: false },
								{ text: '고도화된 클라우드 서비스: 현재, 다양한 클라우드 서비스(예: 컴퓨팅, 스토리지, 네트워킹)를 적극적으로 활용하여 인프라를 더 효율적으로 관리하고 있나요?', checked: false },
								{ text: '개선된 자동화 및 오케스트레이션: 리소스 관리와 배포에 대한 자동화가 갖춰져 있으며, 데브옵스 툴 체인  오케스트레이션 도구를 사용하고 있나요?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '멀티클라우드 및 하이브리드 클라우드: 다양한 퍼블릭 클라우드 제공업체를 활용하는 멀티클라우드 전략을 채택하고, 프라이빗 클라우드와의 통합을 통해 하이브리드 클라우드 환경을 구축하고 있다.', checked: false },
								{ text: '고급 클라우드 네이티브 기술: 컨테이너화, 서비스 메쉬, 마이크로서비스 등 고급 클라우드 네이티브 기술들을 잘 활용하고 있다.', checked: false },
								{ text: '완전한 자동화 및 통합된 인프라 관리: 인프라의 프로비저닝, 관리, 모니터링이 자동화되어 있으며, 다양한 클라우드 환경에서의 일원화된 관리와 운영이 가능하다.', checked: false },
							],
							isCompleted: false,
						},
					],
				},
				{
					name: '개발 관점',
					name_en: 'development',
					goalLevel: 0,
					levels: [
						{
							checkpoints: [
								{ text: '적용 방법론: 전통적인 Waterfall 개발 방법론을 주로 사용하고 있으며, 계획, 설계, 구현, 검증, 유지보수 등의 순차적 단계로 정보시스템이 개발되고 있는가?', checked: false },
								{ text: '배포 주기: 연간 또는 분기별 배포가 일반적이며, 변경 사항이 많고, 1번의 배포에 이를 적용하고 있는가?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '적용 방법론: 빠른 피드백과 반복적인 개발을 통해 요구사항의 변화에 빠르게 대응할 수 있는 Agile 방법론을 일부 사용하고 있는가?', checked: false },
								{ text: '배포 주기: 분기별 또는 월별 배포 주기로 시장의 변화에 대응하고 있는가?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '적용 방법론: Agile 및 DevOps 개발을 병행하고 있으며 개발과 운영의 협업을 통해 지속적인 통합(CI) 및 지속적인 배포(CD)를 적용하고 있는가?', checked: false },
								{ text: '배포 주기: 월별, 주별 또는 그 이상의 빈도로 배포가 이루어지고 있으며, 신속하게 시장에 새로운 기능을 제공하기 위해 더 짧은 배포 주기와 자동화된 파이프라인이 필요한가?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '적용 방법론: 완전히 Agile 및 DevOps 중심으로 전환된 방법론을 적용하고 있는가?', checked: false },
								{ text: '배포 주기: 일간 배포 또는 필요에 따른 지속적인 배포가 가능하며, 고도의 자동화 및 최적화를 통해 언제든지 안전하고 신속하게 배포할 수 있는 능력을 갖추고 있는가?', checked: false },
							],
							isCompleted: false,
						},
					],
				},
				{
					name: '보안 관점',
					name_en: 'security',
					goalLevel: 0,
					levels: [
						{
							checkpoints: [
								{ text: '인증 : 기본적인 사용자 이름과 비밀번호 기반 인증이 주를 이루고, 세션 기반 인증이 많이 사용되는가? 권한관리 : 주로 역할 기반 접근 제어(RBAC)를 사용하여 구현되는가?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '다중 시스템과 서비스 간의 인증 방식을 사용하며, OAuth, OpenID Connect와 같은 표준 프로토콜 기반으로 동작하고 있는가?', checked: false },
								{ text: '권한 관리는 RBAC에 더해 속성 기반 접근 제어(ABAC)가 도입되어 더 세밀한 권한 관리가 가능한가?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '서비스 간의 인증과 통합된 사용자 인증이 가능하며, JSON Web Tokens (JWT)와 같은 방식이 널리 사용되는가?', checked: false },
								{ text: '더 복잡한 시스템 구조에 대응하기 위해 마이크로서비스별로 세분화된 권한 관리 시스템이 필요한가?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '다중 요소 인증(Multi-Factor Authentication, MFA)과 같은 더 강화된 인증 메커니즘을 활용하고 있는가?', checked: false },
								{ text: '제로 트러스트 보안 모델(Zero-Trust Security Model)이 도입되어 모든 사용자와 기기는 항상 검증되어야 하며, 최소 권한 원칙이 적용되는가?', checked: false },
							],
							isCompleted: false,
						},
					],
				},
				{
					name: '확장성 관점',
					name_en: 'scalability',
					goalLevel: 0,
					levels: [
						{
							checkpoints: [
								{ text: '성격: 주로 수직적 확장(Vertical Scaling)에 의존하고 있는가?', checked: false },
								{ text: '모노리스 아키텍처의 한계: 모노리스 시스템에서는 확장성이 제한적이며, 시스템 전체를 확장해야 하는 상황이 자주 발생하는가?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '조합된 확장성: 모노리스와 마이크로서비스의 조합을 통해 확장성을 관리하고 있는가? (일부 서비스는 수직적 확장을, 다른 서비스는 초기 형태의 수평적 확장(Horizontal Scaling)을 사용)', checked: false },
								{ text: '수동적 확장: 확장이 필요할 때 수동으로 리소스를 추가하거나 제거하는 전략을 사용하고 있는가?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '수평적 자동 확장: 클라우드 네이티브한 환경에서 마이크로서비스가 더 많이 사용되며, 트래픽 변화에 따라 자동으로 스케일링되는 수평적 자동 확장이 사용되고 있는가?', checked: false },
								{ text: '효율적인 리소스 관리: 로드 밸런싱과 함께, 필요에 따라 서비스 인스턴스를 추가하거나 제거하여 리소스 사용을 최적화하고 있는가?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '온디맨드 수평적 복제(On-demand Horizontal Cloning): 트래픽의 급격한 증가에 대응하여 신속하게 추가 인스턴스를 생성하는 온디맨드 복제 방식을 적용하고 있는가?', checked: false },
								{ text: '고급 자동 스케일링 전략: 예측적 스케일링과 같은 고급 기능을 통해 미리 리소스를 조정하거나, 다양한 서비스 간에 리소스를 동적으로 재배치하는 전략을 구사 가능한가?', checked: false },
							],
							isCompleted: false,
						},
					],
				},
				{
					name: '가시성 관점',
					name_en: 'visibility',
					goalLevel: 0,
					levels: [
						{
							checkpoints: [
								{ text: 'OS 및 하드웨어 모니터링: 기본적인 운영체제(OS) 및 하드웨어(H/W) 모니터링(CPU 사용량, 메모리 사용량, 디스크 I/O 등의)에 의존하는가?', checked: false },
								{ text: '정적 통계 수집: 서비스 로그, 서버 메트릭스 등 정적인 통계 데이터를 정적으로 수집하여 시스템의 상태를 파악하고 있는가?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '텔레메트리 데이터 수집: 애플리케이션 성능 관리(APM) 도구를 토해 서비스 및 애플리케이션의 텔레메트리 데이터 수집이 가능한가?', checked: false },
								{ text: '기본적인 관측성 지표(Observability Metrics): 로그, 메트릭스, 트레이스 등을 통해 시스템의 성능과 건강 상태를 더 자세히 파악할 수 있는가?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '서비스 메쉬 특화 관측성: 마이크로서비스 아키텍처에 특화된 관측성 지표를 서비스 메쉬 기반으로 내부 데이터 흐름과 서비스 간의 상호작용 모니터링이 가능한가?', checked: false },
								{ text: '다양한 환경에 걸친 일관된 모니터링: 클라우드, 온프레미스, 하이브리드 환경 등 다양한 환경에서 일관된 모니터링을 위한 도구와 이상감지, Alerting 등의 프로세스가 운영되고 있는가?', checked: false },
							],
							isCompleted: false,
						},
						{
							checkpoints: [
								{ text: '고급 관측성 및 예측 분석: 머신 러닝과 같은 고급 기술을 사용하여 예측 분석과 자동화된 문제 해결이 가능한가?', checked: false },
								{ text: '시스템의 이상을 사전에 감지하고, 더 나은 의사 결정을 위한 도구를 활용하고 있는가?', checked: false },
								{ text: '통합된 통찰력 및 자동화된 대응: 전체 인프라와 서비스에 대한 통합된 통찰력을 제공하며, 이를 바탕으로 자동화된 대응 메커니즘으로 시스템의 안정성과 성능을 지속적으로 개선하고 있는가?', checked: false },
							],
							isCompleted: false,
						},
					],
				},
			],
			chartWidth: 500,
			chartHeight: 500,
			chartCenterX: 250,
			chartCenterY: 250,
			chartRadius: 150,
			labelOffset: 20,
			maxDataValue: 5,
			pointRadius: 4,
        };
    },
};
