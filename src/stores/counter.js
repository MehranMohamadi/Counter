import {defineStore} from 'pinia'
import {ref} from "vue";

export const useCounterStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 0,

    }),
    actions:{
        increaseCount(){
            this.count++
        },
        decreaseCount(){
            this.count--
        }
    },
    getters:{
        odd0rEven:(state)=>{
            return (state.count % 2 === 0) ? 'Even' : 'Odd'
        }
    }
})
