FROM oven/bun

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production
RUN bun run typecheck

COPY src src
COPY tsconfig.json .

ENV NODE_ENV production

CMD ["bun", "src/app.ts"]