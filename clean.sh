docker container rm -f postgres api tests
docker network rm test-network
docker volume rm pg-data