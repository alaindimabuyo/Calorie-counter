const UICtrl = (function(){
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemName: '#item-name',
        itemCalories: '#item-calories',
        totalCalories: '.total-calories'

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
                <a href = "#" class = "secondary-content"><i class="fa fa-edit"></i></a>
            `
            //insert
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
            
        },
        clearInput: function(){
            document.querySelector(UISelectors.itemName).value = '';
            document.querySelector(UISelectors.itemCalories).value = '';
        },
        hideList: function(){
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        totalCalories: function(total){
            document.querySelector(UISelectors.totalCalories).textContent = total
        }

    }
})()
