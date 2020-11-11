import { ref } from 'vue'
import axios from 'axios'
function userURLLoader(url: string) {
    const loading = ref(true)
    const loaded = ref(false)
    const result = ref(null)
    const err = ref(null)
    axios.get(url).then((res) => {
        loaded.value = true
        loading.value = false
        result.value = res.data
    }).catch((e) => {
        err.value = e
        // loaded.value = true
        loading.value = false
    })
    return {
        loading,
        loaded,
        result,
        err
    }
}
export default userURLLoader