const StorageCtrl = (function(){
    //public methods
    return {
        storeItem: function(item){
            let items;

            // check if theres item
            if(localStorage.getItem('items') === null){
                items = [];
                //push the new item
                items.push(item)
                //set storage
                localStorage.setItem('items', JSON.stringify(items))
            }else{
                items = JSON.parse(localStorage.getItem('items'))

                // push the new item
                items.push(item);
                //reset storage
                localStorage.setItem('items', JSON.stringify(items))    
            }
        },
        getItemsFromStorage: function(){
            let items;
            if(localStorage.getItem('items') === null){
                items = [];
            }else{
                items = JSON.parse(localStorage.getItem('items'))
            }
            return items;
        },
        updateItemStorage: function(updatedItem){
            let items = JSON.parse(localStorage.getItem('items'))

            items.forEach(function(item, index){
                if(updatedItem.id === item.id){
                    items.splice(index, 1, updatedItem)
                }
            })
            localStorage.setItem('items', JSON.stringify(items))
        },
        deleteItemStorage: function(id){
            let items = JSON.parse(localStorage.getItem('items'))

            items.forEach(function(item, index){
                if(id === item.id){
                    items.splice(index, 1)
                }
            })
            localStorage.setItem('items', JSON.stringify(items))
        },
        clearItemsStorage: function(){
            localStorage.removeItem('items')
        }
    }
})();