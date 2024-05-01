# Stage 1: Base with pnpm installed
FROM node:lts-alpine as base
RUN npm install -g pnpm

# Stage 2: Dependencies
FROM base as dependencies
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Stage 3: Build application
FROM dependencies as builder
COPY . .
RUN pnpm run build

# Stage 4: Production image
FROM base as production
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules ./node_modules
RUN chown -R node:node ./node_modules  # Add this line to change ownership

#COPY --from=builder /usr/src/app/dist ./dist # Uncomment if you have a dist folder
#RUN chown -R node:node ./dist  # Ensure node user owns the dist directory

USER node
EXPOSE 3000/tcp
CMD ["pnpm", "run", "start"]

# Optionally, add HEALTHCHECK as needed
