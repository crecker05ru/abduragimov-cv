<template>
  <div class="my-cv wrapper">
    <header class="my-cv__header">
      <h1 class="my-cv__initials">{{ currentCv.initials }}</h1>
      <h2 class="my-cv__specialization"> {{ currentCv.specialization }}</h2>
      <div class="my-cv__photo">

      <img class="my-cv__profile-photo" alt="Profile photo" :src="currentCv.profilePhoto"/>
      </div>
    </header>
    <section class="my-cv__section">
      <div class="my-cv__language-switch">
    <label class="my-cv__switch" :class="{'my-cv__switch-checked': languageCheckbox}">
    <span class="my-cv__switch-span"></span>
    <span class="my-cv__switch-lang-en">En</span><span class="my-cv__switch-lang-ru">Ru</span>
    <input class="my-cv__switch-input" type="checkbox" @click="switchLanguage" v-model="languageCheckbox" />
  </label>
  </div>
      <address>
      <p class="my-cv__description-row"><span class="my-cv__description-key">{{ currentDescription.address }}:</span> <span class="my-cv__description-value">{{ currentCv.address }}</span></p>
      <p class="my-cv__description-row"><span class="my-cv__description-key">{{ currentDescription.email }}:</span> <span class="my-cv__description-value">{{ currentCv.contacts.email }}</span></p>
      <p class="my-cv__description-row"><span class="my-cv__description-key">{{ currentDescription.phone }}:</span> <span class="my-cv__description-value">{{ currentCv.contacts.phone}}</span></p>
      <p class="my-cv__description-row"><span class="my-cv__description-key">{{ currentDescription.telegram }}:</span> <span class="my-cv__description-value">{{ currentCv.contacts.telegram }}</span></p>
      <p class="my-cv__description-row"><span class="my-cv__description-key">{{ currentDescription.github }}:</span><span class="my-cv__description-value">{{ currentCv.contacts.gitHub }}</span></p>
      </address>
      <p class="my-cv__description-row"><span class="my-cv__description-key">{{ currentDescription.maritalStatus }}:</span> <span class="my-cv__description-value">{{ currentCv.maritalStatus }}</span></p>
      <p class="my-cv__description-row"><span class="my-cv__description-key">{{ currentDescription.dateOfBirth }}:</span> <span class="my-cv__description-value">{{ currentCv.dateOfBirth }}</span></p>
      <p class="my-cv__description-row"><span class="my-cv__description-key">{{ currentDescription.objective }}:</span> <span class="my-cv__description-value">{{ currentCv.objective }}</span></p>
      <ul class="my-cv__list_column"><span class="my-cv__description-key">{{ currentDescription.education }}:</span> 
        <li v-for="(ed,index ) in currentCv.education" :key="index">{{ ed }}</li>
      </ul>
      <ul class="my-cv__list_column"><span class="my-cv__description-key">{{ currentDescription.workExperience }}:</span> 
        <li v-for="(exper,index ) in currentCv.workExperience" :key="index">{{ exper }}</li>
      </ul>
      <ul class="my-cv__list_row"><span class="my-cv__description-key">{{ currentDescription.skills }}:</span> 
        <li class="my-cv__skill-item" v-for="(skill,index ) in currentCv.skills" :key="index">{{ skill }}</li>
      </ul>
      <ul class="my-cv__list_column"><span class="my-cv__description-key">{{ currentDescription.additionalEducation }}:</span> 
        <li class="my-cv__additional-item"  v-for="(add,index ) in currentCv.additionalEducation" :key="index"><a :href="add.certificateUrl" target="blank">{{ add.name }}</a></li>
      </ul>
      <p class="my-cv__description-row"><span class="my-cv__description-key">{{ currentDescription.aboutMe }}:</span> <span class="my-cv__description-value">{{ currentCv.aboutMe }}</span></p>
    </section>
    <section class="my-cv__section">
      <ul class="my-cv__list_column"><span class="my-cv__description-key">{{ currentDescription.myRepos }}:<span>{{ repos?.length }}</span></span> 
        <li class="my-cv__repos-item"  v-for="(repo,index ) in repos" :key="index"><span class="my-cv__description-key">{{ currentDescription.name }}</span><span class="my-cv__description-value"><a :href="repo.html_url" target="blank">{{ repo.name }}</a></span> <span class="my-cv__description-key">{{ currentDescription.language }}</span><span class="my-cv__description-value">{{ repo.language }}</span> <span class="my-cv__description-key">{{ currentDescription.createdAt }}</span> <span class="my-cv__description-value">{{ new Date(repo.created_at).toLocaleDateString() }}</span></li>
      </ul>
    </section>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import myCv from '../assets/db/myCv'
import type {Repos} from '../types/repos'
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
        aboutMe: "Обо мне",
        portfolio: "Портфолио",
        myRepos: "Мои репо",
        name: "Название",
        language: "Язык",
        createdAt: "Создан"

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
        aboutMe: "About me",
        portfolio: "Portfolio",
        myRepos: "My repos",
        name: "Name",
        language: "Language",
        createdAt: "Created at"

    }
}
const repos = ref<Repos[]>()
const currentLanguage = ref("en")
  const languageCheckbox = ref(false)
  const switchLanguage = () => {
    console.log(currentLanguage.value,"currentLanguage.value")
    if(currentLanguage.value === "en") {
      currentLanguage.value = "ru"
    }else {
      currentLanguage.value = "en"
    }
    // language.value === "en" ? language.value = "ru" : language.value = "en"
  }
const currentCv = computed<CVInfo>(() => myCv[currentLanguage.value as keyof CV])
const currentDescription = computed(() => descriptionMap[currentLanguage.value as keyof typeof descriptionMap])
onMounted(() => {
  (async () => {
    // const resp = await fetch("https://api.github.com/users/crecker05ru/repos")
    // console.log(resp)
    // const body = await resp.json()
    // repos.value = body
    // console.log(body)
    // const resp1 = await fetch("https://api.github.com/repos/crecker05ru/abduragimov-cv")
    // const body1 = await resp1.json()
    // console.log(body1)
    // const resp1 = await fetch("https://api.github.com/repos/crecker05ru/abduragimov-cv/stats/code_frequency")
    const reposData = localStorage.getItem("reposData")
    const updatedData = localStorage.getItem("updatedDate")
    const currentTime = Date.now()
    const diff = currentTime - Number(updatedData)
    const hour = 1000* 60 * 60 
    console.log('diff',diff)
    console.log('hour',hour)
    console.log('diff > hour',diff > hour)
    if(reposData){
      repos.value = JSON.parse(reposData) as Repos[]
    }else {
    const resp = await fetch("https://api.github.com/users/crecker05ru/repos?sort=created&direction=desc")
    // const resp = await fetch("https://api.github.com/users/crecker05ru/repos")
    console.log(resp)
    const body = await resp.json()
    repos.value = body
    const updatedDate = Date.now()
    console.log('body',body)
    localStorage.setItem("updatedDate",String(updatedDate))
    localStorage.setItem("reposData",JSON.stringify(body))
    }

  })()
})
</script>
<style lang="scss" scoped>
.my-cv {
  &__description-row {
    margin-bottom: 4px;
  }
  &__description-key {
    font-weight: 800;
    color: var(--secondary-text-color);
    margin-right: 12px;
  }
  &__section {
    margin-bottom: 3rem;
  }
  // &__language-switch {
  //   display: absolute;
  // }
  &__switch {
    display: block;
    position: relative;
    width: 42px;
    height: 22px;
    background-color: rgb(110, 110, 110);
    border-radius: 12px;
  }
  &__switch-checked {
    background-color: #c7c7c7;
    & .my-cv__switch-span{
      transform: translate(150%,0);
      background-color: #0691ff;
    }
    & .my-cv__switch-lang-en {
      display: block;
    }
    & .my-cv__switch-lang-ru {
      display: none;
    }
  }
  &__switch-lang-en {
    display: none;
    position: absolute;
    top: 4px;
    left: 4px;
    color: #1b1b1b;
    line-height: 1;
    font-size: 14px;
    font-weight: 800;
  }
  &__switch-lang-ru {
    display: block;
    position: absolute;
    top: 4px;
    right: 4px;
    color: #fff;
    line-height: 1;
    font-size: 14px;
    font-weight: 800;
  }
  &__switch-span { 
    display: block;
    position: absolute;
    left: 0;
    top: 2px;
    background-color: #fff;
    border-radius: 50%;
    width: 17px;
    height: 17px;
    z-index: 1;
  }
  &__switch-input {
    width: 0;
    height: 0;
    appearance: none;
    opacity: 0;
  }
  &__photo {
    position: relative;
  }
&__profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}
&__skill-item {
  padding: 2px 4px;
    background-color: var(--item-background-color);
    color: var(--item-text-color);
    border-radius: 4px;
  }
  &__additional-item {
    width: fit-content;
    padding: 2px 4px;
    box-shadow: 0px 1px 2px 1px #575757;
    border-radius: 4px;
    transition: color,background-color 0.2s ease;
    &:hover {
      background-color: var(--link-hover-color);
      color: var(--item-text-color);
    }
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