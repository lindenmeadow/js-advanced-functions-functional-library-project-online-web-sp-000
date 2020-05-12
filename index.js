const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const items = (collection instanceof Array)? collection : Object.values(collection);

      for(const item of items){
        callback(item);
      }
      return collection;
    },

    map: function(collection, callback) {
      const items = (collection instanceof Array)? collection : Object.values(collection);
      const newCollection = []

        for(const item of items){
          newCollection.push(callback(item));
        }
        return newCollection;
    },

    reduce: function(collection, callback, accumulator) {
      let items = collection;

      if(!accumulator){
        accumulator = items[0];
        items =items.slice(1)
      }

      for(const item of items){
        accumulator = callback(accumulator, item, items)
      }
      return accumulator;
    },

    find:function(collections, callback){
      for (const item of collections){
        if(callback(item)){
          return item;
        }
      }
    },
    filter:function(collection, callback){
      const matches = [ ];
      collection.filter(item => callback(item) ? matches.push(item): item)
      return matches
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
