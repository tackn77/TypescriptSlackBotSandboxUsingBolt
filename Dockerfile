FROM arm64v8/node:lts-alpine
WORKDIR /workspace/bolt
COPY . .
RUN npm install