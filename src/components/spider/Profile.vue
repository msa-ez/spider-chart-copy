<template>
    <div>
        <div>
            <v-dialog v-model="profileDialog"
                persistent
                max-width="400"
            >
                <v-card class="pa-5">
                    <v-row>
                        <v-card-title class="pa-0">프로필 관리</v-card-title>
                        <v-spacer></v-spacer>
                        <v-btn @click="closeProfileDialog()"
                            style="margin-left: 10px;"
                            icon
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-row>
                    <v-form @submit.prevent="registerProfile">
                        <v-text-field class="profile-input-field"
                            label="프로필 입력"
                            v-model="newProfile.name"
                            :rules="newProfile.nameRules"
                            required
                        ></v-text-field>
                    </v-form>
                    <v-row align="center">
                        <v-col 
                        cols="12" >
                            <v-select
                                :items="profiles"
                                :item-text="profileDisplayText"
                                item-value="name"
                                label="프로필"
                                v-model="selectedProfile"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-checkbox 
                        v-model="deleteConfirmed"
                        :label="selectedProfile ? `'${selectedProfile}' 프로필을 삭제하시겠습니까?` : '등록된 프로필이 없습니다.'"
                        class="ma-0 pa-0"
                        :disabled="!selectedProfile"
                    ></v-checkbox>
                    <v-card-actions class="ma-0 pa-0">
                        <v-spacer></v-spacer>
                        <div>
                            <v-btn @click="deleteProfile()"
                                color="red darken-1"
                                text
                                :disabled="!deleteConfirmed"
                            >삭제</v-btn>
                            <v-btn @click="updateProfile()"
                                color="green"
                                text
                                :disabled="isNameDuplicate(newProfile.name)"
                            >수정
                            </v-btn>
                            <v-btn @click="registerProfile"
                                color="primary"
                                text
                                :disabled="isNameDuplicate(newProfile.name)"
                            >등록
                            </v-btn>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
        <Step v-if="selectedProfile"
            @saveProfiles="saveProfiles"
            :selectedProfile="profile"
        />
    </div>
</template>

<script>
import Step from './step/Step.vue';
import AssessmentData from './step/AssessmentData2.js';
import GoalSettingData from './step/GoalSettingData2.js';

export default {
    mixins: [
        AssessmentData,
        GoalSettingData
    ],
    components: {
        Step
    },
    data() {
        return {
            deleteConfirmed: false,
            isEditingProfile: false,
            profileDialog: false,
            profiles: [],
            profile: [],
            newProfile: {
                name: '',
                nameRules: [
                    v => !!v || '프로필을 입력해 주세요.',
                    v => !this.isNameDuplicate(v) || '이미 등록된 프로필입니다.'
                ],
                perspectives: [],
                topics: [],
            },
            selectedProfile: null,
        }
    },
    mounted() {
        this.loadProfiles();
        // localStorage에서 선택된 프로필을 불러옵니다.
        const getProfileName = localStorage.getItem('selectedProfile');
        if (getProfileName) {
            // localStorage에 저장된 프로필이 있다면, 해당 프로필을 선택합니다.
            this.selectedProfile = getProfileName;
        } else if (this.profiles.length > 0) {
            // localStorage에 프로필이 없지만 profiles 배열에 프로필이 있다면, 첫 번째 프로필을 선택합니다.
            this.selectedProfile = this.profiles[0].name;
        } else {
            // 프로필이 없는 경우
            this.selectedProfile = null;
        }
        this.$eventBus.$on('editProfile', this.openEditProfile);
    },
    watch: {
        selectedProfile: {
            handler(selectedProfile) {
                this.profile = this.profiles.find(profile => profile.name === selectedProfile);
                this.sendSelectedProfile()
            }
        }
    },
    methods: {
        saveProfiles() {
            // 프로필을 저장한 후 Vuex 스토어의 상태를 업데이트합니다.
            localStorage.setItem('registeredProfiles', JSON.stringify(this.profiles));
        },
        loadProfiles() {
            const profiles = localStorage.getItem('registeredProfiles');
            this.profiles = profiles ? JSON.parse(profiles) : [];
            // 프로필이 비어 있는 경우 기본 프로필을 생성합니다.
            if (this.profiles.length === 0) {
                // 기본 프로필 생성
                let defaultProfile = {
                    name: 'cloudIq',
                    perspectives: JSON.parse(JSON.stringify(this.perspectives)),
                    topics: JSON.parse(JSON.stringify(this.topics))
                };
                this.profiles.push(defaultProfile);  // 기본 프로필을 프로필 배열에 추가합니다.
                this.selectedProfile = defaultProfile.name;  // 기본 프로필을 선택합니다.
                this.saveProfiles();  // 변경사항을 저장합니다.
            }
        },
        profileDisplayText(item) {
            return `${item.name}`;
        },
        registerProfile() {
            if (!this.isNameDuplicate(this.newProfile.name)) {
                let newProfile = { ...this.newProfile };
                newProfile.perspectives = JSON.parse(JSON.stringify(this.perspectives));
                newProfile.topics = JSON.parse(JSON.stringify(this.topics));
                this.profiles.push(newProfile);
                this.profile = newProfile;
                this.selectedProfile = newProfile.name;
                this.saveProfiles();
                this.closeProfileDialog();
            }
        },
        updateProfile() {
            if (this.selectedProfile && !this.isNameDuplicate(this.newProfile.name, true)) {
                let index = this.profiles.findIndex(profile => profile.name === this.selectedProfile);
                if (index !== -1) {
                    this.profiles[index].name = this.newProfile.name;
                    this.saveProfiles();
                    this.selectedProfile = this.newProfile.name;
                    this.closeProfileDialog();
                }
            }
        },
        deleteProfile() {
            if (this.deleteConfirmed) {
                this.profiles = this.profiles.filter(profile => profile.name !== this.selectedProfile);
                this.saveProfiles();
                if (this.selectedProfile === this.selectedProfile) {
                    this.selectedProfile = null;
                }
                this.deleteConfirmed = false; // 체크박스 상태 초기화
            }
        },
        closeProfileDialog() {
            this.deleteConfirmed = false;
            this.profileDialog = false;
            this.newProfile.name = '';
        },
        openEditProfile() {
            this.profileDialog = true;
        },
        isNameDuplicate(name) {
            return !name || this.profiles.some(profile => profile.name === name);
        },
        sendSelectedProfile() {
            this.selectProfile(this.selectedProfile)
        },
        selectProfile(profile) {
            // Vuex 스토어의 액션을 디스패치합니다.
            this.$store.dispatch('updateSelectedProfile', profile);
        },
    },
    beforeDestroy() {
        this.$eventBus.$off('editProfile', this.openEditProfile);
    }
}
</script>
<style>
.profile-input-field .v-messages__message {
    line-height: 18px;
}
</style>
  