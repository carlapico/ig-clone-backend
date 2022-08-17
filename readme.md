# Typescript API Setup 


## Install express libraries 
```
npm i express cors
```
## To make it run on npm start: 
In scripts: 
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "ts-node api.ts",
    "dev": "nodemon api.ts"
  },
```

## Create a .gitignore file
In the .gitignore file put in: 
1. node_modules 
2. credentials.ts


## Import tsconfig.json 
I imported this from my desktop 

## Install the types for express and cors
```
npm i @types/express cors
```

## Install MongoDB 
```
npm i mongodb
```
## In the credentials.ts 
```
export const uri: string= ''
```


## In the api.ts
```
import express, {Request, Response} from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req:Request, res:Response) => {
    res.status(200).send("hello")
})

const PORT = 5001
app.listen(PORT, () => {
    console.log("we started on port", PORT)
})
```

# Enhancements

## To create a new branch in git: 
```
git checkout -b enhancements
```

## Adding Directories in the SRC to avoid coupling 
### /src
    /db 
        db.ts
    /models
        photos-models.ts
    /routers
        photos-routers.ts
    /services
        photos-services.ts
    index.ts


```
mkdir sr src/models src/services src/db src/routers
```