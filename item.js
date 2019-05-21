const ItemCtrl = (function(){
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
    //state
    const data = {
        items: [
        ],
        currentItem : null,
        totalCalories : 0
    } 
    return {
        getItems: function(){
            return data.items;
        },
        addItem: function(name,calories){
            let ID;

            if(data.items.length > 0){
                ID = data.items[data.items.length-1].id + 1;
            }else{
                ID = 0
            }

            calories = parseInt(calories)
            newItem = new Item(ID , name , calories)
            data.items.push(newItem)

            return newItem
          
        },
        getTotalCalories: function(){
            let total = 0;

            data.items.forEach(function(item){
                total += item.calories;
            })
            data.totalCalories = total;
            return data.totalCalories;
        },
        logData: function(){
            return data
        },
        getItemById: function(id){
            let found = null
            data.items.forEach(function(item){
                if(item.id === id){
                    found = item;
                }
            });
            return found

        },
        updateItem: function(name, calories){
            //calories to number
            calories = parseInt(calories)

            let found = null;

            data.items.forEach(function(item){
                if(item.id === data.currentItem.id){
                    item.name = name;
                    item.calories = calories
                    found = item;
                }
            })
            return found
        },
        deleteItem: function(id){
            //get id
            const ids = data.items.map(function(item){
                return item.id
            })
            //get index
            const index = ids.indexOf(id)
            data.items.splice(index, 1)
        },
        clearAllItems: function(){
            data.items = []
        },
        setCurrentItem: function(item){
            data.currentItem = item
        },
        getCurrentItem: function(item){
            return data.currentItem
        }
    }
})()