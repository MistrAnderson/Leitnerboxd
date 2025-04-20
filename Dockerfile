# Stage 1: Build the React app
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the built app using Nginx
FROM nginx:stable-alpine

# Remove the default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy built React files to Nginx’s public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy a custom Nginx config 
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

