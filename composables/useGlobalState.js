
const streamChat = ref(true);
const browserIsCompatible = ref(true);

export default function useGlobalState() {


    return {
        streamChat,
        browserIsCompatible
    }
}