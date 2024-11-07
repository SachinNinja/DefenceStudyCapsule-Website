import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faTimes } from '@fortawesome/free-solid-svg-icons';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput('');
            // Add your chatbot response logic here
            if (input.toLowerCase() === 'hi' || input.toLowerCase() === 'hello') {
                setMessages([...messages, { text: input, sender: 'user' }, { text: 'Hello! How can I help you?', sender: 'bot' }]);
            } else if (input.toLowerCase() === 'bye') {
                setMessages([...messages, { text: input, sender: 'user' }, { text: 'Goodbye! Have a great day.', sender: 'bot' }]);
            } else {
                setMessages([...messages, { text: input, sender: 'user' }, { text: 'I am a simple chatbot. I can respond to simple greetings.', sender: 'bot' }]);
            }
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-40">
            <button onClick={toggleChatbot} className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300">
                <FontAwesomeIcon icon={faRobot} />
            </button>
            {isOpen && (
                <div className="bg-white rounded-lg shadow-lg p-4 mt-2 w-80 h-96 flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold">Chatbot</h2>
                        <button onClick={toggleChatbot} className="text-gray-500 hover:text-gray-700 transition duration-300">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {messages.map((message, index) => (
                            <div key={index} className={`my-2 p-2 rounded ${message.sender === 'user' ? 'bg-green-100 text-right' : 'bg-gray-100 text-left'}`}>
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <div className="mt-2 flex">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 p-2 border rounded-l"
                            placeholder="Type a message..."
                        />
                        <button onClick={handleSend} className="bg-green-500 text-white p-2 rounded-r hover:bg-green-700 transition duration-300">
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;