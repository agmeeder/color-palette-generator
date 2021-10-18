import { reactive, computed } from 'vue'
import Colors from '../types'

const state = reactive({
  colors: {} as Colors
})

const store = {
  colors: computed(() => state.colors),

  setColors: (colors: Colors) => {
    state.colors = colors
  },

  loadColors: async () => {
    const resp = await fetch('/data/colors.json')
    const data = await resp.json()
    if (data) {
      store.setColors(data as Colors)
    }
  }
}

export default store
