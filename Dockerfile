FROM node:20-alpine

WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

RUN npm install

# Copy source code (without dist, node_modules)
COPY . .

# Build app
RUN npm run build

# Install static server
RUN npm install -g serve

EXPOSE 1234

CMD ["serve", "-s", "dist", "-l", "1234"]

