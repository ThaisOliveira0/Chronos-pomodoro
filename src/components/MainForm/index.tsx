import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";

export function MainForm() {
    return (

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
                <p>Próximo intervalo é de 25 min</p>
            </div>

            <Cycles></Cycles>

            <DefaultButton icon={<PlayCircleIcon />} color='green' />
        </form>
    )
}
