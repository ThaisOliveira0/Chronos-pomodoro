import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';


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
                <form action="" className="form">
                    <div className="formRow">
                        <DefaultInput
                            type='text'
                            id='meuInput'
                            labelText='Task'
                            placeholder="Insira a sua tarefa "
                        />
                    </div>
                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <Cycles></Cycles>

                    <DefaultButton icon={<PlayCircleIcon/>} color='red'/>
                </form>

            </Container>
            <Container>
                <Footer/>
            </Container>
        </>
    );
}

