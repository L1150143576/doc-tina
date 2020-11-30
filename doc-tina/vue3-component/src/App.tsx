import { defineComponent, reactive,ref } from 'vue';
const img = require("./assets/logo.png"); //eslint-disable-line
export default defineComponent({
  setup() {
    const state = reactive({
      name: "Tina",
    });

    const nameRef = ref(1);
    setInterval(() => {
      state.name += "1";
      nameRef.value += 1;
    },1000);
    return () => {
      const number = nameRef.value;
      return (
        <div >
          <img src={img}/>
          <p>{state.name + number}</p>
        </div>
      );
    };
  },
});