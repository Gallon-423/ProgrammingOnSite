import {ref} from "vue";

const hiss = ref([]);
const countt = ref(0);

export function Success_storage(str1,str2){
    countt++;
    localStorage.setItem('第' + {countt} + '次',str1 + "  " + str2);
    hiss.value.push(str1 + "  " + str2);
}

export {hiss};