import { Card, CardBody } from "reactstrap"
import { useCart } from "@/hooks/useCart"
import Header from "./Header"

const CartTotal = () => {
    const { cart } = useCart()
  
    return (
      <>
        <Card className="ms-auto" style={{ maxWidth: '15rem' }}>
        <CardBody className="d-flex justify-content-between">
          <strong>
            Total:
          </strong>
          <span>
            R$ {cart.reduce((total, product) => total + product.price, 0)}
          </span>
        </CardBody>
      </Card>
      
      </>
    )
  }
  
  export default CartTotal