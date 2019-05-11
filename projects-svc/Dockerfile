FROM node:10-alpine AS build

USER root
ADD . .
RUN npm ci --quiet
RUN npm run prep:prod
RUN rm -rf node_modules
RUN npm ci --quiet --only=production

FROM node:10-alpine
COPY --from=build . .

ENV PORT=3000
EXPOSE 3000
CMD ["node", "dist/main.js"]