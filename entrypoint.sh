#!/bin/sh

pnpm install
npm rebuild esbuild

exec "$@"