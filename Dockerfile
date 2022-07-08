FROM node:16.13.0
COPY . .
EXPOSE 8000
CMD [ "npm", "start" ]

