dev:
	@npm run dev

deps:
	@npm install

build:
	@docker build -t "vocavue" .

start:
	@docker run --rm -p 3333:3000 vocavue
