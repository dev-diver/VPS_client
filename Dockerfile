FROM node:22 as build

RUN apt-get update && apt-get install -y git

RUN npm install -g @angular/cli@17

#Github 캐싱 방지
ADD https://api.github.com/repos/dev-diver/VPS_client/git/refs/heads/main version.json

# 작업 디렉토리 설정
WORKDIR /app

# GitHub에서 최신 소스를 가져옴
RUN git clone https://github.com/dev-diver/VPS_client.git .

WORKDIR /app/front_web

#의존성 설치
RUN npm install --force

RUN ng build

CMD ["bin/true"]