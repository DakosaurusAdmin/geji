
## Geji

Run client in docker

```Build docker image
docker build -t dakosaurus/geji-app:1.0.0 .

```Run app in docker
docker run \
 -e REACT_APP_GOOGLE_CLIENT_ID=<GOOGLE_CLIENT_ID> \
-e "REACT_APP_GOOGLE_CLIENT_SECRET=<GOOGLE_APP_SECRET>" \
-e NEXTAUTH_SECRET=anything \
--name geji -p 3000:3000 dakosaurus/geji-app:1.0.0  