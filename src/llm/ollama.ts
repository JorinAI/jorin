import ollama from 'ollama';

// bun doesn't connect to localhost. https://github.com/oven-sh/bun/issues/1425
const URL = 'http://127.0.0.1:11434/v1/chat/completions';

// ollama supports openai's API but not function calling
const ollama_openai = async (message: string) => {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'llama3',
            "messages": [
                {
                    "role": "user",
                    "content": message
                }
            ],
        }),
    });

    return (await response.json()).choices[0].message.content;
};


const ollama_llm = async function (message: string) {
    return (await ollama.chat({
        model: 'llama3',
        messages: [
            { role: 'user', content: message }
        ],
    })).message.content;    
};

export default ollama_llm;
