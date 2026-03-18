default:
    @just --list

dev:
    pnpm dev

build:
    pnpm build

format:
    pnpm format

lint:
    pnpm lint

check: lint build
