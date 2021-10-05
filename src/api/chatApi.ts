export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

let subscribers = [] as Array<(messages: ChatMessageType[]) => void>

let ws: WebSocket | null

const closeHandler = () => {
    setTimeout(createChanel, 3000);
}

const messageHandler = (e: MessageEvent) => {
    let newMessages = JSON.parse(e.data);
    subscribers.forEach(s => s(newMessages))
}

function createChanel() {
    ws?.removeEventListener('close', closeHandler)
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)


}

export const chatApi = {
    subscribe(callback: (messages: ChatMessageType[]) => void) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
            ws?.removeEventListener('close', closeHandler)
            ws?.removeEventListener('message', messageHandler)
            ws?.close()
        }
    },
    sendMessage(message: string) {
        ws?.send(message)
    },
    start() {
        createChanel()
    }
}

