# Website Issues and Fixes
```
## Issue X: [Brief Description of the Issue]
- **Date:** YYYY-MM-DD
- **Description:**
- **Resolution:**
  - Explain the solution you implemented.
- **Learnings:**
  - What did you learn from this issue?
```

## Issue #1: "Press Start 2P" fontfamily failed to render (on mobile device)
- **Date:** 2024-10-17
- **Description:**
  - The "Press Start 2P" fontfamily fails to render on the anthonyavelar.com website when accessing it through a smartphone or Ipad.

- **Resolution:**
  - Initially I didn't know what was causing the issue, but I knew that the website was supposed be using the "Press Start 2P" font. So I turned to DeepAI and asked this question: `How do I specify in a CSS style sheet file that I want a website to use the "Press Start 2P" fontfamily from Google fonts?`
  - The answer output I received from DeepAI suggested I try adding the following line of code within my `index.html` file: 
  ```<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">``` 
  To be precise, it recommended I place it inside the `<head> section` of the `index.html` file!
  - After inserting the aforemention line of HTML code, it recommended I make an edit to my `styles.css` file:
    ```
    body {
        font-family: 'Press Start 2P', cursive;
    }
    ```

- **Learnings:**
  - I learned that Google has a respository of different fonts I can use! You should explore this website to look for new fonts: https://fonts.google.com/
  - Additionally, Google has a respository of different icons I can use. Also explore this webpage later to look for new icons: https://fonts.google.com/icons

