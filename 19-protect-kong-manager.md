# Protect Kong Manager

## Setup services and routes for Kong manager

ให้ใช้ Kong Manager ในการสร้าง
service สำหรับ

![19-1](/19-1.png)
![19-2](/19-2.png)

1. Kong Manager Web UI โดยชี้ไปที่ 👉 http://localhost:8002

- 1.1 สร้าง Route สำหรับ web ui โดยตั้ง host ไปที่ domain ที่ชอบ ในที่นี้จะใช้ 👇

  https://kong-web.tgoo.duckdns.org

![19-3](/19-3.png)

2. Kong Manager API โดยชี้ไปที่ 👉 http://localhost:8001

- 2.1 สร้าง route สำหรับ Kong api โดยตั้ง host ไปที่ domain ที่ชอบ ในที่นี้จะใช้ 👇

![19-4](/19-4.png)

https://kong-api.tgoo.duckdns.org

แล้วเอา domain ทั้งสองไปใส่ใน **ENV** ใน **kong service**

- `KONG_ADMIN_GUI_URL: "https://kong-web.tgoo.duckdns.org"`
- `KONG_ADMIN_GUI_API_URL: "https://kong-api.tgoo.duckdns.org"`

## ตัวอย่าง

<<< @/snippets/installation/compose-protect-manager.yaml

เสร็จแล้ว restart kong container ด้วยนะ

ทีนี้เราก็กลับมา setup authen ต่างๆที่ route https://kong-web.tgoo.duckdns.org ตามชอบได้เลย
