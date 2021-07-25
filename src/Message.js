// 2. Создать компонент Message, отображающий переданный ему пропсом текст.
// 3. Изменить компонент App так, чтобы тот рендерил Message и передавал ему пропсом текст (константу).

import './Message.css';

function Message(props) {
    return (
        <>
            <div className = "Message"> Привет будущий {props.specialty}!!!</div>
            <p className = "location">Ты на {props.location} </p>
        </>
    
    )
}

export default Message;