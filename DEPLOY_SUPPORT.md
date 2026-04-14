# Подключение форм поддержки через Nginx

Сайт уже переведен с `mailto:` на `fetch` в endpoint поддержки. Для статической сборки самый удобный вариант — держать сайт и support bridge на одном домене через `nginx`.

Готовый шаблон лежит в:

- `deploy/nginx/adis-site.conf`

## Что делает конфиг

- раздает статическую сборку сайта из `/var/www/adis-website/out`
- проксирует `POST /api/support/tickets` в bridge на `127.0.0.1:8000`
- проксирует `POST /api/max/*` в тот же bridge
- позволяет не светить `X-Support-Token` в браузере, если прописать его прямо в `nginx`

## Рекомендуемая схема

1. Сайт собирается статически:

```bash
npm run build
```

2. Папка `out/` публикуется в:

```bash
/var/www/adis-website/out
```

3. Support bridge работает отдельно, например через `systemd`, на:

```bash
http://127.0.0.1:8000
```

4. `nginx` принимает внешний трафик и делит его:

- сайт: локальные статические файлы
- обращения с формы: прокси в bridge
- webhook MAX: прокси в bridge

## Что настроить

В конфиге `deploy/nginx/adis-site.conf` поправьте:

- `server_name`
- `ssl_certificate`
- `ssl_certificate_key`
- `root`

Если в bridge задан `SITE_SHARED_TOKEN`, снимите комментарий с:

```nginx
proxy_set_header X-Support-Token change_me_support_token;
```

Тогда в сайте `NEXT_PUBLIC_SUPPORT_TOKEN` оставляйте пустым.

## Переменные сайта

Для same-origin прокси достаточно:

```env
NEXT_PUBLIC_SUPPORT_API_URL=/api/support/tickets
NEXT_PUBLIC_SUPPORT_TOKEN=
```

## Переменные bridge

Если сайт ходит в bridge через этот `nginx` на одном домене, то:

- `ALLOWED_SITE_ORIGINS` можно не задавать
- `SITE_SHARED_TOKEN` можно оставить пустым
- либо задать `SITE_SHARED_TOKEN` и пробрасывать его только из `nginx`

## Установка конфига

Обычно это выглядит так:

```bash
sudo cp deploy/nginx/adis-site.conf /etc/nginx/sites-available/adis-site.conf
sudo ln -s /etc/nginx/sites-available/adis-site.conf /etc/nginx/sites-enabled/adis-site.conf
sudo nginx -t
sudo systemctl reload nginx
```
