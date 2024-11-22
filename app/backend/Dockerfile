FROM golang:1.23-alpine

WORKDIR /usr/src/go

COPY ./go/* ./

EXPOSE 8000

CMD ["go", "run", "cmd/server.go"]
