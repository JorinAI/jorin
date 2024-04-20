
// TODO: handle errors

// bun doesn't connect to localhost. https://github.com/oven-sh/bun/issues/1425
const URL = 'http://127.0.0.1:11434/v1/chat/completions';

const ollama = async (message: string) => {
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

    const reply = (await response.json()).choices[0].message.content;
    return reply;
};

export default ollama;
