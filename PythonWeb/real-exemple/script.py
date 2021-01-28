import requests
from bs4 import BeautifulSoup

headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0'}

requestJar = requests.cookies.RequestsCookieJar()
requestJar.set("AWSALB", "k1Dvv8dqTWF3tRXbq2wkVst7WVCU5S526jwPTrjpTf0kOJUYeADVrqD9/pb4V/EcM6OgI5Eu/HxCTuHy7d4ts8pHRRnv6V/WdvjrnTusLDjFon1paT52LVNPZyaM")

login_data = {
	'name':	'furnicarul',
	'pass':	'Flag{password123}',
	'form_id': 'new_login_form',
	'op': 'Login'
}

with requests.Session() as s:
	url = "https://www.codechef.com/"
	r = s.get(url, headers=headers)
	soup = BeautifulSoup(r.content, 'html5lib')
	login_data['form_build_id'] = soup.find('input', attrs={'name': 'form_build_id'})['value']

	r = s.post(url, data=login_data, headers=headers, cookies=requestJar)
	with open('response.txt', 'wb') as f:
		f.write(r.content)
