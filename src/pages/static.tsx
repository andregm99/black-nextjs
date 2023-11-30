import { GetServerSideProps, GetStaticProps, NextPage } from "next"
import { ReactNode, useEffect, useState } from "react"
import { Col, Container, Row } from "reactstrap"



interface ApiResponse{
    name:string,
    timestamp:Date,
    formattedTimestamp: string;
}

export const getStaticProps:GetStaticProps= async () =>{
    const staticData = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res=>res.json())

    return{
        props:{
            staticData
        }
       
    }
}

const Static: NextPage = (props:{
  children?:ReactNode
  staticData?: ApiResponse // A interrogação significa que é um dado opicional a ser utilizado.
}) => {
    const[clientSideData,setClientSideData]=useState<ApiResponse>()

    useEffect(()=>{
        FetchData()
    },[])

    const FetchData= async () =>{
        const data = await fetch ("/api/hello").then(res=>res.json())
        setClientSideData(data)
    }
  return (
    <Container tag="main">
      <h1 className="my-5">
        Como funcionam as renderizações do Next.js
      </h1>

      <Row>
        <Col>
          <h3>
            Gerado estaticamente durante o build:
          </h3>
          <h2>
            {props.staticData?.timestamp.toString()}
          </h2>
        </Col>

        <Col>
          <h3>
            Gerado no cliente:
            <p>{clientSideData?.formattedTimestamp}</p>
          </h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Static