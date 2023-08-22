
const expenseForm = document.querySelector('#expenseForm');
const amount= document.querySelector('#amount');
const description= document.querySelector('#description');
const category= document.querySelector('#category');
const userList= document.querySelector('#items');



expenseForm.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();
    const userData={
        userAmount:`${amount.value}`,
        userDescription:`${description.value}`,
        userCategory:`${category.value}`
    }
    userDataString= JSON.stringify(userData);
    //adding element to local storage
    localStorage.setItem(`${amount.value}`,`${JSON.stringify(userData)}`);
    
    //adding element to browser
    const li = document.createElement(`li`);
    li.className=`list-group-item-light`;
    li.innerText=`Amount ${amount.value} Description ${description.value} Category ${category.value} `

    //edit btn
    const editbtn= document.createElement(`button`);
    editbtn.className=`btn btn-success editbtn`;
    editbtn.setAttribute("type","submit");
    editbtn.setAttribute("id",`${userDataString}`);
    editbtn.innerHTML=`Edit`;

    //delebtn 
    const delbtn= document.createElement(`button`);
    delbtn.className=`btn btn-danger delbtn`;
    delbtn.setAttribute("type","submit");
    delbtn.setAttribute("id",`${userDataString}`);
    delbtn.innerHTML=`Delete`;
   // appending
    li.appendChild(editbtn);
    li.appendChild(delbtn);
    userList.append(li);
    console.log(li);
}

// create delete function 
userList.addEventListener('click', onDelete);

function onDelete(e) {
    e.preventDefault();
    if (e.target.classList.contains('delbtn')) {
        console.log(`deleet`);
        // remove from local storage
        const btnId = JSON.parse(e.target.id).userAmount;
        localStorage.removeItem(`${btnId}`);

        // //delete value from browser
        e.target.parentElement.remove();

    }
    if (e.target.classList.contains('editbtn')) {
        console.log(`deditttt`);
        // //remove from local storage
        const btnId = JSON.parse(e.target.id);
        localStorage.removeItem(`${btnId.userAmount}`);
        
        // //regain name and phone number
        const lists = document.querySelectorAll('input');
        // lists[0].value = `${btnId.userName}`;
        // lists[1].value =`${btnId.userEmail}`;
        // lists[2].value = `${btnId.userPhone}`;
        // //delete value from browser
        e.target.parentElement.remove();
    }
}


