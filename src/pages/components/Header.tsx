import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/" passHref>
          Início
      </Link>
      <Nav className="flex-row" navbar>
        <Link href="/products">
            Produtos
        </Link>
        <Link href="/cart">        
            Carrinho
        </Link>
      </Nav>
    </Navbar>
  )
}

export default Header