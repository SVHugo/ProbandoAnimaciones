
const objItemsProductos ={
    items: 'items-girar'
}
function mover_imagen(){
    let imagen_animation = document.getElementById('imagen');
    let position_obj_imagen = imagen_animation.getBoundingClientRect().top;
    let tamaño_pantalla = window.innerHeight/3;
    if (position_obj_imagen < tamaño_pantalla){
        imagen_animation.style.animation= "mover_imagen 1s ease-in forwards";
    }
    
}
function girar_item_producto(e){
    let productos = document.querySelector(".container_productos");
    const productos_items = document.querySelectorAll(".container_productos div")

    let position_obj_items = productos.getBoundingClientRect().top;
    console.log(position_obj_items)
    let tamaño_pantalla = window.innerHeight/1.7;
    
    if (position_obj_items < tamaño_pantalla){
        productos_items.forEach((element,index) => {
            for(let key in objItemsProductos){
                console.log(element.classList.contains(key))
                if(element.classList.contains(key)){
                    element.classList.add(objItemsProductos[key]);
                }
            }
        });

        
    }
    
}
window.addEventListener('scroll',function(){
    mover_imagen();
    girar_item_producto();
    


})