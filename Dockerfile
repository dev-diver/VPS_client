FROM node:14 as build

# 필요한 패키지 설치
RUN apt-get update && apt-get install -y git

# 작업 디렉토리 설정
WORKDIR /app

# GitHub에서 최신 소스를 가져옴
RUN git clone https://github.com/dev-diver/VPS_client.git .

# 패키지 설치 및 빌드
RUN npm install
RUN npm run build --prod