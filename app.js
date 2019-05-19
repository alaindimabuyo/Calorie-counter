const App = (function(ItemCtrl, UICtrl){
    const loadEventListeners = function(){
        const UISelectors = UICtrl.getSelectors();
        // add items event
        document.querySelector(UISelectors.addBtn).addEventListener('click' , itemAddSubmit)

    }
    
    const itemAddSubmit = function(e){
        
        e.preventDefault()
        const input = UICtrl.getItemInput();
        
        if(input.name !== '' && input.calories !== ''){
            
            const newItem = ItemCtrl.addItem(input.name, input.calories)
            UICtrl.addListItem(newItem)
            //total calories
            const totalCalories = ItemCtrl.getTotalCalories()
            UICtrl.totalCalories(totalCalories)

            UICtrl.clearInput();
        }
    }
    return {
        init: function(){
            const items = ItemCtrl.getItems()
            
            if(items.length === 0){
                UICtrl.hideList()
            }else{
                UICtrl.populateItems(items)
            }

            const totalCalories = ItemCtrl.getTotalCalories()
            UICtrl.totalCalories(totalCalories)
            
            loadEventListeners()
           
        }
    }
})(ItemCtrl, UICtrl)

App.init()