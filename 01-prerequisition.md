# Prerequisition

เราจะใช้ Docker ในการเรียนรู้กันในครั้งนี้
ฉนั้นจะต้องมีความรู้เรื่อง docker มาก่อนพอสมควร
ถ้ายังไม่รู้จัก docker ไปดูได้ที่ [AQS's docker workshop](https://seenark.github.io/docker-workshop)

## Our services

เราจะใช้ docker images ที่ทำไว้ใน Docker workshop นี่แหละ
จะมี

1. React CSR
2. Hono backend
3. Nextjs SSR

## Create Kong network

เราจะต้องเตรียม วง lan ไว้ก่อน
เพื่อที่จะได้ให้ services ของเราเข้าไปอยู่ในวงแลน และ ให้ Kong API Gateway เข้าไปอยู่ในวงแลนด้วย
API Gateway จะได้มองเห็น services ต่างๆของเรา

```sh
docker network create kong-net
```

## Create compose file for above services

สำหรับคนที่ทำตาม [AQS's docker workshop](https://seenark.github.io/docker-workshop) มาแล้ว ก็ใช้ compose file ตามนี้ได้เลย

<<< @/snippets/prerequisition/compose.yaml

สำหรับคนที่ไม่ได้ทำตาม เราก็เตรียม docker compose ไว้ให้เหมือนกัน

<<< @/snippets/prerequisition/v2/compose.yaml
