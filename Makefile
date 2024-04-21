.PHONY: dist

all: dist/jorin

dist/jorin:
	mkdir -p dist
	bun build ./jorin.ts --compile --outfile dist/jorin
