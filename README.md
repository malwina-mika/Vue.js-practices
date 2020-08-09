# Vue.js Poster Shop

Source code for the case-study project from the course [Build Your First Vue.js App](https://courses.vuejsdevelopers.com/p/build-your-first-vue-js-app?utm_source=github-vjd
)

#### Demo

See the completed project here: [http://poster-shop.vuejsdevelopers.com/](http://poster-shop.vuejsdevelopers.com/)

#### Pre-installation

Ensure [Node.js  >=4](https://nodejs.org/en/download/), [NPM](https://docs.npmjs.com) and [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) are installed on your system
 
#### Installation

     
1. Clone the repository on your local file system
    
        ```
        cd /path/to/install/location
        
        git clone https://github.com/malwina-mika/vue.js-practices.git
        ```


2. Install dependencies

    ```
    npm install
    ```
    
3. Start project

    ```
    npm run serve
    ```

4. Your site will be available at *localhost:3000*.

## Troubleshooting

Here are some common mistakes people make, check these before filing an issue:

- `EADDRINUSE :::3000`. You already have another application using port 3000. Either end it, or change manually set the `PORT` environment variable to resolve the conflict e.g. `3001`
- Ensure you have a version of Node >= 4

```
node -v
```

