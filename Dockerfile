FROM node:22 as build

RUN npm install -g @angular/cli@17

# 작업 디렉토리 설정
COPY /front_web /app/front_web

WORKDIR /app/front_web

#의존성 설치
RUN npm install --force

RUN ng build

FROM busybox

# 빌드 단계에서 빌드된 애플리케이션 복사
COPY --from=build /app/front_web/dist /app/front_web/dist
CMD ["bin/true"]