const btn=document.querySelector("#btn");
let input_text=document.querySelector("#input_text");
let content=document.querySelector("#content");
let list=[];
let count=0;
let flag=false;
function refreshItems()
{    
    content.innerHTML="";
        setTimeout(()=>{
        list.map((val)=>{
               
                flag=true;
                content.insertAdjacentHTML("afterbegin",`<div class="items" id="${val.id}">
                <h3>${val.text}</h3>
               <div class="prop">
  
                   <i class="fas fa-check-square"></i>
                   <i class="fas fa-trash"></i>
                   <i class="far fa-edit"></i>
                   <i class="fas fa-sort-up"></i>
                   <i class="fas fa-sort-down"></i>

               </div>
            </div>`);       
        })
       },1);
    };
const addData=()=>{
    let text=input_text.value.trim();
  refreshItems();
   if(text!="")
   {
        count++;
        list.push({text,id:count});
        
        count++;
        input_text.value=""; 
        input_text.focus();
    }
    else{
        alert("Sorry You Didn't Enter Something!");
    }
    
}
console.log(content.innerHTML);
document.addEventListener("keydown",(e)=>{if(e.key==="Enter")
{
    addData();
}});
btn.addEventListener("click",()=>{
    addData();
    btn.style.transition="all 1s ease";
    if(flag)
    {
        btn.innerHTML='<i class="fas fa-check"></i>';
    function changeIcon(){
        btn.innerHTML='<i class="far fa-paper-plane"></i>';
        flag=false;
    }
    setTimeout(changeIcon,500);
    }   
});
//// delete functionality
content.addEventListener('click', deleteCheck);
function  deleteCheck(e){
const item=e.target;
if(item.classList[1]==="fa-sort-up")
{
    const todo=item.parentElement.parentElement.getAttribute('id');
    console.log(todo);
     let index=-1;
     for(let i=0;i<list.length;i++)
     {
         if(list[i].id==todo)
         {
             index=i;
         }  
     }
     if(index!=list.length-1)
     {
        const temp=list[index+1];
        list[index+1]=list[index];
        list[index]=temp;
        
        refreshItems();
     }
     else{
         alert("No More Work");
     }
}
if(item.classList[1]==="fa-sort-down")
{
    const todo=item.parentElement.parentElement.getAttribute('id');
    console.log(todo);
     let index=-1;
     for(let i=0;i<list.length;i++)
     {
         if(list[i].id==todo)
         {
             index=i;
         }  
     }
     if(index!=0)
     {
        const temp=list[index-1];
        list[index-1]=list[index];
        list[index]=temp;
        
        refreshItems();
     }
     else
     {
         alert("No More Work");
     }
}
if(item.classList[1]==="fa-trash")
{
    const todo=item.parentElement.parentElement;
    todo.classList.add("top-back");
    todo.addEventListener("animationend",()=>todo.remove());
    const newArray=work.filter(({id})=>id!=todo.getAttribute("id"));
    list=newArray;

}
if(item.classList[1]==="fa-check-square")
{
    item.parentElement.parentElement.children[0].style.textDecoration="line-through";
    item.parentElement.parentElement.classList.toggle("center");
}
if(item.classList[1]==="fa-edit")
{
  const change= prompt("Change Your Plan Here!!");
  if(change!="")
  item.parentElement.parentElement.children[0].innerText=change;
  }
  
}
/// to filter options
btn1.addEventListener("click",(e)=>{
    console.log(e.target.value);
    let todos=content.childNodes;
    console.log(todos);
   
});