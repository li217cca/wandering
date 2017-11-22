import { setTimeout } from "timers";


export const waitTime = async (time = 3000) => {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}