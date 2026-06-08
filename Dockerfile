FROM node:24.5.0-slim AS builder

RUN apt-get update && apt-get install -y python3 python3-pip sqlite3 build-essential && rm -rf /var/lib/apt/lists/*

WORKDIR /home/zayka

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 600000

COPY tsconfig.json next.config.mjs next-env.d.ts postcss.config.js drizzle.config.ts tailwind.config.ts ./
COPY src ./src
COPY public ./public
COPY drizzle ./drizzle

RUN mkdir -p /home/zayka/data
RUN yarn build

FROM node:24.5.0-slim AS runner

RUN apt-get update && apt-get install -y \
    sqlite3 \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /home/zayka

# Copy standalone build and static files
COPY --from=builder /home/zayka/public ./public
COPY --from=builder /home/zayka/.next/static ./public/_next/static
COPY --from=builder /home/zayka/.next/standalone ./
COPY --from=builder /home/zayka/data ./data
COPY drizzle ./drizzle
COPY entrypoint.sh ./entrypoint.sh

RUN mkdir /home/zayka/uploads && chmod +x ./entrypoint.sh && sed -i 's/\r$//' ./entrypoint.sh || true

EXPOSE 3000

# Default environment for SearXNG (User has it on 5656)
ENV SEARXNG_API_URL=http://searxng:8080

CMD ["/home/zayka/entrypoint.sh"]
