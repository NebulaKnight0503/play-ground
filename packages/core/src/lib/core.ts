export const core = () => {
    return "core";
}

export const logMessage = (message: string) => {
    console.log(message.toUpperCase());
}

export const logMessageLowercase = (message: string) => {
    console.log("lowercase: " + message.toUpperCase());
}