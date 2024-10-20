# Website Issues and Fixes
```
## Issue #X: [Brief Description of the Issue]
- **Status:** [UNRESOLVED]
- **Date:** YYYY-MM-DD
- **Description:**
- **Resolution:**
  - Explain the solution you implemented.
- **Learnings:**
  - What did you learn from this issue?
```

## Issue #1: "Press Start 2P" fontfamily failed to render (on mobile device)
- **Status:** RESOLVED
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


## Issue #2: Project Cards on `About Me` Page Are Unevenly Spaced
- **Status:** RESOLVED
- **Date:** 2024-10-18
- **Description:**
  - The project cards I built on the `About Me` page are bunched up on the left side of the screen. This displeases me; I wish to see them evenly spaced apart on the screen. 
- **Resolution:**
  - Explain the solution you implemented.
- **Learnings:**
  - What did you learn from this issue?



## Issue #3: The footer section on all the pages on my website are overly thick
- **Status:** [UNRESOLVED]
- **Date:** 2024-10-19
- **Description:**
  - I am displeased with appearance of the footer section in all my webpages. The footer section looks too thick to my eyes, I want to make it as slim as possible. However, I don't know how to alter the size of the footer. I attempted enlisting the help of DeepAI but its suggestions didn't help me slim down the footer. I will probably need to dedicate time to learn how to adjust the footer size via my own investigation. 
- **Resolution:**
  - Explain the solution you implemented.
- **Learnings:**
  - What did you learn from this issue?


## Issue #4: Art Gallery images on `Art Projects` Page do not display their captions when they are expanded
- **Status:** [UNRESOLVED]
- **Date:** 2024-10-20
- **Description:**
  - There is an issue with the gallery images within the `Art Project` pages. When you click on one of them, the image expands to a large size. The issue is that the image expands too much, to the point where one cannot see the caption that's supposed to be visible.
- **Resolution:**
  - Explain the solution you implemented.
- **Learnings:**
  - What did you learn from this issue?

  

## Issue #5: Project Cards on `About Me` Page Have Inconsistently Sized Images
- **Status:** [UNRESOLVED]
- **Date:** 2024-10-20
- **Description:**
  - The project cards I built on the `About Me` page have images. I noticed that the images I used are inconsistently sized, which displeases me. I want me to resize them to be a consistent size.
- **Resolution:**
  - Explain the solution you implemented.
- **Learnings:**
  - What did you learn from this issue?