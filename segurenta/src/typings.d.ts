declare let process: Process;

interface Process {
    env: Env
}

interface Env {
    URL_MIDDLEWARE: string
}

interface GolbalEnvironment {
    env: Process
}