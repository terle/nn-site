<script setup lang="ts">
import { ref } from 'vue'
import profilImageUrl from './../assets/profile.png'

const workExperience = ref([
    {
        pow: "Northern Nerds",
        period: "2019 - now",
        title: "Freelance Consultant"
    },
    {
        pow: "Apply Agency",
        period: "Dec 2021 - Jan 2023",
        title: "Senior Software Udvikler"
    },
    {
        pow: "Nodeco A/S",
        period: "Aug 2020 - Dec 2021",
        title: "IT Architect"
    },
    {
        pow: "Codehouse (later Valtech)",
        period: "Apr 2017 - Apr 2019",
        title: "Consultant/Sitecore Developer"
    }, {
        pow: "Rehfeld (later IQVIA)",
        period: "Apr 2016 - Apr 2017",
        title: "Consultant"
    }, {
        pow: "Netcompany",
        period: "Jan 2014 - Apr 2016",
        title: "Senior Developer"
    }, {
        pow: "Noitso",
        period: "Jun 2012 - Jun 2013",
        title: "Intern & Student Worker"
    }
])
</script>

<template>
    <v-container fluid>
        <v-row justify="center">
            <div class="d-flex align-center flex-column">
                <div class="text-h2">
                    Terkel Brix
                </div>
                <div class="text-h6 text-medium-emphasis">
                    Bachelor of Engineering, IT - DTU - 2013
                </div>
            </div>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" md="6" class="d-flex flex-column">
                <v-card class="ma-4" height="100%">
                    <v-card-title>
                        Career
                    </v-card-title>
                    <v-card-text>
                        <v-timeline side="end">
                            <v-timeline-item v-for="(item, key) in workExperience" :key="item.title"
                                dot-color="blue-grey-lighten-3" size="small" rounded>
                                <div class="d-flex flex-column">
                                    <div class="text-h6 font-weight-black">
                                        {{ item.title }}
                                    </div>
                                    <div class="text-subtitle-1">
                                        {{ item.pow }}
                                    </div>
                                    <div class="text-caption">
                                        {{ item.period }}
                                    </div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="6" class="d-none d-md-flex">
                <v-img class="ma-4" :src="profilImageUrl"  max-height="90vh" />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped></style>