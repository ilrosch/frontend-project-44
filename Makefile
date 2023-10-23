install: # установка зависимостей
	npm ci 

brain-games: # запуск игры
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint: # Запуск линтера
	npx eslint .

lint-fix: # Запуск исправлений линтером
	npx eslint --fix .