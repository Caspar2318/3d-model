Vite app in react with Three.js, implemented 3D-model to show and let user customizer their own t-shirt, with color and logo or full texture applied.

# live address at: https://3dshirt.cxcspace.com/

could implement more 3d models if needed, but need simple and clear 3d models to do for start level.

start from client side, server side is coped with openAI Dall-E to generate random image for style usage.

npm install vite@latest -- --templatge react client

npm i three @react-three/fiber @react-three/drei maath valtio react-color framer-motion

Install tailwind with Vite, instructions: https://tailwindcss.com/docs/guides/vite

=> create server folder and cd server folder run 'npm init -y' => modify package.json file inside server folder like mine => npm install cloudinary cors dotenv express mongoose nodemon openai

=> tips while deploy backend on 'render.com'

delete package-lock.json file inside server folder

add specific version of node if the deployment failed with info as 'node version should large or equal as 14.20.1" => add an Environment inside render.com Environment as NODE_VERSION 15.0.0 (any version here larger than 14.20.1) then redeploy and it works.
