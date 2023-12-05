import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/" passHref style={{color:"white",textDecoration:'none'}}>
          Início
      </Link>
      <Nav className="flex-row" navbar>
        <Link href="/products" style={{marginRight:9,color:"white",textDecoration:'none'}}>
            Produtos
        </Link>
        <Link href="/cart" style={{color:"white",textDecoration:'none'}}>        
            Carrinho
        </Link>
      </Nav>
    </Navbar>
  )
}

export default Header