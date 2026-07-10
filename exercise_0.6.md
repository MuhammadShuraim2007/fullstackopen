## Exercise 0.6 — New Note in Single Page App

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: user writes note and clicks save button

    Note right of browser: spa.js handles the submit event
    Note right of browser: page does not reload (preventDefault)

    browser->>server: POST /new_note_spa (json)
    activate server
    server-->>browser: 201 created
    deactivate server

    Note right of browser: note is added to page without reloading
```