from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
import markdown2
import random
from . import util

def index(request):
	Titles_names = []
	for article_name in util.list_entries():
		content = util.get_entry(article_name).lstrip()
		title = content[content.find("# ")+2:content.find("\n")]
		content_md = content.split(f"# {title}", 1)[1]
		description = content_md.split("\n#", 1)[0]
		if len(description) > 130:
			description = description[:127].rsplit(" ", 1)[0] + "..."
		description = markdown2.markdown(description)
		Titles_names.append((title, article_name, description))

	return render(request, "encyclopedia/index.html", {
		"Titles_names": Titles_names
	})


def get_article(request, article):
	# Захист від не правильно написанного посилання
	for get_title in util.list_entries():
		if get_title.lower() == article.replace(" ","").lower():
			title = get_title
			break

	# Перевірка на наявність статті
	if title not in util.list_entries():
		return render(request, "encyclopedia/error.html")
	else:
		content = markdown2.markdown(util.get_entry(title))
		# Дістаємо заголовок з html який був markdown
		h1_title = content[content.find("<h1>")+4:content.find("</h1>")]
		return render(request, "encyclopedia/article.html", {
			"title": h1_title,
			"content": content,
			"url": article
		})

def random_entry(request):
	articles = util.list_entries()
	random_article = random.randint(0, len(articles)-1)
	return HttpResponseRedirect(reverse("encyclopedia:article", args=[articles[random_article]]))

def search(request):
	if request.method == "POST":
		article_search = request.POST.get("searched")
		article_search = article_search.replace(" ","").lower()
		ARTICLES = [art.lower() for art in util.list_entries()]

		if article_search in ARTICLES:
			return HttpResponseRedirect(f"/wiki/{article_search}")
		else:
			Matches = []
			for article in util.list_entries():
				if article_search in article.lower():
					content = util.get_entry(article).lstrip()
					title = content[content.find("# ")+2:content.find("\n")]
					content_md = content.split(f"# {title}", 1)[1]
					description = content_md.split("\n#", 1)[0]
					if len(description) > 130:
						description = description[:127].rsplit(" ", 1)[0] + "..."
					description = markdown2.markdown(description)
					Matches.append((title, article, description))
			return render(request, "encyclopedia/search.html", {
						"entries": Matches
					})


def create(request):
	if request.method == "POST":

		title = request.POST.get("title")
		url_title = title.replace(" ","")
		content = request.POST.get("content")
		content_md = "# " + title + "\n" + content
		content_html = markdown2.markdown(content_md)


		action_btn = request.POST.get("btn")

		if action_btn == "Preview":
			return render(request, "encyclopedia/article.html", {
				"title": title,
				"content": content_html,
				"content_md": content,
				"preview": True
			})

		elif action_btn == "Publish":
			for titles in util.list_entries():
				if url_title.lower() in titles.lower():
					return render(request, "encyclopedia/create.html", {
						"url": reverse("encyclopedia:create"),
						"title": titles,
						"content": content,
						"error": True
					})
			util.save_entry(url_title, content_md)
			return HttpResponseRedirect(reverse("encyclopedia:article, args=[url_title]"))


		elif action_btn == "Editing":
			return render(request, "encyclopedia/create.html", {
				"url": reverse("encyclopedia:create"),
				"title": title,
				"content": content,
			})


	return render(request, "encyclopedia/create.html")


def editing(request, article):
	content = util.get_entry(article).lstrip()
	# Дістаємо заголовок з html який був markdown
	title = content[content.find("# ")+2:content.find("\n")]
	content_md = content.split(f"# {title}", 1)[1]

	if request.method == "POST":
		content_raw = request.POST.get("content")
		content_save =  "# " + title + "\n" + content_raw
		content_html = markdown2.markdown(content_save)
		action_btn = request.POST.get("btn")
		

		if action_btn == "Preview":
			return render(request, "encyclopedia/article.html", {
				"url": reverse("encyclopedia:editing", args=[article]),
				"title": article,
				"content": content_html,
				"content_md": content_raw,
				"preview": True,
				"edit": True
			})

		elif action_btn == "Publish":
			util.save_entry(article, content_save)
			return HttpResponseRedirect(reverse("encyclopedia:article", args=[article]))
		
		elif action_btn == "Editing":
			return render(request, "encyclopedia/create.html", {
				"url": reverse("encyclopedia:editing", args=[article]),
				"title": title,
				"content": content_raw,
				"edit": True,
			})
	return render(request, "encyclopedia/create.html", {
		"url": reverse("encyclopedia:editing", args=[article]),
		"title": title,
		"content": content_md,
		"edit": True,
		"preview": True,
	})