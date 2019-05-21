const App = (function(ItemCtrl, UICtrl){
    const loadEventListeners = function(){
        const UISelectors = UICtrl.getSelectors();
        // add items event
        document.querySelector(UISelectors.addBtn).addEventListener('click' , itemAddSubmit)
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick)
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit)
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit)
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick)
        document.querySelector(UISelectors.backBtn).addEventListener('click', function(e){
            e.preventDefault()
            UICtrl.clearEditState()
            UICtrl.clearInput()
        })

        //disable enter
        document.addEventListener('keypress', function(e){
            if(e.keyCode === 13 || e.which === 13){
                e.preventDefault()
                return false
            }
        })

    }
    
    const clearAllItemsClick = function(e){
        e.preventDefault()

        // delete all data from itemjs
        ItemCtrl.clearAllItems()

        // remove from ui
        UICtrl.removeItems()
        const totalCalories = ItemCtrl.getTotalCalories()
        UICtrl.totalCalories(totalCalories)
        UICtrl.clearEditState()
        UICtrl.clearInput()
        UICtrl.hideList()
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
        e.preventDefault()
        
        const input = UICtrl.getItemInput();

        //update item
        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

        //update ui

        UICtrl.updateListItem(updatedItem)

        const totalCalories = ItemCtrl.getTotalCalories()
        UICtrl.totalCalories(totalCalories)
        UICtrl.clearEditState()
        UICtrl.clearInput()
    }

    const itemEditClick = function(e){
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
    const itemDeleteSubmit = function(e){
        e.preventDefault()
        const currentItem = ItemCtrl.getCurrentItem()

        // delete from item.js
        ItemCtrl.deleteItem(currentItem.id);
        // delete from UI
        UICtrl.deleteItem(currentItem.id)
        //remove total calories
        const totalCalories = ItemCtrl.getTotalCalories()
        UICtrl.totalCalories(totalCalories)

        UICtrl.clearInput();

       
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