import { createContext, useReducer } from "react";

const CartContext=createContext({
    items:[],
    addItem: (item)=>{},
    removeItem:(id)=>{},
    clearCart:()=>{}
})
function cartReducer(state, action)
{
    if(action.type==="ADD_ITEM")
    {   
        const isExistsAlreadyIndex= state.items.findIndex((item)=> item.id===action.item.id);
        
        const allitems=[...state.items];
        if(isExistsAlreadyIndex>-1)
        {  
            const existingItem={...state.items[isExistsAlreadyIndex]}
           const updatedItem= {...existingItem, quantity: existingItem.quantity+1}
           allitems[isExistsAlreadyIndex]=updatedItem;
        } 
        else allitems.push({...action.item, quantity:1});
        return {...state, items:allitems}
    }

    if(action.type==="REMOVE_ITEM")
    {
        const isItemExistIndex=state.items.findIndex((item)=> item.id===action.id);
        const allitems=[...state.items]
        if(isItemExistIndex>-1)
        {
        const existingItem={...state.items[isItemExistIndex]};
        if(existingItem.quantity===1)
        {
        allitems.slice(isItemExistIndex,1);
        }
        else
        {
            const updatedItem={
                ...existingItem,
                quantity: existingItem.quantity-1
            }
            allitems[isItemExistIndex]=updatedItem
        }
        }
    
        return {...state, items:allitems}
    }

    if (action.type === 'CLEAR_CART') {
        return { ...state, items: [] };
      }
    
}
export function CartContextProvider({children})
{   
    const [cart, dispatchCartActions]=useReducer(cartReducer, {items:[]})

    

    function addItem(item)
    {
        dispatchCartActions({type: "ADD_ITEM", item })
    }
    function removeItem(id)
    {
        dispatchCartActions({type:"REMOVE_ITEM", id})
    }
    function clearCart()
    {
        dispatchCartActions({type:"CLEAR_CART"})
    }
    const cartcontext={ items: cart.items, addItem, removeItem, clearCart};
    console.log(cartcontext);
    return <CartContext.Provider value={cartcontext}>{children}</CartContext.Provider>
}

export default CartContext;