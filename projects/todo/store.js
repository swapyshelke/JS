const store = {
    todos: [
        {
           id: "1",
           title: "compelte task A",
           completed: false
        },
        
        {
           id: "2",
           title: "compelte task B",
           completed: false
        },
        {
           id: "3",
           title: "compelte task C",
           completed: false
        },
    ],
}

const storeHandler = {
   get(target, property) {
      console.log("oh you are trying to get", property);
      return target[property]
   },

   set(target, property, value) {
      console.log(target, property, value);
      console.log("You are trying to set", property);
      target[property] = value;
      return true;
   }
}

const storeProxy = new Proxy(store, storeHandler)

export default storeProxy