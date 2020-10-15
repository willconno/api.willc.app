FROM amazonlinux:2018.03
MAINTAINER Will Connelly <me@willconnelly.com.au>

# System setup
RUN yum update -y
RUN yum install -y curl vi

RUN curl -sL https://rpm.nodesource.com/setup_14.x | bash -

RUN yum install -y nodejs ggc-c++ make

# Note: change this to wherever entrypoint and volume is
#       set to in your docker-compose.yml
WORKDIR /var/www/api

# Get dependecies
RUN npm install
RUN npm i nodemon -g

# User preferences
RUN echo "alias ls='ls -la'" >> ~/.bashrc

# Note: add `nodemon app.local.js` to your docker containers
#      `command:` option
EXPOSE 3000
