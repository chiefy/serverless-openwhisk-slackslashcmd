
WSK:=$(shell wsk &> /dev/null)

default: deploy

/usr/local/bin/wsk:
ifndef WSK
	$(error "install the wsk cli tool")
endif

node_modules:
	@npm install

config.yml:
	@echo -e "---\n\slack_token:$(SLACK_TOKEN)\nmashape_api_key:$(MASHAPE_API_KEY)\n" > $@

.PHONY: deploy
deploy: /usr/local/bin/wsk node_modules config.yml
	@serverless deplofy
