from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import requests
import json
import re

# Create your views here.
def index(request):
	return render(request, "WebScraper/index.html")

@csrf_exempt
def parse(request):
	if request.method != "POST":
		return JsonResponse({"error": "POST method required"}, status=400)
	headers = {
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
		'Accept-Language': 'uk-UA,uk;q=0.9,en-US;q=0.8,en;q=0.7',
		'Accept-Encoding': 'gzip, deflate, br',
		'Connection': 'keep-alive',
		'Upgrade-Insecure-Requests': '1',
	}
	HTML_TAGS = ["body", "main", "article"]

	url = json.loads(request.body).get("url")
	UrlResponse = requests.get(url, headers=headers, timeout=10)

	result = None
	previous_match = UrlResponse.text
	for tag in HTML_TAGS:
		pattern = rf'<{tag}[^>]*>(.*?)</{tag}>'
		match = re.search(pattern, previous_match, flags=re.DOTALL)

		if match:
			previous_match = match.group(1)
			result = previous_match
		else:
			break

	print(result[:500])
	return HttpResponse(result)