FROM node:14.2
WORKDIR /root/jidesapproject
copy . /root/jidesapproject
RUN npm install
CMD ["node", "app.js"]


