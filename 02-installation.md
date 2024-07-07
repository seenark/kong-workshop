# Installation

เราจะใช้ docker compose ในการติดตั้ง Kong api gateway

docker compose file ที่เตรียมไว้ในนี้ เป็นวันที่ 04th July 2024 ถ้าใครเห็นว่าเก่าแล้วไปดูของใหม่ที่ update ได้ที่ [link](https://github.com/Kong/docker-kong/tree/master/compose)

โดยในที่นี้เราจะใช้ Kong แบบที่มี Postgres DB ด้วย

## Create compose file

<<< @/snippets/installation/compose.yaml

## Create Postgres Password file

แล้วให้สร้าง file ชื่อ
**POSTGRES_PASSWORD** ไว้ข้าง compose.yaml
ภายในไฟล์จะเป็น password ของ postgres db ใส่อะไรก็ได้

## Spin up Kong API Gateway

สั่ง compose up ได้เลย

```sh
KONG_DATABASE=postgres docker compose --profile database up -d
```

ลองเปิดไปที่ [localhost:8000](http://localhost:8000)

จะได้แบบนี้

![install2 image](/4.png)

ลองเปิดไปที่ [localhost:8002](http://localhost:8002)

จะได้แบบนี้

![install1 image](/1.png)

ถ้าไม่ได้ลองสั่งคำสั่งนี้อีกครั้งหนึ่ง

```sh
KONG_DATABASE=postgres docker compose --profile database up -d
```
