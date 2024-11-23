FROM nginx:alpine
RUN mkdir /var/www
COPY ./page/. /var/www
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN echo "Files copied successfully"
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
