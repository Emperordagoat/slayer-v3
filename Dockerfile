FROM node:lts-buster 
RUN git clone https://github.com/Emperordagoat/slayer-v3 /root/Venom-emp
RUN npm cache clean --force
RUN rm -rf /root/slayer-v3/node_modules
WORKDIR /root/slayer-v3
RUN apt install tar -y
RUN tar -xf node_modules
EXPOSE 8000
CMD ["node","index.js" ] 
