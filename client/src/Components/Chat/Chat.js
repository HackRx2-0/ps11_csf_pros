import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useState } from 'react'

const Chat = () => {
    const [input, setInput] = useState('')

    const sendMessage = (e) => {
        e.preventDefault()
    }

    return (
        <div className='chat' >

            <div className="chat__messages">

            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize='large' />
                <form>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                    <button className='chat__inputButton' onClick={sendMessage} type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Chat
