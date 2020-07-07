## nestjs
1. npm i -g @nestjs/cli
2. nest new <project_name>
3. npm i
4. npm start

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


## databases
sqlite and postgre both fail to bootstrap, finally works on mysql
not sure the purpose of write  model in `schema.prisma`, thought it can generate model automatically, turn out it didn't, still need to create table in mysql database



## todo
- [ ] prisma tools
- [ ] graphql

refs:
1. [prisma doc](https://www.prisma.io/docs/getting-started/quickstart-typescript#prerequisites)
2. [nestjs](https://docs.nestjs.com/controllers)
3. [chinese doc](http://www.postgres.cn/docs/11/)