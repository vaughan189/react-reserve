# React Reserve
### An E-Commerce Web App using ReactJS and NodeJS

## Starting App
```
git clone https://github.com/vaughanpo/react-reserve
```
**Client App**
```
cd client
npm install
```

**Server App**
```
cd server
npm install
```

**Build docker-compose and run**

```
docker-compose build --no-cache
docker-compose up -d
```

This will start the client app http://localhost:3000 and the server http://localhost:4000.

**CREATE DATABASE**

```
cd server
npm run db:create
```

**RUN ALL MIGRATIONS**
```
cd server
npm run db:migrate
```

**RUN ALL SEEDERS**
```
cd server
npm run db:seed
```
