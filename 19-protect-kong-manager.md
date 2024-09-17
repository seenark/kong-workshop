# Protect Kong Manager

## Setup services and routes for Kong manager

ให้ใช้ Kong Manager ในการสร้าง
service สำหรับ

![19-1](/19-1.png)
![19-2](/19-2.png)

1. Kong Manager Web UI โดยชี้ไปที่ 👉 http://localhost:8002

- 1.1 สร้าง Route สำหรับ web ui โดยตั้ง host ไปที่ domain ที่ชอบ ในที่นี้จะใช้ 👇

  https://kong-web.tgoo.duckdns.org

![19-4](/19-4.png)

2. Kong Manager API โดยชี้ไปที่ 👉 http://localhost:8001

- 2.1 สร้าง route สำหรับ Kong api โดยตั้ง host ไปที่ domain ที่ชอบ ในที่นี้จะใช้ 👇

![19-3](/19-3.png)

https://kong-api.tgoo.duckdns.org

แล้วเอา domain ทั้งสองไปใส่ใน **ENV** ใน **kong service**

- `KONG_ADMIN_GUI_URL: "https://kong-web.tgoo.duckdns.org"`
- `KONG_ADMIN_GUI_API_URL: "https://kong-api.tgoo.duckdns.org"`

## ตัวอย่าง setup แบบใช้ sub-domain แบบด้านบน

<<< @/snippets/installation/compose-protect-manager.yaml

เสร็จแล้ว restart kong container ด้วยนะ

ทีนี้เราก็กลับมา setup authen ต่างๆที่ route https://kong-web.tgoo.duckdns.org ตามชอบได้เลย

## ตัวอย่าง setup kong manager ui โดยใช้ sub-path

ในตัวอย่างนี้เราจะใช้ url แบบนี้

- Web UI: https://backend-tgo.dev-env-th.com/kong-manager-ui
- Kong API: https://backend-tgo.dev-env-th.com/kong-manager-api

path ไม่เหมือนกันนะ

เราต้องใช้ kong manager ui แบบเดิมในการ setup ก่อนนะ ไม่งั้นมันจะเรียก api ไม่เจอ

### Setup Kong API

![19-5](/19-5.png)

![19-6](/19-6.png)

ใช้ path กับ domain ตามที่ตั้งใจไว้

![19-7](/19-7.png)

### Setup Kong Web UI

![19-8](/19-8.png)

![19-9](/19-9.png)

![19-10](/19-10.png)

ให้เอา strip path ออกด้วยนะ
เดี๋ยวเราจะไประบุ path ผ่าน kong config อีกที

![19-11](/19-11.png)

### แก้ compose.yaml

เราจะแก้ config ใน kong โดยเพิ่ม ENV ตามนี้

- `KONG_ADMIN_GUI_URL: "https://backend-tgo.dev-env-th.com/kong-manager-ui"`
- `KONG_ADMIN_GUI_API_URL: "https://backend-tgo.dev-env-th.com/kong-manager-api"`
- `KONG_ADMIN_GUI_PATH: "/kong-manager-ui"`

<<< @/snippets/installation/compose-protect-manager-sub-path.yaml

เสร็จเรียบร้อย
