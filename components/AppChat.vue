<template>
  <section class="chat">
    <div class="chat__window">
      <ul class="chat__window__list">
        <li
          class="chat__message"
          v-for="(message, index) in messages"
          :key="index"
        >
        {{ message }}
          <span class="chat__message-username">{{ message.username }}</span
          >: <span class="chat__message-text">{{ message.message }}</span>
        </li>
      </ul>
    </div>
    <input
      class="chat__input"
      v-model="messageInput"
      placeholder="Enter nickname"
      v-if="!isUserConnected"
      @keypress="onNicknameEnter"
    />
    <input
      class="chat__input"
      v-model="messageInput"
      placeholder="Enter text"
      v-else
      @keypress="onInputEnter"
    />
  </section>
</template>
<script setup>
import { ref } from "vue";
const config = useRuntimeConfig()
const messages = ref([]);
const messageInput = ref("");
const isUserConnected = ref(false);
const username = ref("");
const isChatOpened = ref(false);
const socket = ref()
console.log('${process.env.BASE_URL}',config.app.baseURL)
const connect = () => {
  socket.value = new WebSocket(`ws://localhost:3002/echo`);
  socket.value.onopen = () => {
    isUserConnected.value = true;
    const message = {
      event: "connection",
      username: username.value,
      id: Date.now(),
    };
    socket.value.send(JSON.stringify(message));
  };

  socket.value.onmessage = (event) => {
    const message = JSON.parse(event.data);
    messages.value.push(message)
    if (message.event == "connection") {
      messages.value.push(message)
    }else if(message.event == "message"){
      messages.value.push(message)
    }else if(message.event == "close"){
      messages.value.push(message)
    }
  };
  socket.value.onclose = () => {
    // setConnected(false);
    isUserConnected.value = false
    const message = {
      event: "close",
      username: username.value,
      id: Date.now(),
    };
    socket.value.send(JSON.stringify(message));
  };
  socket.value.onerror = () => {};
};

const disconnect = () => {
  socket.value.close();
};

const sendMessage = async (value) => {
  const message = {
    username: username.value,
    message: value,
    id: Date.now(),
    event: "message",
  };
  socket.value.send(JSON.stringify(message));
};

const setMessages = () => {

}

const showChatHandler = () => {
  isChatOpened.value = !isChatOpened.value;
};

const onNicknameEnter = (e) => {
  console.log("e", e);
  if (e.key == "Enter") {
    connect();
  }
};

const onInputEnter = (e) => {
  if (e.key == "Enter") {
    sendMessage(messageInput.value);
  }
};
</script>
<style lang="scss" scoped>
.chat {
  padding: 16px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: +1;
  background-color: var(--main-background-color);
  border-radius: var(--border-radius);

  &__window {
    width: 300px;
    height: 260px;
    border-radius: var(--border-radius);
    border: 1px solid;
    border-color: var(--item-background-color);
    color: var(--main-text-color);
    background-color: var(--gradient-from-color);
  }
  &__input {
    width: 100%;
    height: 36px;
    padding-left: 8px;
    padding-right: 8px;
    // text-overflow: ellipsis;
    // overflow: hidden;
    // -webkit-box-orient: vertical;
    // -webkit-line-clamp: 1;
    // display: -webkit-box;
  }
}
</style>
