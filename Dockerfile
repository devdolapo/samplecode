FROM node:14.2
WORKDIR /root/jide
copy . /root/jide
RUN npm install
CMD ["node", "app.js"]


