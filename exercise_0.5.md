## Exercise 0.5 — Single Page App Diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET /main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET /spa.js
    activate server
    server-->>browser: JavaScript file 
    deactivate server

    Note right of browser: Browser runs spa.js

    browser->>server: GET /data.json
    activate server
    server-->>browser: JSON data
    deactivate server

    Note right of browser: JS renders notes using DOM, no page reload
```