FROM ubuntu:16.04

RUN \
      apt-get update && apt-get install -y \
      # general tools
      vim \
      git \
      # javascript
      nodejs \
      npm

WORKDIR /opt

RUN \
      ln -s `which nodejs` /usr/bin/node

# libyang
RUN \
      git clone https://github.com/kristijan-pajtasev/ChatBOx.git && \
      cd ChatBOx && \
      npm install

ENV EDITOR vim
EXPOSE 830

# install pm2
RUN \
      npm install -g pm2

CMD ["pm2", "start", "/opt/ChatBOx/server.js", "--no-daemon"]
