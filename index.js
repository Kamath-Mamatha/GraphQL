import express from 'express'
import resolvers from './resolvers'
import schema from './schema'

import {graphqlHTTP} from 'express-graphql'
import { graphql } from 'graphql'

const app = express()

app.get("/",(req,res) => {
    res.send("Up and and running with graphql")
})

const root = resolvers;

app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true

}))
app.listen(8082,() => console.log("listening at 8082"))
