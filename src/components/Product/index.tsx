import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome jogo</Titulo>
    <Tag>categoria</Tag>
    <Tag>windows</Tag>
    <Descricao>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus nisi
      sint voluptates quo repudiandae aliquam repellendus veniam. Excepturi
      nobis nam architecto possimus temporibus! Porro facere sequi debitis id
      at? Accusantium.
    </Descricao>
  </Card>
)

export default Product
