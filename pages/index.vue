<template>
  <div class="my-cv wrapper">
    <header class="my-cv__header">
      <h1 class="my-cv__initials">{{ currentCv.initials }}</h1>
      <h2 class="my-cv__specialization"> {{ currentCv.specialization }}</h2>
      <div class="my-cv__photo">

      <img class="my-cv__profile-photo" alt="Profile photo" :src="currentCv.profilePhoto"/>
      </div>
    </header>
    <section>
      <address>
      <p>Address: {{ currentCv.address }}</p>
      <p>Email: {{ currentCv.contacts.email }}</p>
      <p>Phone: {{ currentCv.contacts.phone}}</p>
      <p>Telegram: {{ currentCv.contacts.telegram }}</p>
      <p>Github: {{ currentCv.contacts.gitHub }}</p>
      </address>
      <p>Marital status: {{ currentCv.maritalStatus }}</p>
      <p>Date of birth: {{ currentCv.dateOfBirth }}</p>
      <p>Objective: {{ currentCv.objective }}</p>
      <ul class="my-cv__list_column">Education: 
        <li v-for="(ed,index ) in currentCv.education" :key="index">{{ ed }}</li>
      </ul>
      <ul class="my-cv__list_column">Work Experiance: 
        <li v-for="(exper,index ) in currentCv.workExperience" :key="index">{{ exper }}</li>
      </ul>
      <ul class="my-cv__list_row">Skills: 
        <li v-for="(skill,index ) in currentCv.skills" :key="index">{{ skill }}</li>
      </ul>
      <ul class="my-cv__list_column">Additional education: 
        <li v-for="(add,index ) in currentCv.additionalEducation" :key="index"><a :href="add.certificateUrl" target="blank">{{ add.name }}</a></li>
      </ul>
    </section>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import myCv from '../assets/db/myCv'
import type {CV,CVInfo} from '../assets/db/myCv';
const descriptionMap = {
    "ru": {
        address: "Адрес",
        email: "Email",
        phone: "Телефон",
        telegram: "Telegram",
        github: "Github",
        maritalStatus: "Семейное положение",
        dateOfBirth: "Дата рождения",
        objective: "Цель",
        education: "Образование",
        workExperience: "Опыт работы",
        skills: "Навыки",
        additionalEducation: "Повышение квалификации",
        aboutMe: "Обо мне"

    },
    "en":{
        address: "Address",
        email: "Email",
        phone: "Phone",
        telegram: "Telegram",
        github: "Github",
        maritalStatus: "Marital status",
        dateOfBirth: "Date of birth",
        objective: "Objective",
        education: "Education",
        workExperience: "Work Experiance",
        skills: "Skills",
        additionalEducation: "Additional education",
        aboutMe: "About me"

    }
}
const currentLanguage = ref("en")
const currentCv = computed<CVInfo>(() => myCv[currentLanguage.value])

</script>
<style lang="scss" scoped>
.my-cv {
  &__photo {
    position: relative;
  }
&__profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}
&__list {
  &_row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 2rem;


    
  }
  &_column {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 2rem;


  }
}
}
</style>