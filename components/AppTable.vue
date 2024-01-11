<template class="app-table">
        <div class="app-table__title"><span class="app-table__description-key">{{ title }}:<span>{{ values?.length }}</span></span></div>
      <table class="app-table__table app-table-table">
        <thead class="app-table-table__header">
          <tr class="app-table-table__row">
            <th class="app-table-table__header-cell cell__name" v-for="(key,index) in keys">{{ key }}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="app-table-table__row" v-for="(val,index ) in values" :key="index">
          <td class="app-table-table__cell cell__name"><a class="cell__link" :href="val.html_url" target="blank">{{ val.name }}</a></td>
          <td class="app-table-table__cell cell__language"><span class="cell__language-text" :class="val.language" v-if="val.language">{{ val.language }}</span></td>
          <td class="app-table-table__cell cell__created" >{{ new Date(val.created_at).toLocaleDateString() }}</td>
          <td class="app-table-table__cell cell__description"></td>
        </tr>
        </tbody>
      </table>

</template>
<script setup lang="ts">
defineProps<{
keys: string[];
values: any[];
title: string;
}>()

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
        createdAt: "Создан",
        description: "Описание",
        technologies: "Технологии"

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
        createdAt: "Created at",
        description: "Description",
        technologies: "Technologies"

    }
}
</script>
<style lang="scss" scoped>
.app-table {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 28px;
  &__row {
    display: flex;
    width: 100%;
    margin-bottom: 8px;
    border-bottom: 1px solid var(--main-text-color);
  }
  &__cell,&__header-cell {
    display: block;
    padding-left: 4px;
    padding-right: 4px;
    flex: 1 1 auto;
    min-width: 20px;
    max-width: 24%;
    overflow: hidden;
    @media screen and (max-width: $tablet) {
      min-width: 60px;
      font-size: 13px;
  }
    @media screen and (max-width: $mobile) {
      min-width: 40px;
      font-size: 12px;
  }
  }
.cell {
  &__default {
    min-width: 120px;
    transition: color ease 1s 1s;
    @media screen and (max-width: $tablet) {
      min-width: 700px;
    }
    @media screen and (max-width: $mobile) {
      min-width: 40px;
    }
  }
  &__name {
    min-width: 160px;
    transition: color ease 1s 1s;
    @media screen and (max-width: $tablet) {
      min-width: 100px;
    }
    @media screen and (max-width: $mobile) {
      min-width: 60px;
    }
  }
  &__language {
    text-align: center;
    transition: color ease 1s 1s;
  }
  &__language-text {
    display: inline-block;
    width: fit-content;
    text-align: center;
    padding: 2px 4px;
    border-radius: 4px;
    filter: brightness(1.3);
  }
  &__created {
max-width: 100px;
text-align: center;
transition: color ease 1s 1s;
  }
  &__description {
    min-width: 120px;
    transition: color ease 1s 1s;
    @media screen and (max-width: $tablet) {
      min-width: 100px;
    }
    @media screen and (max-width: $mobile) {
      min-width: 60px;
    }
  }
  &__link {
    display: block;
    padding: 2px 4px;
    max-width: 80%;
    border-radius: 4px;
    &:hover {
      background-color: var(--link-hover-color);
      color: var(--item-text-color);
    }

  }
}
}
</style>