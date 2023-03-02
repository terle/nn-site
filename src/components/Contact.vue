<script setup lang="ts">
import contactImgageUrl from './../assets/alexander-andrews-JYGnB9gTCls-unsplash.jpg'
import { computed, ref } from 'vue'

const name = ref('')
const message = ref('')
const submitButtonDisabled = computed(() => {
    return !name.value || !message.value
})
const submitForm = () => {
    const mailtoLink = `mailto:terkel@northern-nerds.dk?subject=${name.value} contacted you&body=${message.value}`
    window.location.href = mailtoLink
}

</script>

<template>
    <v-container fluid>
        <div class="text-h2">Contact Me</div>
        <v-row>
            <v-col cols="6" class="d-none d-md-flex flex-column ">
                <v-img :src="contactImgageUrl" max-height="90vh">
                    <div class="text-disabled credit">
                        Photo by <a
                            href="https://unsplash.com/@alex_andrews?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexander
                            Andrews</a> on <a
                            href="https://unsplash.com/photos/JYGnB9gTCls?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </v-img>
            </v-col>
            <v-col cols="12" md="6">
                <v-card class="pa-6 ma-4">
                    <div class="text-h3 font-bold mb-6">Send me a message</div>
                    <v-form @submit.prevent="submitForm">
                        <v-text-field v-model="name" label="Name" outlined class="mb-4" aria-label="name-input"
                            title="name-input" aria-placeholder="Enter your name" placeholder="Enter your name" />
                        <v-textarea v-model="message" label="Message" outlined class="mb-4" aria-label="message-input"
                            placeholder="Enter your message" />
                        <v-btn type="submit" color="primary" dark :disabled="submitButtonDisabled">Submit</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped></style>