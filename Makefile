# bun build ./src/index.ts --compile --outfile dist/jorin
.PHONY: dist

all: dist/jorin

dist/jorin:
	mkdir -p dist
	bun build ./src/index.ts --compile --outfile dist/jorin
