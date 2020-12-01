import { defineComponent, reactive,ref } from 'vue';
const img = require("./assets/logo.png"); //eslint-disable-line
export default defineComponent({
  setup() {
    const state = reactive({
      name: "Tina",
    });

    const nameRef = ref(1);
    // setInterval(() => {
    //   state.name += "1";
    //   nameRef.value += 1;
    // },2000);
    return () => {
      const number = nameRef.value;
      console.log(state.name)
      return (
        <div >
          <img src={img}/>
          <p>{state.name + number}</p>
          <input type="text" v-model={state.name}/>
        </div>
      );
    };
  },
});