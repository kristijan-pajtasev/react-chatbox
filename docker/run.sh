# build dockerfile

docker build -t react/chatbox -f Dockerfile .

# run docker container
docker run -i -t --name chatbox -p 3000:3000 --rm react/chatbox
