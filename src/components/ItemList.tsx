import React, { useEffect, useState } from "react"
import styled from "styled-components"

interface Item {
  id: number
  title: string
  description: string
  image: string
}

const ItemWrapper = styled.div`
  margin: 1em;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 50px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0.5;
`

const Title = styled.h2`
  font-size: 1em;
  text-align: center;
  color: #333;
  flex: 0.2;
  margin: 10px 0;
`

const Container = styled.h2`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
`

const Description = styled.p`
  text-align: center;
  flex: 0.2;
  margin: 10px 0;
`

const ItemImage = styled.img`
  max-width: 100%;
  height: 200px;
  flex: 0.6;
  object-fit: cover;
  margin: 10px 0;
`

const ItemsList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/items")
      const data = await response.json()
      setItems(data)
    }
    fetchData()
  }, [])

  return (
    <Container>
      {items.map((item) => (
        <ItemWrapper key={item.id}>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
          <ItemImage src={item.image} alt={item.title} />
        </ItemWrapper>
      ))}
    </Container>
  )
}

export default ItemsList
