import store from "./store";


export const addToCart = (index) => {
    
    const dishChoosen = store.getState().fuxion[index];
    const addDish =   store.getState().fuxionUser .concat ( {
        price: dishChoosen.price,
        image: dishChoosen.image,
        name: dishChoosen.name
    } );
    // store.getState().foodUser.push(dishChoosen);
    store.setState({
        fuxionUser: addDish
    });

}
export const totalPrice = () =>{
    let contador = 0;
   
    for (var i of store.getState().fuxionUser){
        contador += i.price;
        console.log(contador);
    }
    return contador;
}