<script setup lang="ts">

import parrallaxImageUrl from './assets/jason-hogan-YyFwUKzv5FM-unsplash.jpg'
import logoBigUrl from './assets/logo-big.svg'
import logosmallUrl from './assets/logo-smal.svg'
import profilImageUrl from './assets/profile.png'

const dotColorPast = "blue-grey-lighten-3"
const dotColorPresent = "blue-grey-lighten-1"
</script>

<template>
  <v-app>
    <v-app-bar app elevation="10">
      <v-app-bar-nav-icon>
        <v-img :src="logosmallUrl" width="4vh"></v-img>
      </v-app-bar-nav-icon>
      <v-app-bar-title class="font-weight-thin">
        Northern Nerds
      </v-app-bar-title>
    </v-app-bar>
    <v-parallax class="pt-16" max-height="50vw" :src="parrallaxImageUrl">
      <div class="mt-6 d-flex flex-column justify-center align-center">
        <v-img :src="logoBigUrl" width="50vh"></v-img>
        <div class="text-h6 font-weight-light text-white mt-2">
          Maximazing freedom since 2019
        </div>
      </div>
    </v-parallax>
    <div class="text-disabled">
      Photo by <a
        href="https://unsplash.com/@jasonhogan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason
        Hogan</a> on <a
        href="https://unsplash.com/s/photos/freedom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    </div>

    <div id="about" class="d-flex justify-space-between align-content-strech">
      
        <v-card class="flex-grow ma-4">
          <v-card-title>
            <span class="text-h1 font-weight-thin">
              Terkel
              <span class="font-weight-light">Brix</span>
            </span>
          </v-card-title>

          <v-card-subtitle>
            Bachelor of Engineering, IT - DTU - 2013
          </v-card-subtitle>
          <v-card-text>
            <v-timeline density="compact" align="start">
              <v-timeline-item :dot-color="dotColorPresent" size="small">
                <div class="d-flex">
                  <strong class="me-4">Northern Nerds</strong>
                  <div>
                    <strong>2019-now</strong>
                    <div class="text-caption">
                      Freelance Consultant
                    </div>
                  </div>
                </div>
              </v-timeline-item>
              <v-timeline-item :dot-color="dotColorPast" size="small">
                <div class="d-flex">
                  <strong class="me-4">Apply Agency</strong>
                  <div>
                    <strong>Dec 2021 - Jan 2023</strong>
                    <div class="text-caption mb-2">
                      Senior Software Udvikler
                    </div>
                  </div>
                </div>
              </v-timeline-item>
              <v-timeline-item :dot-color="dotColorPast" size="small">
                <div class="d-flex">
                  <strong class="me-4">Nodeco A/S</strong>
                  <div>
                    <strong>Aug 2020 - Dec 2021</strong>
                    <div class="text-caption mb-2">
                      IT Architect
                    </div>
                  </div>
                </div>
              </v-timeline-item>
              <v-timeline-item :dot-color="dotColorPast" size="small">
                <div class="d-flex">
                  <strong class="me-4">Codehouse (later Valtech)</strong>
                  <div>
                    <strong>Apr 2017 - Apr 2019</strong>
                    <div class="text-caption mb-2">
                      Consultant/Sitecore Developer
                    </div>
                  </div>
                </div>
              </v-timeline-item>
              <v-timeline-item :dot-color="dotColorPast" size="small">
                <div class="d-flex">
                  <strong class="me-4">Rehfeld (later IQVIA)</strong>
                  <div>
                    <strong>Apr 2016 - Apr 2017</strong>
                    <div class="text-caption mb-2">
                      Consultant
                    </div>
                  </div>
                </div>
              </v-timeline-item>
              <v-timeline-item :dot-color="dotColorPast" size="small">
                <div class="d-flex">
                  <strong class="me-4">Netcompany</strong>
                  <div>
                    <strong>Jan 2014 - Apr 2016</strong>
                    <div class="text-caption mb-2">
                      Senior Developer
                    </div>
                  </div>
                </div>
              </v-timeline-item>
              <v-timeline-item :dot-color="dotColorPast" size="small">
                <div class="d-flex">
                  <strong class="me-4">Noitso</strong>
                  <div>
                    <strong>Jun 2012 - Jun 2013</strong>
                    <div class="text-caption mb-2">
                      Intern & Student Worker
                    </div>
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
    
      <v-img class="bg-white flex-grow" max-height="60vh" :src="profilImageUrl"></v-img>
    
  </div>

  <!-- <v-timeline>
      <v-timeline-item dot-color="purple-lighten-2" fill-dot>
        <v-card>
          <v-card-title class="bg-purple-lighten-2">
            <v-icon size="large" class="me-4" icon="mdi-magnify"></v-icon>
            <h2 class="font-weight-light">
              Title 1
            </h2>
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire
            principes at. Est et nobis iisque percipit.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item dot-color="amber-lighten-1" fill-dot size="x-small">
        <v-card>
          <v-card-title class="bg-amber-lighten-1 justify-end">
            <h2 class="me-4 font-weight-light">
              Title 2
            </h2>
            <v-icon size="large" icon="mdi-home-outline"></v-icon>
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire
            principes at. Est et nobis iisque percipit.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item dot-color="cyan-lighten-1" fill-dot>
        <v-card>
          <v-card-title class="bg-cyan-lighten-1">
            <v-icon class="me-4" size="large" icon="mdi-email-outline"></v-icon>
            <h2 class="font-weight-light">
              Title 3
            </h2>
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire
            principes at. Est et nobis iisque percipit.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item dot-color="red-lighten-1" fill-dot size="x-small">
        <v-card>
          <v-card-title class="bg-red-lighten-1 justify-end">
            <h2 class="me-4 font-weight-light">
              Title 4
            </h2>
            <v-icon size="large" icon="mdi-account-multiple-outline"></v-icon>
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire
            principes at. Est et nobis iisque percipit.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item dot-color="green-lighten-1" fill-dot>
        <v-card>
          <v-card-title class="bg-green-lighten-1">
            <v-icon class="me-4" size="large" icon="mdi-phone-in-talk"></v-icon>
            <h2 class="font-weight-light">
              Title 5
            </h2>
            </v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire
              principes at. Est et nobis iisque percipit.
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline> -->

    <v-footer class="text-center d-flex flex-column">
      <div>
        <v-btn class="mx-4" icon="mdi-linkedin" variant="text" href="https://www.linkedin.com/in/tbrix/"
          target="_blank"></v-btn>
        <v-btn class="mx-4" icon="mdi-github" variant="text" href="https://github.com/terle/" target="_blank"></v-btn>
      </div>
      <div class="pt-0">
        <v-btn variant="plain" href="https://datacvr.virk.dk/enhed/virksomhed/40216197" target="_blank"></v-btn>
        <v-btn variant="plain"
          href="mailto:info@northern-nerds.dk"><v-icon>mdi-email</v-icon>info@northern-nerds.dk</v-btn>
        <v-btn variant="plain" href="tel:30234321"><v-icon>mdi-phone</v-icon> 30 234 321</v-btn>
      </div>
      <v-divider></v-divider>
      <div>
        {{ new Date().getFullYear() }} — <strong>Northern Nerds</strong> - CVR 40216197
      </div>
    </v-footer>
  </v-app>
</template>

<style scoped></style>
