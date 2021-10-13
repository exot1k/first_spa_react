export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
export type statusType = 'pending' | 'ready' | 'error';

type MessageReceivedSubscribeType = (messages: ChatMessageType[]) => void;
type StatusChangedSubscribeType = (status: statusType) => void;
const subscribers = {
    'messages-received': [] as Array<MessageReceivedSubscribeType>,
    'status-changed': [] as Array<StatusChangedSubscribeType>
}

type eventsNamesTypes = 'messages-received' | 'status-changed'

let ws: WebSocket | null

const closeHandler = () => {
    notifySubscribersAboutStatus('pending')
    setTimeout(createChanel, 3000);
}

const openHandler = () => {
    notifySubscribersAboutStatus('ready')
}

const errorHandler = () => {
    notifySubscribersAboutStatus('error')
}

const messageHandler = (e: MessageEvent) => {
    let newMessages = JSON.parse(e.data);
    subscribers['messages-received'].forEach(s => s(newMessages))
}

const cleanUP = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
    ws?.close()
}
const notifySubscribersAboutStatus = (status: statusType) => {
    subscribers["status-changed"].forEach(s => s(status))
}

function createChanel() {
    cleanUP();
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
}

export const chatApi = {
    subscribe(eventName: eventsNamesTypes, callback: MessageReceivedSubscribeType | StatusChangedSubscribeType) {
        // @ts-ignore
        subscribers[eventName].push(callback)
        return () => {
            // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
            cleanUP();
        }
    },
    sendMessage(message: string) {
        ws?.send(message)
    },
    start() {
        createChanel()
    }
}

