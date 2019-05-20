const UICtrl = (function(){
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        itemName: '#item-name',
        itemCalories: '#item-calories',
        totalCalories: '.total-calories',
        listItems: '#item-list li'
    }
    

    return {
        populateItems: function(items){
            let html = '';

            items.forEach(function(item){
                html += `
                    <li class = "collection-item" id= "${item.id}">
                        <strong>${item.name}:</strong>
                        <em>${item.calories} Calories</em>
                        <a href = "#" class = "secondary-content"><i class="fa fa-edit"></i></a>
                    </li>
                `
            })
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getSelectors: function(){
            return UISelectors
        },
        getItemInput: function(){
            return{
                name: document.querySelector(UISelectors.itemName).value,
                calories: document.querySelector(UISelectors.itemCalories).value
            }
        },
        addListItem: function(item){
            document.querySelector(UISelectors.itemList).style.display = 'block';
            const li = document.createElement('li')
            li.className = 'collection-item'
            li.id = `${item.id}`
            li.innerHTML = `
                <strong>${item.name}:</strong>
                <em>${item.calories} Calories</em>
                <a href = "#" class = "secondary-content"><i class="edit-item fa fa-edit"></i></a>
            `
            //insert
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
            
        },
        clearInput: function(){
            document.querySelector(UISelectors.itemName).value = '';
            document.querySelector(UISelectors.itemCalories).value = '';
            document.querySelector(UISelectors.addBtn).style.display = 'block'
        },
        hideList: function(){
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        totalCalories: function(total){
            document.querySelector(UISelectors.totalCalories).textContent = total
        },
        clearEditState: function(){
            document.querySelector(UISelectors.updateBtn).style.display = 'none'
            document.querySelector(UISelectors.deleteBtn).style.display = 'none'
            document.querySelector(UISelectors.backBtn).style.display = 'none'

        },
        showEditState: function(){
            
            document.querySelector(UISelectors.updateBtn).style.display = 'inline'
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline'
            document.querySelector(UISelectors.backBtn).style.display = 'inline'
            document.querySelector(UISelectors.addBtn).style.display = 'none'

        },
        addItemToUI: function(){
            document.querySelector(UISelectors.itemName).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCalories).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState()
        },
        updateListItem: function(item){
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // TURN NODE LIST INTO ARRAY
            listItems = Array.from(listItems)

            listItems.forEach(function(listItem){
                const itemId = listItem.getAttribute('id')
             

                if(itemId === `${item.id}`){
                    document.getElementById(`${itemId}`).innerHTML = `
                        <strong>${item.name}:</strong>
                        <em>${item.calories} Calories</em>
                        <a href = "#" class = "secondary-content">
                            <i class="edit-item fa fa-edit"></i>
                        </a>
                    `
                }else{
                    console.log('something went wrong')
                }
            })
        }

    }
})()
