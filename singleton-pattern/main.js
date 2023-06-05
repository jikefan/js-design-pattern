class Logger {
    constructor() {
        if (!Logger.instance) {
            this.logs = [];
            this.instance = this;
        }
    }

    log(message) {
        const time = new Date();
        time.setMilliseconds(time.getMilliseconds() + 8 * 60 * 60 * 1000);
        const logMsg = `[Logger ${time.toISOString()}] ${message}`;
        this.logs.push(logMsg);
        console.log(logMsg);
    }

    printLogCount() {
        console.log(`Number of logs: ${this.logs.length}`);
    }
}

(function main() {
    const l = new Logger();
    l.log('hello world');
    l.printLogCount();
})()
