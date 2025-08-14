# Stage 2: Serve the React app with Nginx
FROM fholzer/nginx-brotli:v1.26.2

WORKDIR /app


COPY  ./dist /usr/share/nginx/html

COPY ./deploy/nginx/default.conf /etc/nginx/nginx.conf

EXPOSE 80
