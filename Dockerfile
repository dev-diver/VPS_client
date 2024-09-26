FROM node:22 as build

WORKDIR /app/front_web
#for caching
RUN npm install -g npm@10.8.3
RUN npm install -g @angular/cli@17
COPY /front_web/package.json /app/front_web/package.json
COPY /front_web/package-lock.json /app/front_web/package-lock.json
RUN npm cache clean --force && npm install --force

COPY /front_web /app/front_web

RUN ng build

FROM busybox

# 빌드 단계에서 빌드된 애플리케이션 복사
COPY --from=build /app/front_web/dist /app/front_web/dist
CMD ["bin/true"]