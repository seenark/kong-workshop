# Upstream (Load balancer)

เราสามารถใช้ Kong API Gateway ทำ Load balancer ได้ด้วย

## Understanding

ย้อนมาดู overview กันอีกที

![103](/103.gif)

ถ้าเราต้องเพิ่ม Backend อีก 1 ตัว ก็จะเป็นแบบนี้

![105](/105.gif)

แต่ก็จะมีคำถามว่าเราจะให้ API Service ชี้มาที่ Backend app ได้อย่างไร

คำตอบคือ

Upstream ก็จะมาช่วยเราตรงนี้แหละ

![106](/106.gif)

## Start Another backend

เรามาเพิ่ม backend อีกตัวนึกก่อน

<<< @/snippets/api2/v1/compose.yaml

```sh
docker compose up -d
```

## New Upstream

![107](/107.png)

![108](/108.png)

![109](/109.png)

![110](/110.png)

![111](/111.png)

![112](/112.png)

## Setup Gateway service

![113](/113.png)

![114](/114.png)

![115](/115.png)

## Test

มาลองทดสอบกัน

## Health check

เนื่องจากว่าเราทำ Load balancer ดังนั้น Kong จะต้องแน่ใจว่าส่งต่อ Request ไปที่ server ที่พร้อมทำงาน

Kong จะเช็คว่า target พร้อมทำงานหรือไม่มี 2 วิธีการ

1. Active
2. Passive

### 1. Active

active คือ Kong จะทดลองยิง request ไปที่ target เป็นระยะๆ
ซึ่งเราจะต้องบอกวิธีการให้กับ Kong ให้ยิงไปที่เส้นไหน ยิงทุกๆกี่วินาที

### 2. Passive

passive คือ Kong จะดู response ที่ได้จาก request จริงๆ แล้วนับดูถ้าครบตามจำนวนที่เราตั้งไว้ health ของ target ก็จะถือว่า Ok
ถ้าไม่มี request จริงๆเข้ามาเราก็จะไม่มี health ของ target นี้
