const App = (function(ItemCtrl, UICtrl){
    const loadEventListeners = function(){
        const UISelectors = UICtrl.getSelectors();
        // add items event
        document.querySelector(UISelectors.addBtn).addEventListener('click' , itemAddSubmit)
        document.querySelector(UISelectors.itemList).addEventListener('click', itemUpdateSubmit)

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

    const itemUpdateSubmit = function(e){
        if(e.target.classList.contains('edit-item')){
            const listID = e.target.parentNode.parentNode.id
            const listArr = listID.split('.')
            const id = parseInt(listArr[0])

            //get item to edit
            const itemToEdit = ItemCtrl.getItemById(id)
            //set item
            ItemCtrl.setCurrentItem(itemToEdit)
            //add item to ui
            UICtrl.addItemToUI()
        }
        e.preventDefault()
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
            UICtrl.clearEditState()
            loadEventListeners()
           
        }
    }
})(ItemCtrl, UICtrl)

App.init()