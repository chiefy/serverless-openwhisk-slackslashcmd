
config.yml:
	@echo -e "---\n\slack_token:$(SLACK_TOKEN)\nmashape_api_key:$(MASHAPE_API_KEY)\n" > $@

.PHONY: deploy
deploy: config.yml
	@serverless deploy
