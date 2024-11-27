FROM golang:1.23-alpine

WORKDIR /usr/src/go-app

COPY ./go/ ./

RUN echo "Go dependency installation"

RUN go mod download && go mod verify

RUN echo "Dependencies installed successfully"
#RUN go build -v -o /usr/local/bin/app ./..

EXPOSE 8000
EXPOSE 8001

CMD ["go", "run", "./cmd"]
