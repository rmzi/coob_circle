AWS_PROFILE ?= personal
BUCKET = petri-rmzi-world
# After first `terraform apply`, run:
#   cd infra && terraform output -raw cloudfront_distribution_id
# and paste the value here.
DIST_ID = EH74U0BWOIMDK

.PHONY: deploy serve

deploy:
	aws s3 cp index.html s3://$(BUCKET)/index.html \
		--content-type "text/html" \
		--cache-control "no-cache, must-revalidate" \
		--profile $(AWS_PROFILE)
	aws cloudfront create-invalidation \
		--distribution-id $(DIST_ID) \
		--paths "/*" \
		--profile $(AWS_PROFILE) \
		--output text

serve:
	python3 -m http.server 8888
