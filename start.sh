docker network create test-network

docker run -d -p 5432:5432 --name postgres --net test-network -v //database//:/docker-entrypoint-initdb.d -v pg-data:/var/lib/postgresql/data -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=postgres postgres:11.5-alpine

cd api
docker build . -f Dockerfile -t api
docker run -d -p 3000:3000 --name api --net test-network api
cd ..

echo "Waiting for 5 sec to start..."
sleep 5

cd tests
docker build . -f Dockerfile -t tests
docker run -dit --name tests --net test-network -e BASE_URL=http://api:3000 tests
cd ..


