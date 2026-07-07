## Exercise 0.4 — New Note Diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST /new_note
    activate server
    Note right of server: Server saves the new note
    server-->>browser: 302 Redirect to /notes
    deactivate server

    browser->>server: GET /notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET /main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET /main.js
    activate server
    server-->>browser: js file
    deactivate server

    Note right of browser: Browser runs main.js which fetches notes data

    browser->>server: GET /data.json
    activate server
    server-->>browser: JSON data
    deactivate server

    Note right of browser: Browser renders notes on page using DOM
```