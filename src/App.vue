<script setup lang="ts">

import parrallaxImageUrl from './assets/jason-hogan-YyFwUKzv5FM-unsplash.jpg'
import logoBigUrl from './assets/logo-big.svg'
import logosmallUrl from './assets/logo-smal.svg'
import profilImageUrl from './assets/profile.png'
import image1Url from './assets/olena-sergienko-dIMJWLx1YbE-unsplash.jpg'

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
    <v-container fluid>
      <v-parallax class="mt-16" height="60vw" :src="parrallaxImageUrl">
        <div class="mt-8 d-flex flex-column  align-center">
          <v-img :src="logoBigUrl" width="40vw" max-width="50vw"></v-img>
          <div class="text-h6 font-weight-light text-white mt-2">
            Maximazing freedom since 2019
          </div>
        </div>
      </v-parallax>
      <div class="text-disabled credit">
        Photo by <a
          href="https://unsplash.com/@jasonhogan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason
          Hogan</a> on <a
          href="https://unsplash.com/s/photos/freedom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>
    </v-container>

    <v-container>
      <v-row>
        <p class="text-h4 text-justify my-4">
          Revolutionize Your Business with Cutting-Edge IT Solutions from Northern Nerds
        </p>
        <p class="text-h4 text-justify my-4">
          The Expert IT Consultants You Can Trust!
        </p>
      </v-row>
    </v-container>

    <section id="intro">
      <v-row>
        <v-col cols="6" class="d-none d-md-flex flex-column">
          <v-img :src="image1Url"></v-img>
          <div class="text-disabled credit">
            Photo by <a
              href="https://unsplash.com/@olenkasergienko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olena
              Sergienko</a> on <a
              href="https://unsplash.com/photos/dIMJWLx1YbE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column justify-center align-center">
          <div>
            <h2>About</h2>
            <p class="ma-4">
              Northern Nerds is a Danish IT consulting business run by Terkel Brix, a freelance IT consultant with 12+
              years of experience. Terkel specializes in Web Application Development, C# and ASP.NET Development,
              Sitecore/C#-based Solutions, and Vue.js Development. He offers personalized solutions to businesses of all
              sizes and industries, building strong relationships with clients and delivering exceptional results that
              exceed their expectations.
            </p>
            <p class="ma-4">
              Terkel is committed to providing exceptional customer service and support
              throughout every stage of the project.
            </p>

            <p class="ma-4">
              Thank you for considering Northern Nerds for your IT consulting needs.
            </p>
          </div>
        </v-col>
      </v-row>
    </section>

    <section id="about" class="">
      <v-container fluid>
        <v-row justify="center">
          <div class="d-flex align-center flex-column">
            <div class="text-h1">
              Terkel Brix
            </div>
            <div class="text-h6 text-medium-emphasis">
              Bachelor of Engineering, IT - DTU - 2013
            </div>
          </div>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" class="d-flex flex-column justify-center align-center">
            <v-card class="ma-4" height="100%">
              <v-card-title>
                Career
              </v-card-title>
              <v-card-text>
                <v-timeline side="end">
                  <v-timeline-item :dot-color="dotColorPresent" size="small" rounded>
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
                  <v-timeline-item :dot-color="dotColorPast" size="small" rounded>
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
                  <v-timeline-item :dot-color="dotColorPast" size="small" rounded>
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
                  <v-timeline-item :dot-color="dotColorPast" size="small" rounded>
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
                  <v-timeline-item :dot-color="dotColorPast" size="small" rounded>
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
                  <v-timeline-item :dot-color="dotColorPast" size="small" rounded>
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
                  <v-timeline-item :dot-color="dotColorPast" size="small" rounded>
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
          </v-col>
          <v-col cols="6" class="d-none d-md-flex">
            <v-img class="bg-white ma-4" :src="profilImageUrl"></v-img>

          </v-col>
        </v-row>
      </v-container>
    </section>


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

<style scoped>

.credit {
  background-color: #F5F5F5;
}

.credit>a {

  color: #BDBDBD;
}
</style>
