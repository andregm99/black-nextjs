import { NextPage } from "next";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart:NextPage= () =>{
    return(
        <>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link rel="icon" href="/favicon.ico" />
        <Header/>
        <h1>carrinho</h1>
        </>
    )
}
export default Cart