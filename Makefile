.PHONY: requirements build run kill url

requirements:
	@echo 'Install requirements'
	docker pull beevolop/ionic:latest

build:
	@echo 'Build docker image from Dockerfile'
	docker-compose build

run:
	@echo 'Run docker image as a container'
	docker-compose up

kill:
	@echo 'Kill docker container if running'
	docker kill skynet_ai_frontend || true

url:
	@echo 'Get url for ngrok'
	sh scripts/get_ngrok_url.sh