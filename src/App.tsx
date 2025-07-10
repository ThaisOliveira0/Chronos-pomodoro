import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading'
import { TimerIcon } from 'lucide-react';

export function App() {

    return (
        <>
            <Heading>
                Ola 1 
                <button>
                    <TimerIcon/>
                </button>
            </Heading>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
                quibusdam necessitatibus! Repudiandae, modi. Accusantium corporis
                laborum debitis blanditiis aliquam pariatur dicta. Veritatis blanditiis
                expedita porro nam nemo. Facere, possimus culpa.</p>
        </>
    );
}

