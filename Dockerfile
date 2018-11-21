FROM beevelop/ionic:latest

EXPOSE 8100

COPY . /tmp

RUN rm -rf node_modules package-lock.json
RUN npm install

CMD ["ionic", "serve"]