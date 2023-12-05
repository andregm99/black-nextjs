import { NextPage } from "next";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartTable from "./components/CartTable";
import { Container } from "reactstrap";
import CartTotal from "./components/CartTotal";
const Cart:NextPage= () =>{
    return(
        <>
        <Header/>
        <main>
        <Container className="mb-5">
            
          <h1 className="my-5">
            Carrinho
          </h1>

          <CartTable />
          <CartTotal />
        </Container>
      </main>
        </>
    )
}
export default Cart