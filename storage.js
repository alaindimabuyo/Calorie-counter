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
        }
    }
})();