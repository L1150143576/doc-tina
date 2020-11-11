<template>
  <div>
    <div id="app">
      <div>{{ error }}</div>
      <div>{{ a }}</div>
      <div>{{ increase }}</div>
      <button @click="handleIncrease">点击我</button>
      <div>{{ arr }}</div>
      <Suspense>
        <template #default>
          <!-- <async-show /> -->
          <dog-show />
        </template>
        <template #fallback>
          <h1>Loading !...</h1>
        </template>
      </Suspense>

      <h1 v-if="loading">Loading...</h1>
      <img v-if="loaded" :src="result.message" />
      <div>鼠标点击坐标：{{ x }}-{{ y }}</div>
      <button @click="openModal">Open Modal</button><br />
      <modal :isOpen="modalIsOpen" @close-modal="onModalClose">
        My Modal !!!!</modal
      >
    </div>
  </div>
</template>
<script lang="ts">
import { ref, computed, reactive, toRefs, onErrorCaptured } from "vue";
import useMousePosition from "./hooks/useMousePosition";
import userURLLoader from "./hooks/useURLLoader";
import Modal from "./components/Modal.vue";
// import AsyncShow from "./components/AsyncShow.vue";
import DogShow from "./components/DogShow.vue";
interface DataProps {
  a: number;
  handleIncrease: () => void;
  increase: number;
  arr: number[];
  Person: {
    name?: string;
  };
}
export default {
  name: "App",
  setup() {
    // const a = ref(1);
    // const increase = computed(() => {
    //   return a.value + 2;
    // });
    // const handleIncrease = () => {
    //   a.value++;
    // };
    // return {
    //   a,
    //   increase,
    //   handleIncrease,
    // };
    const error = ref(null);
    onErrorCaptured((e: any) => {
      error.value = e;
    });
    const data: DataProps = reactive({
      a: 0,
      arr: [1, 2, 3],
      increase: computed(() => {
        return data.a + 2;
      }),
      Person: {},
      handleIncrease: () => {
        data.a++;
      },
    });
    data.arr[2] = 4;
    const { x, y } = useMousePosition();
    const { result, loaded, loading } = userURLLoader(
      "https://dog.ceo/api/breeds/image/random/1"
    );
    const modalIsOpen = ref(false);
    const openModal = () => {
      modalIsOpen.value = true;
    };
    const onModalClose = () => {
      modalIsOpen.value = false;
    };

    const refData = toRefs(data);
    return {
      ...refData,
      x,
      result,
      loading,
      loaded,
      y,
      modalIsOpen,
      openModal,
      onModalClose,
      error,
    };
  },
  components: {
    Modal,
    // AsyncShow,
    DogShow,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
