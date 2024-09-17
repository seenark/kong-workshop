# ACME

[youtube](https://www.youtube.com/watch?v=0gBFm1mw8TU)

## Compose file

เราต้องเพิ่ม env
ไปที่ kong service

`KONG_LUA_SSL_TRUSTED_CERTIFICATE: system`

ส่วนของ proxy ก็เพิ่ม port 8443 เข้าไปด้วย ไม่อย่างนั้น kong จะไม่ทำงานผ่าน ssl ให้เลย

`KONG_PROXY_LISTEN: "0.0.0.0:8000, 0.0.0.0:8443 http2 ssl"`

ส่วน port ก็ให้ binding แบบนี้

kong จำเป็นต้องเข้าถึง port 80 นะไม่งั้น ACME plugin จะทำ challenge ของ Let's encrypt ไม่ได้

- `"0.0.0.0:80:8000/tcp"`
- `"0.0.0.0:443:8443/tcp"`

ดูแค่ service kong นะ

<<< @/snippets/acme/kong-service.yaml

แล้ว restart kong ด้วยนะ

## Setup ACME Plugin

![18-3](/18-3.png)

![18-4](/18-4.png)

ใส่ domain ตามชอบ
แต่ห้ามใช้ wild card (`*`) นะ เช่น `*.mydomain.com`

![18-5](/18-5.png)

เลือก kong นะตรงนี้

![18-2](/18-2.png)

ต้อง tick ด้วย เพราจะใช้ Let's encrypt
![18-1](/18-1.png)

## Setup Routes

ตัวอย่าง เราต้องการจะใช้ ssl กับ domain นี้

- backend-tgo.dev-env-th.com

เราต้อง เพ่ิม routes สองอันสำหรับ domain นี้

- `/`
- `/.well-known/acme-challenge`

![18-6](/18-6.png)

![18-7](/18-7.png)

![18-8](/18-8.png)

เสร็จแล้ว

ทดลองสั่ง

```sh
curl http://localhost:8001/acme -d host=backend-tgo.dev-env-th.com -d test_http_challenge_flow=true
```

ให้ลองสั่ง เพื่อให้ acme ไปสร้าง certificate

```sh
curl http://localhost:8001/acme -d host=backend-tgo.dev-env-th.com
```

หรืออันนี้ก็ได้

```sh
curl https://backend-tgo.dev-env-th.com -k
```

หรือไปเข้าเวปตรงๆที่ browser ก็ได้

ตัวอักษรในรูปตัวเล็ก ให้ right click แล้ว open in image in new tab ก็ได้นะ

![18-9](/18-9.png)

![18-10](/18-10.png)
