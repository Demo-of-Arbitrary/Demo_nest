## nestjs
1. npm i -g @nestjs/cli
2. nest new <project_name>
3. npm i
4. npm start

---

## prisma
1. npm init -y
2. npm install @prisma/cli typescript ts-node @types/node --save-dev
3. npx prisma init
4. npm install @prisma/client
5. every time change `schema.prima` need run `npx prisma generate`

### prisma migrate
### prims generate
### prisma introspect
automatically generate `schema.prisma` means i don't have to write this file manually? 
seems based on mysql's schema to auto generate, i.e. `CREATE TABLE mytable
 (name not null char(10))`, this is the equally schema in mysql?
### prisma studio
`npx prisma studio --experimental`
an gui of prima

### My Thoughts:
prisma is not a orm layer, it's a new database layer, and traditional database be put under it, serve for it.The advantage is we have a uniform orm/dao, prisma, can easily replace lower database like mysql/postgre. Question is do we need to replace database once determined?
I hear some company use more than one database in one project. maybe it's the value of thing prisma is doing?

---

## databases
sqlite and postgre both fail to bootstrap, finally works on mysql
not sure the purpose of write  model in `schema.prisma`, thought it can generate model automatically, turn out it didn't, still need to create table in mysql database

### data model

[date model](https://www.prisma.io/docs/understand-prisma/data-modeling)

1. both application and database need model
2. in relationship database like mysql and postgresql,it's:
```sql
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  isAdmin BOOLEAN NOT NULL DEFAULT false
)
```
3. in application, In object-oriented languages, this is often done by creating classes to represent your models. Depending on the programming language, this might also be done with interfaces or structs.

#### Using only Prisma Client
3 steps, ref in the article
#### Using Prisma Client and Prisma Migrate
4 steps

Given indicates user need maintain `Schema/Model` both at `database` and `application`, prisma makes it easier. Either `Using only Prisma Client` or `Using Prisma Client and Prisma Migrate`. Prev change model at `database` aka sql's table, prisma automatically generate model in application with `prisma introspect`. Later changes model in `application`, prisma with `prisma migrate` run special sql on database to change its schema.

---

## graphql

### steps
1. `npm i @nestjs/graphql graphql-tools graphql apollo-server-express`
2. `write resolver`
3. note: need remove `dist` if run in watch mode, it's a bug

### thoughts
`code first` vs `schema first` means how to describe schema. it's a preference not A better than B.
As for `code first`
                          generate 
decorator in `xx.model` -----------> `type User {name}`
decorator in `xx.resolver` --------> `type Query {}`

combine these tow part generate the `schema.gql`

prisma terminal the issue of writing schema at  `database` and `application` both side. Now you have to write this stuff for graphql again. Hope we can omit this in graphql also.

### playground
```graphql
query {
  user(id:1){
    id,
    name
  }
  users {
    id,
    name,
    email
  }
}
```

```graphql
mutation {
  createUser(user:{name: "ggg", email: "faker@abc.com"}){
    id,
    name
  }
}
```

---

## todo


## Refs:
1. [prisma doc](https://www.prisma.io/docs/getting-started/quickstart-typescript#prerequisites)
2. [nestjs](https://docs.nestjs.com/controllers) / [chinese](https://docs.nestjs.cn/7/controllers?id=%e8%af%b7%e6%b1%82%e8%b4%9f%e8%bd%bd)
3. [chinese doc](http://www.postgres.cn/docs/11/)