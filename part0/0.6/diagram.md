```mermaid

sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Writes a note and clicks "Save"

    Browser->>Server: POST /new_note with note data
    activate Server
    Server-->>Browser: 201 Created (Note saved successfully)
    deactivate Server

    Browser->>Browser: Update the SPA with new note
    
    Note right of Browser: The new note is displayed in the SPA