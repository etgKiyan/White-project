const PROXY_CONFIG = [
    {
        context: [
            '/projects',
        ],
        target: "http://localhost:8081",
        secure: true
    }
]

module.exports = PROXY_CONFIG;