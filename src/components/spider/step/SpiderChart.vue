<template>
	<div>
		<div style="position:relative">
			<div style="margin-left:10px;">
				<v-row>
					<div style="width:20px; height:20px; border-radius: 5px; background-color:rgba(192, 75, 192, 0.5); margin:4px 5px 0px 0px;"></div>
					<v-row style="font-size:20px;">
						<div>목표수준 - </div>
						<div style="font-weight: 700;">&nbsp;Maturity Level:&nbsp;</div>
						<div style="color:blue">{{ slaResult.cloudStatus }},</div>
						<div style="font-weight: 700;">&nbsp;SLA:&nbsp;</div>
						<div style="color:red">{{ slaResult.percentage }}</div>
					</v-row>
				</v-row>
				<v-row>
					<div style="width:20px; height:20px; border-radius: 5px; background-color:rgba(75, 192, 192, 1); margin:4px 5px 0px 0px;"></div>
					<div style="font-size:20px;">현수준</div>
				</v-row>
			</div>
		</div>
		<svg :width="chartWidth" :height="chartHeight">
			<g :transform="`translate(${chartCenterX}, ${chartCenterY})`">
				<g v-for="(perspective, index) in selectedProfile.perspectives" :key="`perspective-${index}₩`">
					<line
						:x1="0"
						:y1="0"
						:x2="getCoordinate(chartRadius, index, selectedProfile.perspectives.length)[0]"
						:y2="getCoordinate(chartRadius, index, selectedProfile.perspectives.length)[1]"
						stroke="lightgray"
					/>
					<g v-for="level in maxDataValue" :key="`level-line-${index}-${level}`">
						<line v-if="level < maxDataValue"
							:x1="getLevelLineCoordinate(index, level)[0]"
							:y1="getLevelLineCoordinate(index, level)[1]"
							:x2="getLevelLineCoordinate(index, level)[2]"
							:y2="getLevelLineCoordinate(index, level)[3]"
							stroke="lightgray"
							stroke-width="2"
						/>
					</g>
					<text
						:x="getCoordinate(chartRadius + labelOffset, index, selectedProfile.perspectives.length)[0]"
						:y="getCoordinate(chartRadius + labelOffset, index, selectedProfile.perspectives.length)[1]"
						dominant-baseline="middle"
						text-anchor="middle"
					>
						{{ perspective.name }}
					</text>
				</g>
				<g>
					<polygon
						:points="getPolygonPoints(selectedProfile.perspectives)"
						fill="rgba(75, 192, 192, 0.2)"
						stroke="rgba(75, 192, 192, 1)"
					/>
					<polygon
						:points="getPolygonPointsGoal(selectedProfile.perspectives)"
						fill="rgba(192, 75, 192, 0.1)"
            			stroke="rgba(192, 75, 192, 1)"
					/>
					<g v-for="(perspective, index) in selectedProfile.perspectives">
						<circle
							:cx="getCoordinateForCircle(perspective, index)[0]"
							:cy="getCoordinateForCircle(perspective, index)[1]"
							:r="pointRadius"
							fill="rgba(75, 192, 192, 1)"
						/>
						<circle
							:cx="getCoordinateForCircleGoal(perspective, index)[0]"
							:cy="getCoordinateForCircleGoal(perspective, index)[1]"
							:r="pointRadius"
							fill="rgba(192, 75, 192, 0.5)"
						/>
					</g>
				</g>
			</g>
		</svg>
	</div>
</template>
  
<script>
import SLABase from './SLABase.vue'

export default {
    name: "SpiderChart",
	mixins: [
		SLABase
	],
	props: {
		selectedProfile: {
            type: Object,
            required: true
        },
		chartWidth: Number,
		chartHeight: Number,
		chartCenterX: Number,
		chartCenterY: Number,
		chartRadius: Number,
		labelOffset: Number,
		maxDataValue: Number,
		pointRadius: Number
	},
    comments: {
    },
    data () {
		return {
		}
    },
	created() {
		this.getSLAPercentage(this.selectedProfile);
	},
	watch: {
		selectedProfile: {
            deep: true,
            handler() {
                this.getSLAPercentage(this.selectedProfile);
            }
        }
    },
    methods: {
		getDataLength(perspectives) {
			let count = 0;
			Object.keys(perspectives).forEach(key => {
				var perspective = perspectives[key]
				perspective.details.forEach(detail => {
					count += 1;
				});
			});
			return count;
		},
		getCoordinateForCircle(perspective, index) {
			const completedLevels = perspective.levels.filter(level => level.isCompleted).length;
			const radius = this.chartRadius * (completedLevels / this.maxDataValue);
			return this.getCoordinate(radius, index, this.selectedProfile.perspectives.length);
		},
		getCoordinateForCircleGoal(perspective, index) {
			const radius = this.chartRadius * (perspective.goalLevel / this.maxDataValue);
			return this.getCoordinate(radius, index, this.selectedProfile.perspectives.length);
		},
		getCoordinate(radius, index, total) {
			const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
			const x = radius * Math.cos(angle);
			const y = radius * Math.sin(angle);
			return [x, y];
		},
		getLevelLineCoordinate(index, level) {
			// 각도 계산
			const angle = (Math.PI * 2 * index) / this.selectedProfile.perspectives.length - Math.PI / 2;
			// 해당 레벨에서의 반지름 계산
			const radius = this.chartRadius * (level / this.maxDataValue);
			// 축의 좌표를 계산
			const x = radius * Math.cos(angle);
			const y = radius * Math.sin(angle);

			// 수평 선의 길이를 정의
			const lineLength = 5; // 가로 선의 길이는 항상 일정

			// 축에 수직인 선의 끝점을 계산하기 위한 각도 조정
			const anglePerpendicular = angle + Math.PI / 2;

			// 수평 선의 시작점과 끝점 계산
			const x1 = x + lineLength * Math.cos(anglePerpendicular);
			const y1 = y + lineLength * Math.sin(anglePerpendicular);
			const x2 = x - lineLength * Math.cos(anglePerpendicular);
			const y2 = y - lineLength * Math.sin(anglePerpendicular);

			return [x1, y1, x2, y2];
		},
		getPolygonPoints(perspectives) {
			if (!perspectives || perspectives.length === 0) {
				return '';
			}
			var perspectiveArray = perspectives
				.map((perspective, index) => {
					const completedLevels = perspective.levels.filter(level => level.isCompleted).length;
					const radius = this.chartRadius * (completedLevels / this.maxDataValue);
					return this.getCoordinate(radius, index, perspectives.length).join(',');
				})
				.join(' ');

			return perspectiveArray;
		},
		getPolygonPointsGoal(perspectives) {
			if (!perspectives || perspectives.length === 0) {
				return '';
			}
			var perspectiveArray = perspectives
			.map((perspective, index) => {
				const radius = this.chartRadius * (perspective.goalLevel / this.maxDataValue);
				return this.getCoordinate(radius, index, perspectives.length).join(',');
			})
			.join(' ');

			return perspectiveArray
		},
		checkAllLevelsCompletion(perspective) {
			perspective.isCompleted = perspective.levels.every((level) => level.isCompleted);
		
			const perspectiveIndex = this.chartData.labels.findIndex((label) => label === perspective.name);
			if (perspectiveIndex !== -1) {
				const lastCompletedLevelIndex = perspective.levels.findIndex((level) => !level.isCompleted) - 1;
				const value = lastCompletedLevelIndex !== -1 ? lastCompletedLevelIndex + 1 : this.chartData.labels.length;
				this.chartData.data[perspectiveIndex] = value;
				this.chartData.data2[perspectiveIndex] = value;
			}
		},
	}
}
</script>
  
<style>
</style>
  
  