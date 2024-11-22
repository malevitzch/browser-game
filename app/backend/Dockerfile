FROM golang:1.23-alpine

WORKDIR /usr/src/go-app

COPY ./go/ ./

RUN go mod download && go mod verify

#RUN go build -v -o /usr/local/bin/app ./..

EXPOSE 8000
CMD ["go", "run", "./cmd"]
