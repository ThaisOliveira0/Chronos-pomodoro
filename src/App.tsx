import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';


export function App() {

    return (
        <>
    <Container>
        <Logo></Logo>
    </Container>
    <Container>
        <Menu></Menu>
    </Container>
    <Container>
    <CountDown></CountDown>
    </Container>
    <Container>
        <section>FOOTER</section>
    </Container>
           
        </>
    );
}

