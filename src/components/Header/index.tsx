import { Headerbar, LinkItem, Links, LinkCart } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

export const Header = () => (
  <Headerbar>
    <div>
      <img src={logo} alt="logo" />
      <nav>
        <Links>
          <LinkItem>
            {' '}
            <a href="#"> Categorias</a>
          </LinkItem>
          <LinkItem>
            <a href="#"> Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#"> Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>

    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="carrinho" />
    </LinkCart>
  </Headerbar>
)
