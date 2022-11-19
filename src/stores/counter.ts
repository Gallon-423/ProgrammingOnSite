import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
export const useHistory = defineStore("history", () => {
  const history = ref<{ input: string; output: string }[]>([]);
  var len = localStorage.length;  // 获取长度
  console.log(len) // 输出5
  var arr = new Array(); // 定义数据集
  for(var i = 0; i < len; i++) {
      // 获取key 索引从0开始
      var getKey = localStorage.key(i);
      // 获取key对应的值
      var getVal = localStorage.getItem(getKey as string);
      // 放进数组
      arr[i] = {
          'key': getKey,
          'val': getVal,
      }
    console.log("key==>",getKey)
    console.log("value==>",getVal)
    history.value.push({input:getKey!,output:getVal!})
  }
  const insertHistory = function (i: string, o: string) {
    history.value.push({input:i,output:o})
  }

  
  return { history,insertHistory }
});
