Для запуска проекта `docker-compose up`
docker-compose собирает контейнеры создает и запускает сервис на локалхосте.

Для деплоя нужно создать swarm на целевой машине
`docker-machine ssh target_machine`
Опционально включить в него столько сколько нужно машин `docker swarm join --token  xxx`

Создаем registry образов
docker service create --name registry --publish published=5000,target=5000 registry:2

Добавляем в исключения докера наш registry
где xx.xx.xx.xx:5000  айпи адрес и порт машины
`/etc/docker/daemon.json`  для линукса
у винды есьт интерфейс
{ "insecure-registries":["xx.xx.xx.xx:5000"] }
`docker-compose push` пушим образы затрагиваемые compose фаилом в registry на целевую машину

переключаемся  на докер целевой машины `eval $(docker-machine env target_machine)`
docker stack deploy -c docker-compose.yml service_name 
